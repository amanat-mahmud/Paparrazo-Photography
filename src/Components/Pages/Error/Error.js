import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../../assets/img/error/test1.jpg'
const Error = () => {
    return (
        <div>
            <img src={errorImg} alt=""/>
            <div className='bg-white text-center pb-10'>
            <button className="btn btn-warning "><Link to='/'>Back to home</Link></button>
            </div>
        </div>
    );
};

export default Error;