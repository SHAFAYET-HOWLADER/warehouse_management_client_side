import React, { useEffect, useState } from 'react';
import DisplayBooks from './DisplayBooks/DisplayBooks';
import './Inventory.css'

const Inventory = () => {
    const [books, setBooks] = useState([])
    console.log(books)
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <section id="books">
            <div className='section_title text-center'>
                <h2>Inventory</h2>
                <h3>We Store</h3>
                <p>Books are stored in warehouse</p>
            </div>
            <div className='container book'>
                {
                    books.map(book => <DisplayBooks
                        key={book.id}
                        book={book}
                    />)
                }
            </div>
        </section>
    );
};

export default Inventory;