import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const Login = () => {
    return (
        <section id='register'>
        <div className='container'>
            <div className='signUp_area'>
                <h2>Please Login</h2>
                <p>Please fill in this form to Login</p>
                <hr className='hr_width'/>
                <form className='inputField'>                  
                    <input type="email" name='email' placeholder='Your Email' required autoComplete='off' />
                    <input type="password" name='password' placeholder='Your Password' required autoComplete='off' />                  
                    <input type="submit" id='submit'  value='Login' />
                </form>
                <small>Already have an account? <Link to='/register'>Sign Up here&nbsp; <FaArrowRight/> </Link></small>
            </div>
        </div>
    </section>
    );
};

export default Login;