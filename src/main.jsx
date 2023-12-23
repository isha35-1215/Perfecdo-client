import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import Main from './Layout/Main';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Login/Login';
import Contact from './Contact/Contact';
import Register from './Register/Register';
import Dashboard from './Layout/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddTask from './AddTask/AddTask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'newTasks',
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute> 
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
