
import React from 'react';
import Home from './components/Home';
// import About from './components/About';
// import Project from './components/Project';
// import {Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Services from './components/Services'
// import Info from './components/Info'
// import Contact from './components/Contact';
import Footer from './components/Footer';
// import NotFound from './components/NotFound';
// import Skill from './components/Skill';

function App(props) {
  return (
    <>
    <Navbar/>
    <Home/>
   {/* <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/info' element={<Info/>} />
    <Route path='/service' element={<Services/>} />
    <Route path='/skill' element={<Skill/>} />
    <Route path='/project' element={<Project/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='*' element={<NotFound/>} />
   </Routes> */}
   <Footer/>
    </>
  );
}

export default App;