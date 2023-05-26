import React from 'react';
import useTitle from '../components/hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <>
          

            <div className=" mt-5 mb-5  ">

                <div className="mx-auto gap-4 grid md:grid-cols-2 lg:w-[90%] lg:grid-cols-2 md:w-[30%] ">

                    {/* <!-- -------------------------------
            no 1   QN and ANS  section 
        ----------------- --> */}
                    <div className="  card w-full bg-purple-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">What is an access token and refresh token ? How do they work and where should we store them on the client-side ?</h2>
                            <p>
                                Tokens such as access tokens and refresh tokens are used in identity frameworks and protocols to secure access to applications and resources. Access tokens are temporary credentials that enable a client application to access a certain set of web services on a user's behalf. Refresh tokens, on the other hand, are longer-lived credentials that allow a client application to obtain new access tokens without having the user to log in again.
                            </p>
                            <p>
                                The server creates an access token and a refresh token when a user logs into an application. The client program then receives the access token and uses it to access the user's resources. When an access token expires, the client application can utilize the refresh token to get a new one without asking the user to log in again.

                                It is critical to securely store access tokens and refresh tokens on the client side. Access tokens should be kept in memory or in a safe location, such as the browser's localStorage or sessionStorage. Refresh tokens, on the other hand, should be saved in a secure httpOnly cookie or an encrypted cookie.
                            </p>
                        </div>
                    </div>

                    {/* <!----------------------------------
             no 2   QN and ANS  section  
            -----------------------------> */}

                    <div className=" card w-full bg-blue-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Compare SQL and NoSQL databases ?</h2>
                            <p>
                            SQL and NoSQL databases differ in several ways. SQL databases are relational databases with a specified schema that manage structured data. NoSQL databases, on the other hand, are non-relational databases with a dynamic schema that are better suited to storing unstructured data. SQL databases can grow vertically and are more suited for multi-row transactions, whereas NoSQL databases scale horizontally and are better suited for unstructured data. SQL databases have ACID features that ensure transactional dependability, but NoSQL databases are classified into four sorts of structures: column-oriented, key-value stores, document stores, and graph databases. Modern improvements in relational databases, on the other hand, have enabled them to provide scale-out access to data anywhere on the earth, making them more competitive with NoSQL databases. It is critical to protect the client-side storage of access tokens and refresh tokens, with access tokens saved in memory or in a secure storage facility and refresh tokens stored in an encrypted cookie or in a secure httpOnly cookie.
                            </p>

                        </div>
                    </div>

                    {/* <!------------------------------- 
            no 3   QN and ANS  section
          --------------------------------> */}

                    <div className=" bg-cyan-100 card w-full shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">What is ExpressJs ?</h2>
                            <p>
                            Express JS is a Node.js framework for fast developing APIs, online applications, and cross-platform mobile apps. It's used to create single-page, multi-page, and hybrid web apps. Express is a Node.js layer that aids in the management of servers and routes. Many capabilities are available, including quick server-side programming, middleware, routing, templating, and debugging. Express is perfect for novice developers since it is time-efficient, quick, affordable, and simple to master.  Non-understandable code and callback difficulties are two of Express JS's shortcomings.

                            </p>
                            <h2 className="card-title"> What is NextJs ?</h2>
                            <p>
                            Next.js is a JavaScript framework intended for usage in production with React. It increases single-page application search engine optimization and renders on both the server and client sides. It automates code splitting for quicker efficiency and provides prefabricated components to aid with time to market and security. Some developers find it too opinionated, but it is gaining popularity and is an excellent alternative for corporations looking to assure the durability of their website foundation. 

                            </p>

                        </div>
                    </div>

                    {/* <!-------------------------------
             no 4   QN and ANS  section  
            ------------------------------------> */}

                    <div className=" bg-emerald-100 card w-full  shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">What is MongoDB aggregate and how does it work ?</h2>
                            <p>
                            MongoDB Aggregation is a method of processing a large number of documents in a collection by routing them through many steps that comprise a pipeline. A pipeline's phases can filter, sort, group, transform, and change the documents that flow through it. Aggregation operations perform data records processing and return computed results. Aggregation in MongoDB may be accomplished in three ways: aggregation pipeline, map-reduce function, and single-purpose aggregation. The aggregate pipeline is divided into steps, each of which modifies the document. In other words, the aggregation pipeline is a multi-stage pipeline in which the documents accepted as input and produced the resultant set of documents are converted in the next stage based on the operation of the previous stage. In MongoDB, the aggregate() function is used for aggregating. It aggregates information from several documents and can execute different actions on the aggregated data to provide a single output.
                            </p>

                        </div>
                    </div>

                </div>


            </div>
            <div >

            </div>
        </>
    );
};

export default Blog;