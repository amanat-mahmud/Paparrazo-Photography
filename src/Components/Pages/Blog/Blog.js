import React from 'react';
import useTitle from '../../../Hook/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            {/* blog 1 */}
            <div className='md:mx-20 mx-5 my-10 border rounded-2xl dark:border-white dark:text-white '>
                <div className="card bg-base-100 dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL</h2>
                        <p>When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases defines and manipulates data based structured query language (SQL). A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. <a href="https://www.geeksforgeeks.org/difference-between-sql-and-nosql/" target="_blank" rel="noreferrer" className="text-[#00b58b] underline hover:underline-offset-4">Read more</a></p>
                    </div>
                </div>
            </div>
            {/* blog 2 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
            dark:border-white dark:text-white '>
                <div className="card bg-base-100 dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <p>JWT stands for JSON web token. JWT was built by some developers in Microsoft, they built it initially for information exchange, and later on it was repurposed for authorization.In security processes, authentication validates a user's identity, it also grants that user permission to access a resource. JWT is a stateless session, so it does not need to be saved in a database in the server-side like cookies, it only exists in the client side.
                        Upon login a token is created using JWT which is singed and made using secret key. In a route where authentication is needed the users local stored key is checked and validated. 
                        </p>
                    </div>
                </div>
            </div>
            {/* blog 3 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
            dark:border-white dark:text-white '>
                <div className="card bg-base-100  dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                        <p>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access. Google's v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications.</p>
                    </div>
                </div>
            </div>
            {/* blog 4 */}
            <div className='md:mx-20 mx-5 mb-10 border rounded-2xl
           dark:border-white dark:text-white '>
                <div className="card bg-base-100  dark:bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                        <p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;