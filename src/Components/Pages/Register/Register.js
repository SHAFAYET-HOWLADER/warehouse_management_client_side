import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const signUpHandler = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        console.log(name, email, password,confirmPassword)
    }
    return (
        <section id='register'>
            <div className='container'>
                <div className='signUp_area'>
                    <h2>Please Sign Up</h2>
                    <p>Please fill in this form to create an account</p>
                    <hr className='hr_width'/>
                    <form className='inputField' onSubmit={signUpHandler}>
                        <input type="text" name='name' placeholder='Full Name' autoComplete='off'/>
                        <input type="email" name='email' placeholder='Your Email' required autoComplete='off' />
                        <input type="password" name='password' placeholder='Your Password' required autoComplete='off' />
                        <input type="password" name='confirm' placeholder='Confirm Password' required autoComplete='off' />
                        <input type='checkbox' name='terms' />
                        &nbsp;
                        &nbsp;
                        <label htmlFor='terms'>I accept the Terms of Use & Privacy Policy</label>
                        <input type="submit" id='submit'  value='Sign Up' />
                    </form>
                    <small>Already have an account? <Link to='/login'>Login here&nbsp; <FaArrowRight/> </Link></small>
                </div>
            </div>
        </section>
    );
};

export default Register;