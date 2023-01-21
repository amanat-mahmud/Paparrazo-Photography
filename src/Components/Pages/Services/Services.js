import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../Hook/useTitle';
import Loader from '../../Loader/Loader';
import Service from '../Home/Service';

const Services = () => {
    useTitle('Services');
    const { loading } = useContext(AuthContext);
    // console.log(loading);
    const services = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state==="loading"){
        return <Loader></Loader>
    }
    return (
        <div>
            {
                loading ? <div className='text-center'><button
                    className="btn loading bg-white text-black w-1/2 my-20"
                >loading</button></div> : ''
            }
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