import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading/Loading';
const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        registerUser,
        registerLoading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updateError] = useUpdateProfile(auth);
    let regError;
    if (registerError) {
        regError = <p className='text-danger'>Error: {registerError.message}</p>
    }
    if (registerLoading) {
        return <Loading />;
    }
    if (registerUser) {
        console.log(registerUser)
    }

    const signUpHandler = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        if (password !== confirmPassword) {
            toast("Password doesn't match")
            return;
        }
        await createUserWithEmailAndPassword(email, password, confirmPassword)
        await updateProfile({ displayName: name });
        toast('Updated Profile');
        navigate('/home');
    }
    return (
        <section id='register'>
            <div className='container'>
                <div className='signUp_area'>
                    <h2>Please Sign Up</h2>
                    <p>Please fill in this form to create an account</p>
                    <hr className='hr_width' />
                    <form className='inputField' onSubmit={signUpHandler}>
                        <input type="text" name='name' placeholder='Full Name' autoComplete='off' />
                        <input type="email" name='email' placeholder='Your Email' required autoComplete='off' />
                        <input type="password" name='password' placeholder='Your Password' required autoComplete='off' />
                        <input type="password" name='confirm' placeholder='Confirm Password' required autoComplete='off' />
                        <input type='checkbox' name='terms' id='terms' onClick={() => setAgree(!agree)} />
                        &nbsp;
                        &nbsp;
                        <label className={agree ? 'text-primary' : 'text-danger'} htmlFor='terms'>I accept the Terms of Use & Privacy Policy</label>
                        {regError}
                        <input
                            disabled={!agree}
                            type="submit"
                            id='submit'
                            value='Sign Up' />
                    </form>
                    <small>Already have an account? <Link to='/login'>Login here&nbsp; <FaArrowRight /> </Link></small>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Register;