import React from 'react';

const Blog = () => {
    return (
        <div>
            {/* blog 1 */}
            <div className='md:mx-20 mx-5 my-10 border rounded-2xl dark:border-white dark:text-white '>
                <div className="card bg-base-100 dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL</h2>
                        <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                    </div>
                </div>
            </div>
            {/* blog 2 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
            dark:border-white dark:text-white '>
                <div className="card bg-base-100 dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. <span className='font-bold'>We use firebase because of storage,hosting,authentication,Firebase ML and built in push notification.</span> Other options are Back4App, Backendless, Kuzzle, Pubnub, Kumulos, Appwrite, Deployd, NHost, AWS Amplify, Heroku etc.</p>
                    </div>
                </div>
            </div>
            {/* blog 3 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
            dark:border-white dark:text-white '>
                <div className="card bg-base-100  dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                        <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                    </div>
                </div>
            </div>
            {/* blog 4 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
           dark:border-white dark:text-white '>
                <div className="card bg-base-100  dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                        <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.Node.js is open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;