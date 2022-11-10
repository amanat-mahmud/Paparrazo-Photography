import React from 'react';
import { FaStar, FaUserAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, description, img, rating, customers, price } = service
    // console.log(typeof(img));
    return (
        <div className='col-span-1 mx-auto'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><PhotoProvider>
                    {/* THE IMAGe which will be shown when clicked*/}
                    <PhotoView src={img}>
                        {/* normal image in ui */}
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body">
                    {/* title */}
                    <h2 className="card-title">{title} Photography</h2>
                    {/* description */}
                    <p>{description.length>100?description.slice(0, 100) + '...':description}</p>
                    {/* Customers, rating */}
                    <div className='flex justify-between items-center text-lg'>
                        <div>
                            <p className='flex justify-items-center items-center'><FaStar className='mr-2' style={{ color: 'yellow' }}></FaStar>{rating}</p>
                        </div>
                        <div>
                            <p className='flex justify-items-center items-center'><FaUserAlt className='mr-2'></FaUserAlt>{customers}k</p>
                        </div>
                    </div>
                    <div>
                        {/* Price */}
                        <p className='text-2xl font-bold'>Price: ${price}</p>
                    </div>
                    {/* view details buttonbutton */}
                    <div className="card-actions justify-end">
                        <Link to={`/services/${service._id}`}><button className="btn btn-outline">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;