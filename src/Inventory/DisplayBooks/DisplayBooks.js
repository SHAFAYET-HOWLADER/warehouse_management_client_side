import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './DisplayBooks.css'
const DisplayBooks = ({ book }) => {
    const { bookName, img, description, price } = book;
    return (
        <div className='displayBooks'>
            <img src={img} alt='books_img' />
            <div className='books_text'>
                <h5>{bookName}</h5>
                <h4>{price}</h4>
                <small>{description.slice(0, 200)}</small>
                <br />
                <button>Update &nbsp; <FaArrowRight/>  </button>
            </div>
        </div>
    );
};

export default DisplayBooks;