import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading/Loading';


const Login = () => {
   const navigate  = useNavigate();
    const [
        signInWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    let error;
    if(loginError){
       error = <p className='text-danger'>Error : {loginError.message}</p>
    }
    if(loginLoading){
       return <Loading/>;
    }
    if(loginUser){
        navigate('/home')
    }
    const loginHandler = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <section id='register'>
            <div className='container'>
                <div className='signUp_area'>
                    <h2>Please Login</h2>
                    <p>Please fill in this form to Login</p>
                    <hr className='hr_width' />
                    <form className='inputField' onSubmit={loginHandler}>
                        <input type="email" name='email' placeholder='Your Email' required autoComplete='off' />
                        <input type="password" name='password' placeholder='Your Password' required autoComplete='off' />
                        {error}
                        <input type="submit" id='submit' value='Login' />
                    </form>
                    <small>New to storedProduct? <Link to='/register'>Sign Up here&nbsp; <FaArrowRight /> </Link></small>
                </div>
            </div>
        </section>
    );
};

export default Login;