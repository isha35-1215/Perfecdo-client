// Task.js
import { useDrag, useDrop } from 'react-dnd';

const Task = ({ task, onTaskDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {/* Render your task content here */}
      <p>{task.title}</p>
    </div>
  );
};

const DraggableTask = ({ task, onTaskDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onTaskDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const dropStyle = {
    background: isOver ? 'lightgreen' : 'white',
    padding: '8px',
    border: '1px solid #ddd',
    cursor: 'move',
  };

  return (
    <div ref={drop} style={dropStyle}>
      <Task task={task} onTaskDrop={onTaskDrop} />
    </div>
  );
};

export default DraggableTask;