import React, { useEffect, useState } from 'react';
import DisplayBooks from './DisplayBooks/DisplayBooks';
import './Inventory.css'
const Inventory = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <section id="books">
            <div className='services_title text-center'>
                    <h2>Inventory</h2>
                    <h3>We Store</h3>
                    <p>
                        Books are available in Warehouse
                    </p>
                </div>
            <div className='container book'>
                {
                    books.map(book => <DisplayBooks
                        key={book._id}
                        book={book}
                    >

                    </DisplayBooks>)
                }
            </div>
        </section>
    );
};
export default Inventory;