import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const AddTask = () => {

    const { user } = useContext(AuthContext)
    const [toDo, setToDo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [draggedTask, setDraggedTask] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/tasks');
            const tasks = res.data;
            setToDo(tasks.filter(task => task.status === 'todo'));
            setOngoing(tasks.filter(task => task.status === 'ongoing'));
            setCompleted(tasks.filter(task => task.status === 'completed'));
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };
    useEffect(() => {
        fetchData();
    })





    const handleDragStart = (task) => {
        setDraggedTask(task);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = async (targetColumn) => {
        if (!draggedTask) return;

        try {
            // Update the status on the server
            await axios.put(`http://localhost:5000/updateStatus/${draggedTask._id}`, { status: targetColumn });

            // Fetch updated data from the server
            fetchData();

            setDraggedTask(null);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };
    const onSubmit = async (data) => {
        const selectedDate = watch('Date');
        const selectedPriority = watch('Priority');

        const taskInfo = {
            title: data.Product_name,
            description: data.Description,
            deadline: selectedDate,
            priority: selectedPriority,
            status: "todo",
            // You might need to modify this based on your user context
            owner_email: user.email
        };

        try {
            const res = await axios.post('http://localhost:5000/addtask', taskInfo);
            if (res.data.insertedId) {
                // Refresh task data after adding a new task
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${data.Product_name} is added to the collection.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const handleEdit = (event, id) => {
        event.preventDefault();
        
        const form = event.target;
        const priority = form.elements.priority.value;
        const deadline = form.elements.deadline.value;
        const description = form.elements.description.value;
    
        const edited = { priority, deadline, description };
    
        fetch(`http://localhost:5000/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(edited)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                swal("Success", "Your task is edited", "success");
                document.getElementById(`my-modal-${id}`).close();
                fetchData(); // Refresh the task data after editing
            }
        })
        .catch(error => {
            console.error('Error editing task:', error);
        });
    };
    
    

    return (
        <div className="mt-5 ml-3 flex flex-col justify-center items-center">
            <h2 className="text-4xl lg:text-4xl text-blue-900 text-center font-bold mb-8">Add Your Task Here</h2>
            <form className="form form-control gap-3 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col lg:flex-row gap-3">
                    <input
                        className="input input-bordered input-info w-full max-w-xs"
                        placeholder="Task Name"
                        {...register('Product_name', { required: true })}
                    />
                    <input
                        type="date"
                        className="input input-bordered input-info w-full max-w-xs"
                        placeholder="Deadline"
                        {...register('Date', { required: true })}
                    />
                    <select
                        className="select select-bordered select-info w-full max-w-xs"
                        placeholder="Priority"
                        {...register('Priority', { required: true })}
                    >
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <textarea
                    placeholder="Task Description"
                    className="textarea textarea-info  max-w-xs w-full"
                    {...register('Description', { required: true })}
                />
                <button className="btn btn-primary bg-blue-900 text-white" type="submit">
                    Submit
                </button>
                {errors.exampleRequired && <span>This field is required</span>}
            </form>

            <div className="grid grid-cols-3 gap-5 my-10">
                <div
                    className="task-list w-80 border p-2"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={() => handleDrop('todo')}
                >
                    <h3 className="border-b mb-2 pb-2 font-bold text-blue-900 text-3xl">To-Do</h3>
                    {toDo.map((task) => (
                        <div
                            key={task._id}
                            draggable
                            onDragStart={() => handleDragStart(task)}
                        >
                            <p className='text-blue-700 font-semibold text-2xl'>{task.title}</p>
                            <h1 className='text-lg'>Priority: {task.priority}</h1>
                            <h1 className='text-lg'>Deadline: {task.deadline}</h1>
                            <h1 className='text-lg'>Description: {task.description}</h1>
                            <div className='flex justify-between mt-4'>
                                <button className="bg-blue-500 text-white text-xl px-6 btn btn-warning" onClick={() => document.getElementById(`my-modal-${task._id}`).showModal()}>✎</button>
                                <dialog id={`my-modal-${task._id}`} className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost text-blue-600 font-extrabold text-2xl absolute right-6 top-6">✕</button>
                                        </form>
                                        <form onSubmit={()=> handleEdit(task._id)}>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Priority</span>
                                                </label>
                                                <select
                                                    className="select select-bordered select-info w-full max-w-xs"
                                                    name="priority"
                                                    placeholder={task.priority}
                                                >
                                                    <option value="low">Low</option>
                                                    <option value="moderate">Moderate</option>
                                                    <option value="high">High</option>
                                                </select>                                            </div>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Deadline</span>
                                                </label>
                                                <input type="text" name="deadline" placeholder={task.deadline} className="input input-bordered border-blue-600 w-full max-w-xs" />
                                            </div>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Description</span>
                                                </label>
                                                <input type="text" name="description" placeholder={task.description} className="input input-bordered border-blue-600 w-full max-w-xs" />
                                            </div>
                                            <div className="modal-action">
                                                <button type="submit" className="btn btn-secondary bg-blue-500 text-base normal-case text-white px-4">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </dialog>                                <button className='btn btn-error text-white text-xl px-6 bg-red-600'>X</button>
                            </div>
                            <div className="divider"></div>
                        </div>
                    ))}
                </div>
                <div
                    className="task-list w-80 border p-2"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={() => handleDrop('ongoing')}
                >
                    <h3 className="border-b mb-2 pb-2 font-bold text-blue-900 text-3xl">Ongoing</h3>
                    {ongoing.map((task) => (
                        <div
                            key={task._id}
                            draggable
                            onDragStart={() => handleDragStart(task)}
                        >
                            <p className='text-blue-700 font-semibold text-2xl'>{task.title}</p>
                            <h1 className='text-lg'>Priority: {task.priority}</h1>
                            <h1 className='text-lg'>Deadline: {task.deadline}</h1>
                            <h1 className='text-lg'>Description: {task.description}</h1>
                            <div className="divider"></div>


                        </div>
                    ))}
                </div>
                <div
                    className="task-list w-80 border p-2 "
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={() => handleDrop('completed')}
                >
                    <h3 className="border-b mb-2 pb-2 font-bold text-blue-900 text-3xl">Completed</h3>
                    {completed.map((task) => (
                        <div key={task._id}>
                            <p className='text-blue-700 font-semibold text-2xl'>{task.title}</p>
                            <h1 className='text-lg'>Priority: {task.priority}</h1>
                            <h1 className='text-lg'>Deadline: {task.deadline}</h1>
                            <h1 className='text-lg'>Description: {task.description}</h1>
                            <div className="divider"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddTask;