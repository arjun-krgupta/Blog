import React from 'react';
import about from '../assets/about.jpg'
import picture from '../assets/pic.png'

function About(props) {
    let achieve={backgroundColor:"#0ef",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:'transparent'}
    return (
        <>
        <div className='mt-10 mb-5'>
        <h1 className='text-4xl text-center'>About <span className='text-[#0ef]'>Me</span></h1>

        <div className='flex flex-col justify-center gap-3 items-center px-4 mt-6 w-full md:flex-row md:justify-between md:gap-5 md:px-10 lg:px-32 lg:justify-center lg:gap-16'>
            <div className="hidden md:w-64 md:flex"> 
                <img src={about} alt="" className='w-full h-auto rounded'/>
            </div>
            <div className="flex w-64 md:hidden"> 
                <img src={picture} alt="" className='w-full h-auto rounded'/>
            </div>
            <div className='flex flex-col gap-3 px-5 lg:px-0 w-full md:w-[62%] md:gap-5 '>
                <div className='flex flex-col w-full gap-2 md:gap-4'>
                    <p className='text-sm text-justify md:text-lg'>I am a Web Developer with over a decade of professional expertise in the field. I have the privillage of collaborating with prestigious organizations,contributing to their success and growth.</p>
                    <p className='text-sm text-justify md:text-lg'>My Passion for Web development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
            <div className='flex flex-col gap-3 text-base w-full md:w-[80%] cursor-pointer'>
                <div className='flex gap-3 md:gap-6 items-center hover:scale-[1.05] hover:transition'>
                <span className='min-w-32'>HTML & CSS</span>
                <hr className='w-[90%] border-0 outline-none h-2 bg-[#0ef] rounded-full'/>
                </div>
                <div className='flex gap-3 md:gap-6 items-center hover:scale-[1.05] hover:transition'>
                <span className='min-w-32'>JavaScript</span>
                <hr className='w-[90%] border-0 outline-none h-2 bg-[#0ef] rounded-full'/>
                </div>
                <div className='flex gap-3 md:gap-6 items-center hover:scale-[1.05] hover:transition'>
                <span className='min-w-32'>Tailwind CSS</span>
                <hr className='w-[80%] border-0 outline-none h-2 bg-[#0ef] rounded-full'/>
                </div>
                <div className='flex gap-3 md:gap-6 items-center hover:scale-[1.05] hover:transition'>
                <span className='min-w-32'>React js</span>
                <hr className='w-[70%] border-0 outline-none h-2 bg-[#0ef] rounded-full'/>
                </div> 
                <div className='flex gap-3 md:gap-6 items-center hover:scale-[1.05] hover:transition'>
                <span className='min-w-32'>Node & Express</span>
                <hr className='w-[70%] border-0 outline-none h-2 bg-[#0ef] rounded-full'/>
                </div>
               <div className='flex gap-3 md:gap-6 items-center hover:scale-[1.05] hover:transition'>
               <span className='min-w-32'>MongoDB</span>
               <hr className='w-[65%] border-0 outline-none h-2 bg-[#0ef] rounded-full'/>
               </div>
            </div>
            </div>
        </div>
        <div className='flex justify-around items-center mt-6 w-full px-1 lg:px-32 '>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl md:text-4xl text-center font-semibold' style={achieve}>2+</h1>
                <p className='uppercase text-[11px] md:text-lg text-center'>Years of Experience</p>
            </div>
            <hr className='w-1 h-12 border-0 outline-none bg-[#0ef]'/>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl md:text-4xl text-center font-semibold' style={achieve}>10+</h1>
                <p className='uppercase text-[11px] md:text-lg text-center'>Projects Completed</p>
            </div>
            <hr className='w-1 h-12 border-0 outline-none bg-[#0ef]'/>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl md:text-4xl text-center font-semibold' style={achieve}>15+</h1>
                <p className='uppercase text-[11px] md:text-lg text-center'>Happy Clients</p>
            </div>
        </div>
        </div>
        </>
    );
}

export default About;