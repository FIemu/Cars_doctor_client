import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]
    }
]) 

export default Route;