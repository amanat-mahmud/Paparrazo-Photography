import React from 'react';

const Service = ({ service }) => {
    const {title,description,img} = service
    // console.log(typeof(img));
    return (
        <div className='col-span-1 mx-auto'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" className='w-full h-full'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title} Photography</h2>
                    <p>{description.slice(0,100)+'...'}</p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;