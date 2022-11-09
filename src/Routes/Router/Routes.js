import { createBrowserRouter } from "react-router-dom";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import Register from "../../Components/Pages/Register/Register";
import Services from "../../Components/Services/Services";
import Main from "../../layout/Main";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000'),
            },
            {
            path:'/services',
            element:<Services></Services>,
            loader:()=>fetch('http://localhost:5000/services'),
            },
            {
            path:'/login',
            element:<Login></Login>,
            },
            {
            path:'/register',
            element:<Register></Register>
            },
    ],
        errorElement:<Error></Error>
    },
]);
export default router;
