import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import './AddBook.css'

const AddBook = () => {
    const[user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = 'https://desolate-peak-42134.herokuapp.com/myBooks';
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
           const proceed = window.confirm('Want to adding new book?');
           event.target.reset();
           if(proceed){
               toast("Successfully added new book");
           }
        })
    };
    return (
        <section id="addBook" className='w-50 mx-auto py-5'>
            <div className='container'>
                <h2 className='text-center'>Add book here</h2>
                <div className='formArea'>
                    <form className='d-flex flex-column addBook'  onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Photo Url' type="text" className='mb-3' {...register("img")} />
                        <input placeholder='Name' type="text" className='mb-3' {...register("bookName")} />
                        <input placeholder='Supplier' type="text" className='mb-3' {...register("supplierName")} />
                        <input placeholder='Quantity' className='mb-3' type="number" {...register("quantity")} />
                        <input placeholder='Price' className='mb-3' type="text" {...register("price")} />
                        <input placeholder='Email' className='mb-3' type="email" value={user.email} readOnly disabled {...register("email")} />
                        <textarea placeholder='Description' className='mb-3' type="text" {...register("description")} />
                        <input className='fs-5' type="submit" value='Add Book'/>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </section>
    );
};

export default AddBook;