import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../../../Hooks/useInventory';
import { FaRegTrashAlt,FaArrowRight } from 'react-icons/fa';

const ManageBook = () => {
    const [books, setBooks] = useInventory();
    const handleDelete = (id) => {
        const proceed = window.confirm('Want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = books.filter(book => book._id !== id);
                    setBooks(remaining);
                })
        }
    }
    return (
        <section id="manage_books" className='py-5'>
            <div className='container'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Books</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(book=> {
                                 return(
                                    <tr>
                                    <td> <FaArrowRight/> </td>
                                    <td>{book.bookName}</td>
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
            </div>
        </section>
    );
};

export default ManageBook;
