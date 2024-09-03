import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const history = useNavigate();
    const handleSignOut = () => {
        alert("Logged Out Successfully!");
        history('/');
      };
  return (
    <>
        <button onClick={handleSignOut} className="sign-out">
        Sign Out
        </button>
    </>
  )
}

export default SignOut
