import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Pages/Home/Service';

const Services = () => {
    const services = useLoaderData(); 
    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>All services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}></Service>)
                    }

                </div>
        </div>
    );
};

export default Services;