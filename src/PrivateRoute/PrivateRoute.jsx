import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-96"></progress>
    }

    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};


export default PrivateRoute;