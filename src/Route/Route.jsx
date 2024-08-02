import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CheckOut from "../CheckOut/CheckOut";
import MyCarts from "../MyCarts/MyCarts";
import PrivateRoute from "../Private/PrivateRoute";
import ServiceDetails from "../Pages/Home/ServiceDetails/ServiceDetails";


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
            {
                path:'/carts',
                element:<PrivateRoute><MyCarts/></PrivateRoute>
            },
            {
                path:'/checkOut/:id',
                element:<PrivateRoute><CheckOut/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:1101/services/${params.id}`)
            },
            {
                path:'/serviceDetails/:id',
                element:<PrivateRoute><ServiceDetails/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:1101/services/${params.id}`)
            }
        ]
    }
]) 

export default Route;