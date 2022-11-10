import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/Pages/AddService/AddService";
import Blog from "../../Components/Pages/Blog/Blog";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import MyReviews from "../../Components/Pages/MyReviews/MyReviews";
import UpdateReview from "../../Components/Pages/MyReviews/UpdateReview";
import Register from "../../Components/Pages/Register/Register";
import ReviewForm from "../../Components/Pages/Review/ReviewForm";
import Services from "../../Components/Pages/Services/Services";
import SingleService from "../../Components/SingleService/SingleService";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
                loader: () => fetch('https://paparazzo-photography-server.vercel.app/services'),
            },
            {
                path: '/services/:id',
                element: <SingleService></SingleService>,
                loader:
                    ({ params }) => fetch(`https://paparazzo-photography-server.vercel.app/services/${params.id}`),
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
                element: <Blog></Blog>
            },
            {
                path: '/givereview',
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/updatereview/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://paparazzo-photography-server.vercel.app/review/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
        ],
        errorElement: <Error></Error>
    },
]);
export default router;
