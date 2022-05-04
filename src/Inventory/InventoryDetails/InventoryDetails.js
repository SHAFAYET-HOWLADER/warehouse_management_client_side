import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams()
    const [singleBook, setSingleBook] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleBook(data))
    }, [])
    return (
        <section className='details py-5'>
            <h2 className='py-3' style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: "600",
                textAlign: 'center',
                fontSize: "30px",
            }}>Updating book by name {singleBook.bookName}</h2>
            <div className='displayBooks mx-auto w-50'>
                <img className='' src={singleBook.img} alt='books_img' />
                <div className='books_text'>
                    <h5>{singleBook.bookName}</h5>
                    <h5>Supplier : {singleBook.supplierName} </h5>
                    <h5> In Stock : {parseInt(singleBook.quantity)}</h5>
                    <h4>{singleBook.price}</h4>
                    <small className='w-100'><strong><u>Book-Info :</u></strong> {singleBook.description}</small>
                    <br />
                    <button>Delivered&nbsp;<FaArrowRight /></button>
                </div>
            </div>
        </section>
    );
};

export default InventoryDetails;