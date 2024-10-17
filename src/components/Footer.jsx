import React from 'react';

function Footer(props) {
    return (
        <>
    <div className='flex flex-col gap-3 px-3 w-full mt-10 md:mt-16 pb-8 lg:px-40'>
    <div className='flex flex-col items-center px-3 gap-3 md:flex-row md:justify-between md:gap-0'>
        <div className='flex flex-col gap-3 w-full md:w-[38%] lg:w-[40%]'>
            <h1 className='text-3xl font-semibold'>Arjun</h1>
            <p>I am a full Stack developer from India with 1 years of experience in Web Designing and Responsive layout.</p>
        </div>
        <div className='flex gap-10 lg:gap-5'>
            <div className='w-40 md:w-48 lg:w-60 flex justify-between items-center h-10 md:h-12 rounded-full bg-black gap-3 px-4 hover:border border-white cursor-pointer'>
                <i className="fa-solid fa-user text-white text-sm"></i>
                <input type="text" placeholder='Enter Email' className='border-0 outline-none w-full bg-black text-sm'/>
            </div>
            <span>
            <button className='bg-[#0ef] w-24 md:w-32 lg:w-40 rounded-full h-10 md:h-12 text-black text-sm sm:text-lg font-semibold hover:border border-white '>Subscribe</button>
            </span>
        </div>
    </div>
    <hr  className='w-full h-1 bg-white '/>
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
           <p>&#169; 2024 Arjun Kumar. All rights reserved.</p>
           <div className='hidden md:flex gap-5'>
            <span>Term of Services</span>
            <span>Privacy Policy</span>
            <span>Connect with me</span>
           </div>
        </div>
    </div>
        </>
    );
}

export default Footer;