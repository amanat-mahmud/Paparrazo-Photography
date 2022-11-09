import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaUserAlt ,FaClock,FaImage} from "react-icons/fa";
const SingleService = () => {
    const {title,img,price,rating,customers,description,delivery,number_of_img} = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>{title} photography</h1>
            <img src={img} alt="" className='my-5 mx-auto w-96'/>
            <div className='mx-10'>
            <p className='w-1/2 mx-auto'>{description}</p>
            <div className='flex justify-between items-center text-2xl w-1/2 mx-auto'>
                        <div>
                        <div>
                            <p className='flex justify-items-center items-center'><FaStar className='mr-2' style={{ color: 'yellow' }}></FaStar>{rating}</p>
                        </div>
                        <div className='mt-3'>
                            <p className='flex justify-items-center items-center'><FaUserAlt className='mr-2'></FaUserAlt>{customers}k</p>
                        </div>
                        </div>
                        <div>
                        <div>
                            <p className='flex justify-items-center items-center'><FaClock className='mr-2'></FaClock>{delivery} days</p>
                        </div>
                        <div className='mt-3'>
                            <p className='flex justify-items-center items-center'><FaImage className='mr-2'></FaImage>{number_of_img}</p>
                        </div>
                        </div>
                    </div>
                    <div className='mt-5 text-center'>
                        {/* Price */}
                        <p className='text-5xl font-bold'>Price: ${price}</p>
                    </div>
            </div>
        </div>
    );
};

export default SingleService;