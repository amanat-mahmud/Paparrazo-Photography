import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
const UpdateReview = () => {
    const currReview = useLoaderData();
    const {title,description,rating,_id} = currReview;
    const handleReviewUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const title = form?.upTitle.value;
        const rating = form?.upRating?.value;
        const description = form?.upDescription?.value;
        console.log(title,rating,description);
        const date2 = new Date().toLocaleString()
        const newDate = date2.split(', ')
        const newDate2 = newDate.join(' ');
        const newDate3 = newDate2.split(' ');
        const date = newDate3[0];
        const time = newDate3[1];
        const zone = newDate3[2];
        fetch(`http://localhost:5000/review/${_id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({title,description,rating,date,time,zone})
        })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            toast.success('Review Updated')
        }
    })
    .catch()
    }
    // console.log(review);
    return (
        <div className='text-center mb-5'>
            <form onSubmit={handleReviewUpdate}>
                <input type="text" placeholder="Service Name" className="input input-bordered w-1/3 my-5" name='upTitle' defaultValue={title} required/><br></br>
                <input type="text" placeholder="Rating" className="input input-bordered w-1/3 mb-5" name='upRating' defaultValue={rating}
                required/><br></br>
                <textarea className="textarea textarea-bordered mb-5 w-1/3" placeholder="Review" rows="4" cols="50" name='upDescription' defaultValue={description} required></textarea>
                <div className='text-center'>
                    <button type="submit" className="btn btn-outline">Update</button>
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default UpdateReview;