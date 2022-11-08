import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
// import natureImg from "https://ibb.co/jVLqpKF"
// import weddImg from "https://ibb.co/z5Kz7q0"
// import personImg from 'https://ibb.co/2jCjYHF'
// import wildImg from 'https://ibb.co/vZmXN9x'
// import sportsImg from 'https://ibb.co/DYQhRdz'
// import newsImg from 'https://ibb.co/VDTFDJw'
const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            {/* Hero section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                        <p className="mb-5">Our memories are captured in photos. Be my pride by letting me capture your memories. Like I have done thousands of times before.</p>
                        {/* modal button */}
                        <label htmlFor="hire-me-modal" className="btn btn-outline">Hire me</label>
                        {/* modal body */}
                        <input type="checkbox" id="hire-me-modal" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Congratulations!!!</h3>
                                <p className="py-4">Please check your email. Thank you.</p>
                                <div className="modal-action">
                                    <label htmlFor="hire-me-modal" className="btn">Okay</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className='my-10'>
                <h1 className='text-center text-5xl font-bold'>My Services</h1>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}></Service>)
                }
                
                </div>
                <div className='text-center'>
                <button className="btn btn-primary">See all</button>
                </div>
            </div>
            {/* Most recent shots */}
        </div>
    );
};

export default Home;