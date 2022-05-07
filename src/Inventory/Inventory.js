import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';
import DisplayBooks from './DisplayBooks/DisplayBooks';
import './Inventory.css'
const Inventory = () => {
    const [books] = useInventory();
    const navigate = useNavigate();
    const navigateTomManageInventories = () => {
        navigate('/manageInventories');
    }
    const newBooks  = books.slice(0,6);

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
                        newBooks.map(book => <DisplayBooks
                            key={book._id}
                            book={book}
                        >

                        </DisplayBooks>)
                    }

                </div>
                <div className='manage_button'>
                    <button onClick={navigateTomManageInventories}>Manage Inventories&nbsp;<FaArrowRight /> </button>
                </div>
            </div>
        </section>
    );
};
export default Inventory;