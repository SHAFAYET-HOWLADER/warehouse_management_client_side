import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';;

const MyBooksDetails = () => {
    const navigate = useNavigate();
    const navigateTomManageInventories = () => {
        navigate('/ManageMyBooks');
    }
    const { myId } = useParams()
    //deliver book
    const [reLoad, setReload] = useState(false);
    const [book, setBook] = useState({})
    console.log(book)
    useEffect(() => {
        fetch(`https://desolate-peak-42134.herokuapp.com/myBooks/${myId}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [reLoad])

    const addBook = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(book.quantity);
        console.log(quantity, newQuantity)
        const updatedQuantity = { newQuantity };
        const url = `https://desolate-peak-42134.herokuapp.com/myBooks/${myId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                setReload(!reLoad);
                toast("Successfully added quantity")
            })

    }
    //reduce book quantity
    const reduceQuantity = () => {
        const quantity = book?.quantity;
        const updatedQuantity = { quantity }
        const url = `https://desolate-peak-42134.herokuapp.com/my/${myId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                const confirm = window.confirm('want to deliver?')
                setReload(!reLoad);
                if (confirm) {
                    toast('Book delivered')
                }
            })
    }
    return (
        <section className='details py-5'>
            <div className='container'>
                <h2 className='py-3' style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: "600",
                    textAlign: 'center',
                    fontSize: "30px",
                }}>Updating book by name {book.bookName}</h2>
                <div className='displayBooks mx-auto w-50'>
                    <img className='' src={book.img} alt='books_img' />
                    <div className='books_text'>
                        <h5>{book.bookName}</h5>
                        <h5>Supplier : {book.supplierName} </h5>
                        <h5> In Stock : {book.quantity}</h5>
                        <h4>{book.price}</h4>
                        <small className='w-100'><strong><u>Book-Info :</u></strong> {book.description}</small>
                        <br />
                        <button onClick={() => reduceQuantity(book._id)}>Delivered&nbsp;<FaArrowRight /></button>
                        <div className='updateArea'>
                            <form onSubmit={addBook}>
                                <input type='text' name='quantity' placeholder='Enter Number' required autoComplete='off' />
                                <button>Add&nbsp;<FaArrowRight /></button>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
                <div className='manage_button'>
                    <button onClick={navigateTomManageInventories}>Manage Inventories&nbsp;<FaArrowRight /> </button>
                </div>
            </div>
        </section>
    );
};

export default MyBooksDetails;