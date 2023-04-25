import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='w-full h-full flex sm:flex-col items-center justify-between p-12'>
        <div className='flex items-center gap-2'>
        <p className='font-bold text-md tracking-wide rounded-full'>RISHI</p>
        <p className='font-light text-slate-500 text-[8px] tracking-wide rounded-full'>@2023</p>
        </div>
        <div className='flex justify-center items-center gap-4'>
        <p className='font-light text-md tracking-wide rounded-full'>Say Hi!</p>
        <Link to="https://github.com/rishirathoree">
                <p className='font-semibold hover:text-white hover:bg-black duration-500 lg:text-md md:text-md sm:text-md px-3 py-2 rounded-full bg-[#F6ECFF]'>Reach Out</p>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Footer