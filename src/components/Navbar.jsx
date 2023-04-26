import React from 'react'
import { NavLink } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';
import resume from '../resume.pdf'
const Navbar = () => {
  return (
    <div className='py-8 lg:px-40 md:px-12 sm:px-12 duration-700 justify-between items-center flex'>
        <div className='sm:hidden md:block'>
<a href={resume} download='resume'>
    
                <p className='font-semibold hover:text-white hover:bg-black duration-500 lg:text-md md:text-md sm:text-md px-3 py-2 rounded-xl bg-[#F6ECFF]'>Resume</p>
</a>

        </div>
        <div>
            <NavLink to="/">
                <p className='font-extrabold text-3xl tracking-wide  rounded-full'>RISHI</p>
            </NavLink>
        </div>
        <div className='flex gap-4 items-center'>
            <NavLink to="https://github.com/rishirathoree">
                <i className='bx lg:bx-md md:bx-md sm:bx-sm bxl-github p-2 bg-[#F6ECFF] rounded-md'></i>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/rishi-rathore-20aa40256/">
                <i className='bx lg:bx-md md:bx-md sm:bx-sm  bxl-linkedin p-2 bg-[#F6ECFF] rounded-md'></i>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar