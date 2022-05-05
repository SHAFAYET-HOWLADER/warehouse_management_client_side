import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { async } from '@firebase/util';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let error;
    if (loginError) {
        error = <p className='text-danger'>Error : {loginError.message}</p>
    }
    if (loginLoading) {
        return <Loading />;
    }
    if (loginUser) {
        navigate(from, {replace: true});
    }
    const loginHandler = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
    }
    const resetPass = async() => {
        const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
        toast('Please input email');
       }
    }
    return (
        <section id='register'>
            <div className='container'>
                <div className='signUp_area'>
                    <h2>Please Login</h2>
                    <p>Please fill in this form to Login</p>
                    <hr className='hr_width' />
                    <form className='inputField' onSubmit={loginHandler}>
                        <input type="email" ref={emailRef} name='name' placeholder='Your Email' required autoComplete='off' />
                        <input type="password" ref={passwordRef} name='name' placeholder='Your Password' required autoComplete='off' />
                        {error}
                        <input type="submit" id='submit' value='Login' />
                    </form>
                    <small onClick={resetPass}> <Link to='/login'>Reset Password&nbsp; <FaArrowRight /></Link></small>
                    <br />
                    <small>New to storedProduct? <Link to='/register'>Sign Up here&nbsp; <FaArrowRight /> </Link></small>
                </div>
                <ToastContainer/>
            </div>
        </section>
    );
};
export default Login;



