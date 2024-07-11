import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
        <div className="h-full container mx-auto flex items-center px-4 justify-between">
            <div className=''>
                <Logo w={90} h={50}/>
            </div>
            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type="text" placeholder='Search products' className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <CiSearch />
                </div>
            </div>
            <div className='flex items-center gap-7'>
              <div className='text-3xl cursor-pointer'>
              <FaUser />
              </div>
              
              <div className='text-2xl relative'>
             <span> <IoCartSharp /></span>

             <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute top-0 -right-3'>
              <p className='text-xs'>0</p>
             </div>
              </div>

              <div>
                <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</button>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header