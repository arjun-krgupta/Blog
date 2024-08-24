import React from 'react';
import pic from '../assets/pic.png'
import cv from '../assets/Node js.pdf'
import About from './About';
import Services from './Services';
import Info from './Info';
import Project from './Project';
import Contact from './Contact';
import Skill from './Skill';
function Home(props) {
  let st={backgroundColor:"#0ef",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:'transparent'}
    return (
        <>
        <div className='flex flex-col w-full justify-center items-center mt-16 gap-4'>
          <div className='w-44'>
          <img src={pic} alt="" className='w-full h-auto rounded-full'/>
          </div>
          <div className='flex flex-col items-center gap-2 lg:gap-4'>
          <h1 className='text-2xl w-full font-semibold text-center md:text-4xl lg:text-5xl'>
            <span style={st}>Hello I'm Arjun,</span> Web <br />Developer based in India.</h1>
          <p className='text-xl w-[80%] md:text-2xl first-letter:md:w-full text-center font-semibold'>I am a Full Stack Developer from Noida.</p>
          </div>
          <div className='flex gap-1 text-2xl lg:text-3xl lg:gap-3'>
          <a href="https://www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="https://www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="https://github.com/arjun-krgupta"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/arjunkrgupta/"><ion-icon name="logo-linkedin"></ion-icon></a>
          </div>
          <a href={cv} className='bg-[#0ef] text-center text-black w-36 py-2 font-semibold rounded-full hover:border border-white'>My resume</a>
        </div>
        <About/>
        <Services/>
        <Info/>
        <Skill/>
        <Project/>
        <Contact/> 
        </>
    );
}

export default Home;