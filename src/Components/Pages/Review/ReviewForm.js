import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../Hook/useTitle';
const ReviewForm = () => {
    useTitle('Add Review');
    // const [service,setService] = useState(null);
    // const handleServicename = (serviceName)=>{
    //     setService(serviceName);
    //     console.log(service);
    // }
    const { user } = useContext(AuthContext)
    // console.log(user);
    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const rating = form.rating.value;
        const description = form.description.value;
        // console.log(title,rating,description);
        const date2 = new Date().toLocaleString()
        const newDate = date2.split(', ')
        const newDate2 = newDate.join(' ');
        const newDate3 = newDate2.split(' ');
        const date = newDate3[0];
        const time = newDate3[1];
        const zone = newDate3[2];
        const review = {
            title, description, rating, name: user.displayName, image: user.photoURL, email: user.email, date, time, zone
        }
        fetch('https://paparazzo-photography-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Review Added')
                }
            })
            .catch()
    }
    return (
        <div className='text-center mb-5'>
            <form onSubmit={handleAddReview}>
                {/* <select className="select select-bordered w-1/3 my-5" onChange={handleServicename}>
                    <option disabled selected>Service Name</option>
                    <option onClick={()=>handleServicename('Wedding Photography')}>Wedding Photography</option>
                    <option onClick={()=>handleServicename('Portfolio photography')}>Portfolio photography</option>
                    <option onClick={()=>handleServicename()}>Nature photography</option>
                    <option onClick={()=>handleServicename()}>Sports photography</option>
                    <option onClick={()=>handleServicename()}>Journalism photography</option>
                    <option onClick={()=>handleServicename()}>Wildlife photography</option>
                </select><br></br> */}
                <input type="text" placeholder="Service Name" className="input input-bordered w-1/3 my-5" name='title' /><br></br>
                <input type="text" placeholder="Rating" className="input input-bordered w-1/3 mb-5" name='rating' /><br></br>
                <textarea className="textarea textarea-bordered mb-5 w-1/3" placeholder="Review" rows="4" cols="50" name='description'></textarea>
                <div className='text-center'>
                    <button type="submit" className="btn btn-outline">ADD</button>
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default ReviewForm;