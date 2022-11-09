import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../Hook/useTitle';
import UserReview from './UserReview';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const MyReviews = () => {
    useTitle("My Reviews");
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
        setReviews(data);
        })
    },[user?.email])
    const handleDelete = (id) =>{
        // console.log(id);
        // fetch
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reviews/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
            }
            else  {
                // Swal.fire('Changes are not saved', '', 'info')
                Swal.fire('Didn\'t delete any review', '', 'success')
              }
          })
    }
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
                handleDelete={handleDelete}
                ></UserReview>)
            }
        </div>
    );
};

export default MyReviews;