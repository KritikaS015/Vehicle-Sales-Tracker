import React from 'react'
import { useForm } from 'react-hook-form'
import { default as api } from '../store/apiSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const getAccounts = api.useGetAccountsQuery(); // No need to destructure, as useGetAccountsQuery is not a mutation
    const history = useNavigate();
  
    const onSubmit = async (data) => {
      try {
        if (data.username && data.password) {
          const accountsList = getAccounts.data;
  
          // Check if the entered credentials match any of the stored accounts
          const isValidCredentials = accountsList.some(
            (account) => account.username === data.username && account.password === data.password
          );
  
          if (isValidCredentials) {
            history('/home');
          } else {
            alert("Invalid details! Kindly register");
            history('/register');
          }
        } else {
          alert("Please enter both details!");
        }
      } catch (error) {
        console.error('Error:', error);
      }
  
      reset();
    };
  return (
    <div className='form max-w-sm mx-auto w-96'><br /><br /><br /><br />
        <h1 className='font-bold mb-5 mt-10 text-xl'><center>Login Page</center></h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <div className="input-group">
                    <input type="text" {...register('username')} placeholder='User Name' className='form-input' required />
                </div>
                <div className="input-group">
                    <input type="password" {...register('password')} placeholder='Password' className='form-input' required />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login
