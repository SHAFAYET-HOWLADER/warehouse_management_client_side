import React from 'react';
import './SocialLogin.css';
import {useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import google from '../../../signIn_logo/google.png';
import facebook from '../../../signIn_logo/facebook.png';
import github from '../../../signIn_logo/github.png';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    let [signInWithFacebook, user1] = useSignInWithFacebook(auth);
    let [signInWithGithub, user2] = useSignInWithGithub(auth);
    if(user || user1 || user2){
        navigate('/home');
     }
    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center py-5'>
                <div style={{
                    height: '2px',
                    width: '150px',
                    backgroundColor: '#3A3845'
                }}></div>
                <div className='mx-2 fs-6'>Or</div>
                <div style={{
                    height: '2px',
                    width: '150px',
                    backgroundColor: '#3A3845'
                }}></div>
            </div>
            <div className='socialSignIn'>
                 <div onClick={()=>signInWithGoogle()} className='signIn'>
                    <img src={google} alt='img'/>
                    &nbsp;&nbsp;&nbsp;
                    <small>Sign In With Google</small>
                 </div>
                 <div onClick={()=>signInWithFacebook()} className='signIn'>
                    <img src={facebook} alt='img'/>
                    &nbsp; &nbsp; &nbsp;
                    <small>Sign In With Facebook</small>
                 </div>
                 <div onClick={()=>signInWithGithub()} className='signIn'>
                    <img src={github} alt='img'/>
                    &nbsp; &nbsp; &nbsp;
                    <small>Sign In With Github</small>
                 </div>
            </div>
        </div>
    );
};

export default SocialLogin;