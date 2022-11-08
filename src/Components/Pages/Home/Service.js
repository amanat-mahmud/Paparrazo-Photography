import React from 'react';
import { FaStar,FaUserAlt } from "react-icons/fa";
const Service = ({ service }) => {
    const {title,description,img,rating,customers,price} = service
    // console.log(typeof(img));
    return (
        <div className='col-span-1 mx-auto'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" className='w-full h-full'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title} Photography</h2>
                    <p>{description.slice(0,100)+'...'}</p>
                    <div className='flex justify-between items-center text-lg'>
                        <div>
                        <p className='flex justify-items-center items-center'><FaStar className='mr-2'style={{color:'yellow'}}></FaStar>{rating}</p>
                        </div>
                        <div>
                        <p className='flex justify-items-center items-center'><FaUserAlt className='mr-2'></FaUserAlt>{customers}k</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-bold'>Price: ${price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;