import { createBrowserRouter } from "react-router-dom";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import Register from "../../Components/Pages/Register/Register";
import Services from "../../Components/Pages/Services/Services";
import SingleService from "../../Components/SingleService/SingleService";
import Main from "../../layout/Main";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000'),
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services'),
            },
            {
                path: '/services/:id',
                element: <SingleService></SingleService>,
                loader: 
                ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Register></Register>
            },
            {
                path: '/reviews',
                element: <Register></Register>
            },
        ],
        errorElement: <Error></Error>
    },
]);
export default router;
