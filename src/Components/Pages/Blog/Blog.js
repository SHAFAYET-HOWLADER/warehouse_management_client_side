import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <section id='blog' className='py-5'>
            <div className='container'>
                <div className='title text-center'>
                    <h2>Questions</h2>
                    <h4 className='pb-3' >Frequently asking question</h4>
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <FaHandPointRight />&nbsp; <h5 className='mt-2'>Difference between javascript and nodejs</h5> </Accordion.Header>
                        <Accordion.Body>
                            <h2>JS:</h2>
                            <h5>
                                ☘ JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.
                            </h5>
                            <strong>
                                <u>Expample : </u>
                                <br />
                                🔴 Can only be run in the browsers
                                <br />
                                🔴 Used on the client-side
                                <br />
                                🔴 Capable enough to add HTML and play with the DOM
                            </strong>
                            <h2 className='pt-4'>NodeJs: </h2>
                            <h5>
                                ☘ NodeJs is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.
                            </h5>
                            <strong>
                                <u>Expample : </u>
                                <br />
                                🟡 Can be run outside the browser
                                <br />
                                🟡 Used on the server-side.
                                <br />
                                🟡 Does not have the capability to add HTML tags
                            </strong>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><FaHandPointRight /> &nbsp; <h5 className='mt-2' >When should we use NodeJS and when should we use MongoDB?</h5></Accordion.Header>
                        <Accordion.Body>
                            <h4>Node.js & Mongodb</h4>
                            <strong>
                                <u>Introduction : </u>
                                <br/>
                                Node. js is a rapidly growing technology that has been overtaking the world of server-side programming with surprising speed. MongoDB is a technology that's revolutionizing database usage. Together, the two tools are a potent combination, thanks to the fact that they both employ JavaScript and JSON
                                <br/>
                                <u>Mongodb : </u>
                                <br/>
                                MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.
                                <br />
                                <u>Node.js : </u>
                                <br/>
                                Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                            </strong>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <FaHandPointRight /> &nbsp;  <h5 className='mt-2' >Differences between sql and nosql databases.</h5></Accordion.Header>
                        <Accordion.Body>
                            <strong>
                                <u>Introduction : </u>
                                There are a lot of databases used today in the industry. Some are SQL databases, some are NoSQL databases. The conventional database is SQL database system that uses tabular relational model to represent data and their relationship. The NoSQL database is the newer one database that provides a mechanism for storage and retrieval of data other than tabular relations model used in relational databases.
                                <br />
                                <u>Sql :<br /> </u>
                                1.Databases are categorized as Relational Database Management System (RDBMS).
                                <br />

                                2.	SQL databases have fixed or static or predefined schema.
                                <br />

                                3.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.
                                <br />
                                <br />

                                <u>NoSQL :<br /> </u>

                                1.NoSQL databases are categorized as Non-relational or
                                distributed database system.
                                <br />

                                2.NoSQL databases have dynamic schema.
                                <br />

                                3.NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.

                            </strong>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header> <FaHandPointRight /> &nbsp;<h5 className='mt-2' >What is the purpose of jwt and how does it work?</h5> </Accordion.Header>
                        <Accordion.Body>
                            <strong>
                                <u>Introduction : </u>
                                First, some termes d’art need to be disambiguated. It’s not uncommon to hear somebody refer to a REST API as simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof.
                            </strong>
                            <br />
                            <strong>
                                <u>Jwt : <br /></u>
                                1.Section one is the header. This section contains JWT metadata; typically information about the type of token and the algorithm used to sign it. It is encoded JSON.
                                <br />
                                2.Section two is the payload. This is the content of the token and is also encoded JSON.
                                <br />
                                3.Section three is the signature. This is the SHA256 (or some other HMAC) hash of the encoded header, encoded payload, and a secret. This part of the JWT is used to verify the integrity of the message.
                            </strong>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
    );
};

export default Blog;