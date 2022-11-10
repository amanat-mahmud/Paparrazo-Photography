import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const AddService = () => {
        const handleAddService = (event) => {
            event.preventDefault();
            const form = event.target;
            const title = form?.title.value;
            const img = form?.image.value;
            const price = form?.price.value;
            const customers = form?.customers.value;
            const delivery = form?.delivery.value;
            const format = form?.format.value;
            const number_of_img = form?.number_of_img.value;
            const rating = form?.rating?.value;
            const description = form?.description?.value;
            // console.log(title,img,price,customers,delivery,format,number_of_img, rating, description);
            const service= {title,img,price,customers,delivery,format,number_of_img, rating, description}
            // console.log(service);
            fetch(`http://localhost:5000/services`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.acknowledged > 0) {
                        toast.success('Service Added')
                    }
                })
                .catch()
        }
        return (
            <div>
                <div className='text-center mb-5'>
                    <form onSubmit={handleAddService}>
                        <input type="text" placeholder="Service Name" className="input input-bordered w-1/3 my-5" name='title' required /><br></br>
                        <input type="text" placeholder="Service Image URL" className="input input-bordered w-1/3 my-5" name='image' required /><br></br>
                        <input type="text" placeholder="Service Price" className="input input-bordered w-1/3 my-5" name='price' required /><br></br>
                        <input type="text" placeholder="Rating [Put Unrated]" className="input input-bordered w-1/3 mb-5" name='rating'
                            required /><br></br>
                        <input type="text" placeholder="Customers [Put 0]" className="input input-bordered w-1/3 mb-5" name='customers'
                            required /><br></br>
                        <input type="text" placeholder="Delivery time" className="input input-bordered w-1/3 mb-5" name='delivery'
                            required /><br></br>
                        <input type="text" placeholder="Delivery format" className="input input-bordered w-1/3 mb-5" name='format'
                            required /><br></br>
                        <input type="text" placeholder="Number of Images" className="input input-bordered w-1/3 mb-5" name='number_of_img'
                            required /><br></br>
                        <textarea className="textarea textarea-bordered mb-5 w-1/3" placeholder="Description" rows="4" cols="50" name='description'  required></textarea>
                        <div className='text-center'>
                            <button type="submit" className="btn btn-outline">Add service</button>
                        </div>
                        <Toaster />
                    </form>
                </div>
            </div>
        );
    };

    export default AddService;