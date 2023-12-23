import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {


    const {createUser, updateUser} = useContext(AuthContext);

    
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form =new FormData(e.currentTarget);
        const name=form.get("Name");
        const email=form.get("Email");
        const password=form.get("Password");
        const photo=form.get("Photo URL")
        console.log(name,email,photo,password);
        
        if (password.length < 6) {
            return swal("Oops !!", "Total length of password at least 6 characters", "error");
        }

        // Check if the input contains at least one capital letter
        if (!/[A-Z]/.test(password)) {
            return swal("Oops !!", "Give at least one capital letter ", "error");
        }

        // Check if the input contains any special characters
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return swal("Oops !!", "Give at least one special character ", "error");
        }
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            updateUser(name,photo)
            .then(()=>console.log("updated"))
            .catch();
            swal("Congrats!!","You are successfully registered!", "success");
            Navigate('/dashboard');
        })
        .catch(error =>{
            console.error(error)
        })
    }

    
    return (
        <div className="mb-10">
            <div  className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl text-blue-900 font-bold">Register now!</h1>
                    </div>
                    <div className="card w-96 shadow-sm bg-blue-50">
                        <form onSubmit={handleRegister} className="p-6">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="Email" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="Password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary bg-blue-700 border-blue-500 text-lg normal-case text-white">Register</button>
                            </div>
                            <p className="mt-2">Already have an account? <Link className="text-blue-700 font-medium" to="/login">Login</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;