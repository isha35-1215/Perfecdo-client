import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {


    const { logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="flex font-poppins">

            <div className="w-64 min-h-screen bg-blue-500">
                <ul className="menu text-xl bg-inherit text-white font-semibold">
                    <a className="flex gap-2 normal-case invisible lg:visible  my-4  text-3xl font-bold">
                        <img className='w-[40px] h-[40px] rounded-full' src="https://i.ibb.co/4s0CWqs/checklist-10078305.png" alt="icon1" border="0" />Perfecdo</a>

                    <div>
                        <li><NavLink to={"/dashboard/newTasks"}>New Tasks</NavLink></li>                       

                    </div>

                    <div className="divider"></div>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><button onClick={handleSignOut}>Logout</button></li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;