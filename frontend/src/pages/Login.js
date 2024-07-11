import React, { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id='login'>
      <div className='mx-auto container p-4'>

        <div className='bg-white py-5 w-full max-w-sm mx-auto '>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcon} alt="login-icon" />
          </div>
          <form className='pt-6'>
            <div className='grid'>
              <label>Email :</label>
              <div className='bg-slate-100 p-2'> <input type='email' placeholder='enter email' className='w-full h-full outline-none bg-transparent' /></div>
            </div>
            <div>
              <label>Password :</label>
              <div className='bg-slate-100 p-2 flex'> <input type={showPassword ? "text" : "password"} placeholder='enter password' className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-xl' onClick={() => { setShowPassword((prev) => !prev) }}>
                  <span>
                    {
                      showPassword ? (<FaEye />) : (<FaEyeSlash />)
                    }
                  </span>
                </div>
              </div>
              <Link className='block w-fit ml-auto hover:underline hover:text-red-600' to={'/forgot-password'}>forgot password</Link>
            </div>
            <button className='hover:bg-red-700 bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounder-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
          </form>
          <p className='my-4'>Don't have account ?<Link className='text-red-300 hover:underline hover:text-red-700' to={'/sign-up'}>Sign up</Link></p>
        </div>

      </div>
    </section>
  )
}

export default Login