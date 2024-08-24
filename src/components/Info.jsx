import React from "react";
import web_logo from '../assets/web logo.jpg'
import responsive_design from '../assets/responsive design.png'
import ui_design from '../assets/ui design.jpeg'
import backend_logo from '../assets/backend logo.jpg'

function Info(props) {
  return (
    <>
      <div className="mt-5 md:mt-10">
        <h1 className="text-center text-4xl font-semibold">
          My <span className="text-[#0ef]">Info</span>
        </h1>
        <div className="flex flex-col gap-5 px-3 py-8 w-full md:px-0 md:flex-row  md:justify-center lg:px-16 lg:py-16">

          <div className="flex flex-col mx-auto gap-4 border border-white rounded p-4 cursor-pointer hover:shadow-[#0ef] hover:shadow hover:scale-[1.02] hover:transition-[0.3s]">
            <h1 className="text-2xl font-semibold text-center mb-1">
              Personal info
            </h1>
            <div className="flex gap-3 text-xs md:text-base">
              <span className="min-w-16">Birthday </span>
              <span>:&nbsp;&nbsp; 08/10/1998</span>
            </div>
            <div className="flex gap-3 text-xs md:text-base">
              <span className="min-w-16">Email </span>
              <span>:&nbsp;&nbsp; akarjun1050@gmail.com</span>
            </div>
            <div className="flex gap-3 text-xs md:text-base">
              <span className="min-w-16">Phone </span>
              <span>:&nbsp;&nbsp; +91 9318348275</span>
            </div>
            <div className="flex gap-3 text-xs md:text-base">
              <span className="min-w-16">LinkedIn </span>
              <span className="hidden lg:block">:&nbsp;&nbsp; https://www.linkedin.com/in/arjunkrgupta/</span>
              <span className="block lg:hidden">:&nbsp;&nbsp; linkedin.com/in/arjunkrgupta/</span>
            </div>
            <div className="flex gap-3 text-xs md:text-base">
              <span className="min-w-16">GitHub </span>
              <span className="hidden lg:block">:&nbsp;&nbsp; https://github.com/arjun-krgupta</span>
              <span className="block lg:hidden">:&nbsp;&nbsp; github.com/arjun-krgupta</span>

            </div>
            <div className="flex gap-3 text-xs md:text-base">
              <span className="min-w-16">Address </span>
              <span>:&nbsp;&nbsp; New Ashok Nagar, New Delhi</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mx-auto border border-white rounded p-5 cursor-pointer hover:shadow-[#0ef] hover:shadow hover:scale-[1.02] hover:transition-[0.3s] md:hidden lg:flex lg:gap-4">
            <h1 className="text-2xl font-semibold text-center mb-1">
              My Expertise
            </h1>
            <div className="flex gap-4 items-center">
              <span className="w-14">
                <img src={web_logo} alt="" className="w-full h-auto rounded"/>
                 </span>
              <span>Web Design</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-14">
                <img src={ui_design} alt="" className="w-full h-auto rounded"/>
                 </span>
              <span>UI Development</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-14">
                <img src={responsive_design} alt="" className="w-full h-auto rounded"/>
                 </span>
              <span>Responsive Design</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-14">
                <img src={backend_logo} alt="" className="w-full h-auto rounded"/>
              </span>
              <span>Backend Development</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mx-auto border border-white rounded p-4 cursor-pointer hover:shadow-[#0ef] hover:shadow hover:scale-[1.02] hover:transition-[0.3s]">
          <h1 className="text-2xl font-semibold text-center mb-1">
              My Education
            </h1>
            <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-col gap-1">
                    <h1 className="text-[#0ef] text-lg">MCA</h1>
                    <p className="text-sm text-justify lg:text-base">Global Institute of Information Technology <br /> Greater Noida, Uttar Pradesh</p>
                    <span>2021 - 2023</span>
                    </div>
                    <span >76%</span>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-col gap-1">
                    <h1 className="text-[#0ef] text-lg">BCA</h1>
                    <p className="text-sm lg:text-base text-justify">IIMT College Of Management <br /> Greater Noida, Uttar Pradesh</p>
                    <span>2018 - 2021</span>
                    </div>
                    <span >71%</span>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;