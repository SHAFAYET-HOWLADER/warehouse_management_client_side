import React from 'react';
import { Table } from 'react-bootstrap';
import { FaRegTrashAlt,FaArrowRight,FaHandPointRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useMyBooks from '../../../../Hooks/useMyBooks';
const ManageMyBooks = () => {
    const [myBooks, setMyBooks] = useMyBooks();
    const navigate = useNavigate();
    const navigateTomManageInventories = () => {
        navigate('/addBook');
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myBooks/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myBooks.filter(book => book._id !== id);
                    setMyBooks(remaining);
                })
        }
    }
    return (
        <section id="manage_books" className='py-5'>
            <div className='container'>
                <h2 className='py-3' style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: "600",
                    textAlign: 'center',
                    fontSize: "30px",
                }}>Managing My books</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Books</th>
                            <th>Supplier</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBooks.map(book=> {
                                 return(
                                    <tr>
                                    <td> <FaHandPointRight/> </td>
                                    <td>{book.bookName}</td>
                                    <td>{book.supplierName}</td>
                                    <td>{book.quantity}</td>
                                    <td>{book.price}</td>
                                    <td onClick={() => handleDelete(book._id)}>
                                      <div style={{
                                          color: 'red',
                                          cursor: "pointer"
                                      }}>
                                       <FaRegTrashAlt/>
                                      </div>
                                    </td>
                                </tr>              
                                 )
                            })
                        }      
                    </tbody>
                </Table>
                <div className='manage_button'>
                    <button onClick={navigateTomManageInventories}>Add Items&nbsp;<FaArrowRight /> </button>
                </div>
            </div>
        </section>
    );
};

export default ManageMyBooks;