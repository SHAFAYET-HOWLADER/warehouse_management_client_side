import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './DisplayBooks.css'
const DisplayBooks = ({ book }) => {
    const { bookName, img, description, price, quantity, _id,supplierName } = book;
    const navigate = useNavigate()
    const navigateToDetails = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <section>
            <div className='displayBooks'>
                <img src={img} alt='books_img' />
                <div className='books_text'>
                    <h5>{bookName}</h5>
                    <h5>Supplier : {supplierName}</h5>
                    <h5>In Stock : {quantity}</h5>
                    <h4>{price}</h4>
                    <small> <strong><u>Book-Info :</u></strong>  {description}</small>
                    <br />
                    <button onClick={() => navigateToDetails(_id)}>Update &nbsp; <FaArrowRight />  </button>
                </div>
            </div>
        </section>
    );
};
export default DisplayBooks;