import React from 'react';
import error_page from '../banner_img/404(1).jpg';
import './NotAvailable.css'
const NotAvailable = () => {
    return (
        <section id="notAvailable">
            <div className='container'>
                <div className='error_text error_space'>
                    <h2 className='text-danger'>404!</h2>
                   <h3 className='text-danger'>Ops! It seems error searching...</h3>
                   <small>Please confirm correct routing search</small>
                </div>
                <div className='error_img error_space'>
                    <img src={error_page} alt='error_img' />
                </div>
            </div>
        </section>
    );
};

export default NotAvailable;