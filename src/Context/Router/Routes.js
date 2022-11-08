import { createBrowserRouter } from "react-router-dom";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
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
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/services'),
            },
    ],
        errorElement:<Error></Error>
    },
]);
export default router;
