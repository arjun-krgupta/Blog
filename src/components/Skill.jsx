import React from 'react';
import jquery from '../assets/jquery.jpg'
import express from '../assets/express.jpg'
import mongodb from '../assets/mongodb.jpg'
import tailwind from '../assets/tailwind.jpg'
function Skill(props) {
    return (
       <>
       <div className="text-center mt-10">
       <h1 className='text-center text-4xl mb-10'>My <span className='text-[#0ef]'>Skills</span></h1>
       <div className="flex justify-center items-center gap-5 py-5 px-3 md:px-8 lg:px-32 flex-wrap w-full">
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-html5 text-[160px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">HTML</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-css3-alt text-[160px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">CSS</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-js text-[160px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">JavaScript</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-bootstrap text-[160px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Bootstrap</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={jquery} alt="" className='w-36 md:w-24 h-auto rounded'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">JQuery</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={tailwind} alt="" className='w-36 md:w-24 h-auto rounded'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Tailwind</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-react text-[160px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">React js</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-node-js text-[160px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Node js</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={express} alt="" className='w-36 md:w-24 h-auto rounded'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Express js</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={mongodb} alt="" className='w-36 md:w-24 h-auto rounded'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">MongoDB</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-git text-[150px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Git</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-full md:w-52  hover:scale-[1.03] hover:transition-[0.3s]'>
            <i className="fa-brands fa-github text-[150px] md:text-8xl"></i>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">GitHub</h1>
         </div>
       </div>
       </div>
       </>
    );
}

export default Skill;