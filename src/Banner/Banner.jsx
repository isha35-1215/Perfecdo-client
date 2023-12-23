import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div data-aos="zoom-in" className="hero min-h-screen mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/pRPCwy2/elevated-view-coffee-cup-business-budget-plan-eyeglasses-blue-backdrop.jpg)' }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center lg:text-left">
            <div className="lg:min-w-[1100px]">
                <h1 className="text-5xl text-black font-bold">Perfecdo</h1>
                <h1 className="text-5xl my-4 text-black font-bold">Empower Your Productivity:</h1>
                <p className="my-2 text-black text-xl lg:text-2xl font-medium">Unleash the Power of Seamless Task Management with Perfecdo.</p>
                <p className="mb-4 text-black text-xl lg:text-2xl font-medium">Your Tasks, Your Way – Effortless, Efficient, and Elevated!</p>
                <Link to={'/login'}>
                <button className="btn btn-accent text-base bg-blue-950 text-white">Let's Explore</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Banner;