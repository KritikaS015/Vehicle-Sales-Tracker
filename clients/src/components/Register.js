import React from 'react'
import { useForm } from 'react-hook-form'
import { default as api } from '../store/apiSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {register, handleSubmit, reset} = useForm();
  const [addAccounts] = api.useAddAccountsMutation();
  const history = useNavigate();
  const onSubmit = async (data) => {
    if(data.username !== null && data.password !== null) {
        await addAccounts(data).unwrap();
        history('/home');
    }
    else {
        alert("Please fill both username and password!");
    }
    reset();
}
  return (
    <div className='form max-w-sm mx-auto w-96'><br /><br /><br /><br />
        <h1 className='font-bold mb-5 mt-10 text-xl'><center>New User? Register Here</center></h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <div className="input-group">
                    <input type="text" {...register('username')} placeholder='User Name' className='form-input' required />
                </div>
                <div className="input-group">
                    <input type="password" {...register('password')} placeholder='Password' className='form-input' required />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Register</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register
