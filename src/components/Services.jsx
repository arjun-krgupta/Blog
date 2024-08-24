
import React from 'react';
import Design from '../assets/web design.jpg'
import responsive from '../assets/responsive.jpg'
import backend from '../assets/backend.jpg'
function Services(props) {
    return (
        <>
            <div className='mt-14 '>
                <h1 className='text-center text-4xl mb-10'>My <span className='text-[#0ef]'>Services</span></h1>
                <div className='flex flex-col px-3 gap-3 items-center justify-center pt-10 pb-6 md:flex-row md:gap-0 md:justify-around lg:px-24 '>
                    <div className='flex flex-col items-center gap-3 cursor-pointer hover:scale-[1.03] hover:transition-[0.3s] hover:text-[#0ef]'>
                        <div className="w-full md:w-60 lg:w-80">
                        <img src={Design} alt="" className="w-full h-auto rounded" />
                        </div>
                        <h1 className="text-xl">Web Design</h1>
                    </div>
                    <div className='flex flex-col items-center gap-3 cursor-pointer hover:scale-[1.03] hover:transition-[0.3s] hover:text-[#0ef]'>
                        <div className="w-full md:w-60 lg:w-80">
                        <img src={responsive} alt="" className="w-full h-auto rounded" />
                        </div>
                        <h1 className="text-xl">Responsive Design</h1>
                    </div>
                    <div className='flex flex-col items-center gap-3 cursor-pointer hover:scale-[1.03] hover:transition-[0.3s] hover:text-[#0ef]'>
                        <div className="w-full md:w-60 lg:w-80">
                        <img src={backend} alt="" className="w-full h-auto rounded" />
                        </div>
                        <h1 className="text-xl">Backend Development</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
