import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useInventory from '../../../Hooks/useInventory';
import DisplayBooks from '../../../Inventory/DisplayBooks/DisplayBooks';


const AllBooks = () => {
    const navigate = useNavigate();
    const navigateTomManageInventories = () => {
        navigate('/manageInventories');
    }
    const [books] = useInventory();
    return (
        <section id="books">
            <div className='container'>
                <div className='services_title text-center'>
                    <h2>All Books</h2>
                    <h3>We Store</h3>
                    <p>
                        Books are available in Warehouse
                    </p>
                </div>
                <div className='container book'>
                    {
                        books.map(book => <DisplayBooks
                            key={book._id}
                            book={book}>
                        </DisplayBooks>)
                    }

                </div>
                <div className='manage_button mt-5'>
                    <button onClick={navigateTomManageInventories}>Manage Inventories&nbsp;<FaArrowRight /> </button>
                </div>
            </div>
        </section>
    );
};

export default AllBooks;