import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-pink-50">
            <div className='text-center'>
            <img className='border-none' src="https://i.ibb.co/sRSb03C/404error.jpg" alt="404" border="0"></img>
            <h2 className='text-4xl font-bold text-pink-800 my-10'>Page Not Found</h2>
            <Link to="/"><button className="px-4 py-2 my-6 shadow-2xl rounded-xl text-xl font-medium text-pink-700 bg-pink-200 block mx-auto">Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;