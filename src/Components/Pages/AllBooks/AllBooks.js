import React from 'react';
import useInventory from '../../../Hooks/useInventory';
import DisplayBooks from '../../../Inventory/DisplayBooks/DisplayBooks';


const AllBooks = () => {
    const [books] = useInventory();
    return (
        <section id="books">
            <div className='container'>
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
            </div>
        </section>
    );
};

export default AllBooks;