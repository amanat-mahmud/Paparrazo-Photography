import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Hero section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                        <p className="mb-5">Our memories are captured in photos. Be my pride by letting me capture your memories. Like I have done thousands of times before.</p>
                        <button className="btn btn-primary">Hire me</button>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className='my-10'>
                <h1 className='text-center text-5xl'>My Services</h1>
            </div>
            {/* Most recent shots */}
        </div>
    );
};

export default Home;