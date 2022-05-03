import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './DisplayBooks.css'
const DisplayBooks = ({ book }) => {
    const { bookName, img, description, price, quantity,_id } = book;
    const navigate = useNavigate()
    const navigateToDetails = (id)=>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='displayBooks'>
            <img src={img} alt='books_img' />
            <div className='books_text'>
                <h5>{bookName}</h5>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
                <small>{description.slice(0, 200)}</small>
                <br />
                <button onClick={()=>navigateToDetails(_id)}>Update &nbsp; <FaArrowRight/>  </button>
            </div>
        </div>
    );
};

export default DisplayBooks;