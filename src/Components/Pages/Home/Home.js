import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import Service from './Service';
import recent1 from "../../../assets/img/recent/rec1.jpg"
import recent2 from "../../../assets/img/recent/rectest2.jpg"
import recent3 from "../../../assets/img/recent/rec3.jpg"
import './Home.css'
const Home = () => {
    const services = useLoaderData();
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
                        services.map(service => <Service
                            key={service._id}
                            service={service}></Service>)
                    }

                </div>
                <div className='text-center'>
                    <Link to='/services'><button className="btn btn-outline">See all</button></Link>
                </div>
            </div>
            {/* Most recent shots */}
            <div className='mb-10'>
                <h1 className='text-center text-5xl font-bold '>Recent Shots</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                    <div className='col-span-1 row-span-2'>
                        <div className='relative'>
                            <img src={recent1} alt=""
                                className="rec-img" />
                            <p className='absolute bottom-10 text-2xl left-5 font-bold'>01 November 2022</p>
                            <div className='absolute bottom-3 text-2xl left-4 font-bold flex justify-items-center items-center'><FaMapMarkerAlt></FaMapMarkerAlt><p>Šurany, Slovensko</p></div>
                        </div>
                    </div>
                    <div className='col-span-1 row-span-1'>
                        <div className='relative'>
                            <img src={recent2} alt="" className='rec2-size' />
                            <p className='absolute bottom-10 text-2xl left-5 font-bold'>23 October 2022</p>
                            <div className='absolute bottom-3 text-2xl left-4 font-bold flex justify-items-center items-center'><FaMapMarkerAlt></FaMapMarkerAlt><p>BROSE ARENA</p></div>
                        </div>
                        <div className='relative'>
                            <img src={recent3} alt="" />
                            <p className='absolute bottom-10 text-2xl left-5 font-bold'>08 November 2022</p>
                            <div className='absolute bottom-3 text-2xl left-4 font-bold flex justify-items-center items-center'><FaMapMarkerAlt></FaMapMarkerAlt><p>Iecava, Latvia</p></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Photo gallery */}
            <div className='mb-10'>
                <h1 className='text-center text-5xl font-bold'>Gallery</h1>
            </div>
        </div>
    );
};

export default Home;