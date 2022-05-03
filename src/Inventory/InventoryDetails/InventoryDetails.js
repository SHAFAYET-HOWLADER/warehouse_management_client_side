import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [singleBook, setSingleBook] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSingleBook(data))
    },[]);
    return (
      <div className='py-5'>
           <div className='w-50 mx-auto'>
             <h2 style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: "600",
                  textAlign: 'center',
                  fontSize: "25px",
             }} className='text-center py-4'>Updating product by name {singleBook.bookName}</h2>
            <div className='displayBooks'>
            <img  src={singleBook.img} alt='books_img' />
            <div className='books_text'>
                <h5>{singleBook.bookName}</h5>
                <h4>{singleBook.price}</h4>
                <h4>{singleBook.quantity}</h4>
                <small className='w-100'>{singleBook.description}</small>
                <br/>
                <h4>Supplier : {singleBook.supplierName}</h4>
                <br />
                <button>Delivered &nbsp; <FaArrowRight/>  </button>
            </div>
        </div>
       </div>
      </div>
    );
};

export default InventoryDetails;