import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DisplayMyBooks from './DisplayMyBooks/DisplayMyBooks';
const MyBooks = () => {
    const navigate = useNavigate();
    const navigateTomManageInventories = () => {
        navigate('/ManageMyBooks');
    }
    const [myBooks, setMyBooks] = useState([]);
    useEffect(() => {
        const getMyBooks = async () => {
            const url = `https://desolate-peak-42134.herokuapp.com/myBooks`;
            const { data } = await axios.get(url);
            setMyBooks(data)
        }
        getMyBooks();
    }, [])
    return (
        <section id="books">
            <div className='container'>
                <div className='services_title text-center'>
                    <h2>My Books</h2>
                    <p>
                        User's who added new books appear here
                    </p>
                </div>
                <div className='container book'>
                    {
                        myBooks.map(book => <DisplayMyBooks
                            key={book._id}
                            book={book}
                        >

                        </DisplayMyBooks>)
                    }

                </div>
                <div className='manage_button mt-5'>
                    <button onClick={navigateTomManageInventories}>Manage My Books&nbsp;<FaArrowRight /> </button>
                </div>
            </div>
        </section>
    );
};

export default MyBooks;