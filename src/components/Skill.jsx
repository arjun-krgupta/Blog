import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import git from '../assets/git.png'
import github from '../assets/gitHub.png'
import jquery from '../assets/jquery.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import tailwind from '../assets/tailwind.png'
function Skill(props) {
    return (
       <>
       <div className="text-center mt-10">
       <h1 className='text-center text-4xl mb-10'>My <span className='text-[#0ef]'>Skills</span></h1>
       <div className="flex justify-center items-center gap-5 py-5 px-5 sm:px-10 md:px-8 lg:px-44 flex-wrap w-full">
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={html} alt="" className='w-full h-auto' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">HTML</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
         <img src={css} alt="" className='w-full h-auto' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">CSS</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
         <img src={js} alt="" className='w-full h-auto' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">JavaScript</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
         <img src={bootstrap} alt="" className='w-full h-auto' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Bootstrap</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={jquery} alt="" className='w-full h-auto filter'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">JQuery</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={tailwind} alt="" className='w-full h-auto'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Tailwind</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={react} alt="" className='w-full h-auto' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">React js</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
             <img src={node} alt="" className='w-full h-auto' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Node js</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={express} alt="" className='w-full h-auto filter'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Express js</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={mongodb} alt="" className='w-full h-auto'/>
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">MongoDB</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={git} alt="" className='w-full h-auto' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">Git</h1>
         </div>
         <div className='flex flex-col items-center gap-2 w-32 md:w-40  hover:scale-[1.03] hover:transition-[0.3s]'>
            <img src={github} alt="" className='w-full h-auto filter' />
            <h1 className="text-xl hover:text-[#0ef] cursor-pointer">GitHub</h1>
         </div>
       </div>
       </div>
       </>
    );
}

export default Skill;