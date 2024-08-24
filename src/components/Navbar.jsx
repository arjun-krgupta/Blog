import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

function Navbar(props) {
    const redirect =useNavigate()
    const[open,setOpen]=useState(false)
    return (
       <>
       <nav className='flex justify-between items-center px-6 h-16 sm:px-6 md:px-8 lg:px-16  w-full'>
        <h1 className='text-3xl cursor-pointer italic font-semibold' onClick={()=>{redirect('/')}}>ARJUN</h1>
        <div className= {`flex flex-col gap-5 transition-all duration-500 ease-in absolute left-0 top-16 h-[100vh] w-[150px] px-4 pt-3 text-sm sm:static sm:h-fit sm:w-auto sm:flex-row sm:gap-5 sm:text-xs md:gap-10 md:text-sm  ${open ? 'top-16 opacity-100 bg-[#161513] z-10':'top-[-100vh]'}`}>
            <Link to="/" className='hover:text-[#0ef]'>HOME</Link>
            <Link to="/about" className='hover:text-[#0ef]'>ABOUT ME</Link>
            <Link to="/service" className='hover:text-[#0ef]'>SERVICES</Link>
            <Link to="/info" className='hover:text-[#0ef]'>INFO</Link>
            <Link to="/skill" className='hover:text-[#0ef]'>SKILL</Link>
            <Link to="/project" className='hover:text-[#0ef]'>PROJECT</Link>
        </div>
        <div className='hidden lg:block' onClick={()=>{redirect('/contact')}}>
         <button className='bg-[#0ef] text-black w-32 h-8 rounded-full transition duration-[0.5s] hover:border border-white hover:scale-[1.05]'>Contact me</button>
        </div>
        <div className="text-white text-4xl sm:hidden" onClick={()=>setOpen(!open)}>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
       </nav>
       </>
    );
}

export default Navbar;