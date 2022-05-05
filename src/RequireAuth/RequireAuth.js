import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Components/Pages/Shared/Loading/Loading';
import auth from '../firebase.init';

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth)
  const [sendEmailVerification] = useSendEmailVerification(auth);
  let location = useLocation();
  if (loading) {
    return <Loading />
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className='text-center'>
        <h2 className='text-danger'>Your email is not verified</h2>
        <h5>Please verify your email</h5>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast('Sent email');
          }}
        >
          Verify email
        </button>
        <ToastContainer/>
      </div>
    )
  }

  return children;
}

export default RequireAuth;