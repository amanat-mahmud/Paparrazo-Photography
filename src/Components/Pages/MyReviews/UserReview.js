import React from 'react';
import { FaClock, FaStar,FaTrashAlt,FaEdit } from "react-icons/fa";

const UserReview = ({ review,handleDelete }) => {
    const {_id, title, description, name, image, rating, date, time, zone } = review
    
    return (
        <div className='my-10'>
            <section className="text-white body-font mx-10 border-2 border-white">
                <div className="container w-full">
                    <div className="p-4">
                        <div className="h-full bg-black p-8 rounded">
                            <div className='flex justify-items-center items-center justify-between'>
                                <p className='text-2xl font-bold'>{title} Photography</p>
                                <div className='text-2xl'>
                                    <p className='flex justify-items-center items-center'><FaStar className='mr-2' style={{ color: 'yellow' }}></FaStar>{rating}</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mt-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">{description}</p>
                            <div className='flex justify-between'>
                                <div className="inline-flex items-center">
                                    <img alt="testimonial" src={image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">{name}</span>
                                        <span className="text-white text-sm">UI DEVELOPER</span>
                                    </span>
                                </div>
                                <div className='flex justify-items-center items-center text-xl'>
                                    <FaClock className='mr-2'></FaClock>
                                    <p>{date} {time} {zone}</p>
                                </div>
                            </div>
                            {/* edit button */}
                            <div className='flex justify-end mt-5'>
                            <button className="btn btn-circle btn-outline mr-4">
                                <FaEdit className='text-xl ml-1'></FaEdit>
                            </button>
                            {/* delete button */}
                            <button className="btn btn-circle btn-outline hover:bg-red-600 hover:border-white hover:text-white"
                            onClick={()=>handleDelete(_id)}>
                                <FaTrashAlt className='text-xl'></FaTrashAlt>
                            </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserReview;