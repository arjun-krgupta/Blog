
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shopper from '../assets/shopper.png'
import education4u from '../assets/education4u.png'
import fitness_freak from '../assets/fitness-freak.png'
import vegifruit from '../assets/vegifruit.png'
// import weather_app from '../assets/weather-app.png'

function Project(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
          },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
     <>
     <div className="text-center mt-10">
     <h1 className='text-center text-4xl mb-5'>All <span className='text-[#0ef]'>Projects</span></h1>
     <div className="px-5 lg:px-28 py-10">
<Carousel responsive={responsive}>
  <div className='flex flex-col items-center gap-3 mx-auto cursor-pointer border rounded w-full md:w-[350px] lg:w-[520px] border-white'>
    <div className='w-full'>
        <img src={shopper} alt="" className='w-full h-auto rounded'/>
    </div>
    <h1 className="text-lg lg:text-2xl font-semiBold text-[#0ef] ">Shopper (E-Commerce Websites)</h1>
    <span className='flex flex-col w-[95%] gap-2 mb-2'>
    <p className='text-justify text-sm md:text-base'>The Shopper is E-commerce Websites that allow users
        to buy Online products like mobiles,laptops and clothes. We provide affordable price to the Customers and also user-friendly interface.
    </p>
    <p className='text-justify text-sm md:text-base'>The Technologies used in this websites are HTML , CSS ,
        JavaScript , Tailwind CSS , Bootstrap , Jquery and React.
    </p>
    </span>
    </div>

  <div className='flex flex-col items-center gap-5 mx-auto cursor-pointer border rounded w-full md:w-[350px] lg:w-[520px] border-white'>
    <div className='w-full'>
        <img src={education4u} alt="" className='w-full h-auto rounded'/>
    </div>
    <h1 className="text-lg lg:text-2xl font-semiBold text-[#0ef] hidden lg:block">Education4U (Online Learnig Websites)</h1>
    <h1 className="text-lg lg:text-2xl font-semiBold text-[#0ef] block lg:hidden">Education4U ( Learnig Websites )</h1>
    <span className='flex flex-col w-[95%] gap-3 mb-2'>
    <p className='text-justify text-sm md:text-base'>The Education4u is Online Learnig Websites that allow users to learn Online from Home. We provide a Courses like Web Designning,Data Analyst,Graphics Designing and many more things.
    </p>
    <p className='text-justify text-sm md:text-base'>The Technologies used in this websites are HTML , CSS ,
        JavaScript.
    </p>
    </span>
    </div>

  <div className='flex flex-col items-center gap-3 mx-auto cursor-pointer border rounded w-full md:w-[350px] lg:w-[520px] border-white'>
    <div className='w-full'>
        <img src={fitness_freak} alt="" className='w-full h-auto rounded'/>
    </div>
    <h1 className="text-lg lg:text-2xl font-semiBold text-[#0ef] ">Fitness Freak (GYM Websites)</h1>
    <span className='flex flex-col w-[95%] gap-2 mb-2'>
    <p className='text-justify text-sm md:text-base'>The Fitness Freak is GYM Websites that allow users
        to buy Online Memberships for body building,fitness related Nutritions and We provide all health tips for lose or gain the weight.
    </p>
    <p className='text-justify text-sm md:text-base'>The Technologies used in this websites are HTML , CSS ,
        JavaScript , Bootstrap , Jquery , React , Node , Express and MongoDB.
    </p>
    </span>
    </div>

  <div className='flex flex-col items-center gap-3 mx-auto cursor-pointer border rounded w-full md:w-[350px] lg:w-[520px] border-white'>
    <div className='w-full'>
        <img src={vegifruit} alt="" className='w-full h-auto rounded'/>
    </div>
    <h1 className="text-lg lg:text-2xl font-semiBold text-[#0ef] ">VegiFruit (E-Commerce Websites)</h1>
    <span className='flex flex-col w-[95%] gap-2 mb-2'>
    <p className='text-justify text-sm md:text-base'>The VegiFruit is E-commerce Websites that allow users
        to Buy Online seasonally fruits and vegetables and their benefits also. We provide affordable price to the Customers and also user-friendly interface.
    </p>
    <p className='text-justify text-sm md:text-base'>The Technologies used in this websites are HTML , CSS ,
        JavaScript , Tailwind , Jquery , React.
    </p>
    </span>
    </div>
</Carousel>
</div>
</div>
     </>
    );
}

export default Project;
