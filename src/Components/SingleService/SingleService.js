import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaUserAlt, FaClock, FaImage } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Review from './Review';
const SingleService = () => {
    const { title, img, price, rating, customers, description, delivery, number_of_img } = useLoaderData()
    const [reviews,setReviews] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            const revs = data.filter(d=>d.title===title);
            setReviews(revs);
        })
    },[title])
    // console.log(reviews);
    return (
        <div>
            {/* Single service */}
            <div className='mb-10'>
                <h1 className='text-center text-5xl font-bold'>{title} photography</h1>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className='my-5 mx-auto w-96' />
                    </PhotoView>
                </PhotoProvider>
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
                    <div className='my-5 text-center'>
                        {/* Price */}
                        <p className='text-5xl font-bold'>Price: ${price}</p>
                    </div>
                </div>
            </div>
            {/* Reviews of that service */}
            <div className='mb-10'>
                <h1 className='text-center text-5xl font-bold'>Reviews</h1>
                <div className='my-10'>
                    {
                        reviews.map((review,idx)=>
                            <Review
                            key={idx}
                            review={review}></Review>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleService;