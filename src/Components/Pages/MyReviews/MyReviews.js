import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../Hook/useTitle';
import UserReview from './UserReview';

const MyReviews = () => {
    useTitle("My Reviews");
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{console.log(data)
        setReviews(data);
        })
    },[user?.email])
    return (
        <div>
            <h1 className='text-5xl text-center font-bold'>My Reviews</h1>
            {
                reviews?.length ===0 && 
                <h1 className='text-5xl text-center font-bold my-20 text-red-600'>Sorry, No reviews found</h1>
            }
            {
                reviews.map(review=><UserReview
                key={review._id}
                review={review}
                ></UserReview>)
            }
        </div>
    );
};

export default MyReviews;