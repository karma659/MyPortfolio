import React from "react";
import mypic from "../assets/mypic.jpg";

const About = () => {
   return (
      
      <div name="about" className="  px-10 py-20 md:mt-20 mt-10  justify-center items-center  ">
         <div
            data-aos="slide-down"
            data-aos-duration="1000"
            className=" h-10 flex  items-center justify-center px-10  py-20 my-5  ">
            <h1 className="  text-3xl sm:text-7xl font-[Nunito] hover:font-[Roboto]  text-red-600">
               {" "}
               About
            </h1>
         </div>

         <div className="  container mx-auto flex flex-col-reverse md:flex-row items-center gap-2 ">
            {/**left */}
            <div data-aos="fade-right" data-aos-duration="1000" className="relative px-20">
               <div className="  w-40 shadow-md rounded  overflow-hidden ">
                  <img src={mypic} class="    " />
               </div>
            </div>
            {/**right */}
            <div className=" my-auto flex flex-col  md:text-[70%] text-[60%] gap-3">
               <p
                  data-aos="fade-left"
                  data-aos-duration="2500"
                  className=" text-2xl  sm:text-5xl  flex ">
                  <p className="   text-slate-800 "> I'am &nbsp;</p>
                  <h1 className="text-blue-600  ">A</h1>
                  <h1 className="  text-red-600 ">k</h1>
                  <h1 className=" text-yellow-300 ">a</h1>
                  <h1 className=" text-blue-600 ">s</h1>
                  <h1 className=" text-green-600 ">h</h1>
               </p>
               <p
                  data-aos="fade-left"
                  data-aos-duration="1800"
                  className=" py-1 text-2xl  sm:text-3xl font-[Roboto]  text-slate-800">
                  {" "}
                  I am a B.E. Undergrad at Jadavpur University.{" "}
               </p>
               <p
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className=" py-1 text-1xl  sm:text-2xl font-[Roboto]   text-slate-800">
                  I am skilled in Algorithms and Data Structures and I have experience with web
                  technologies like MERN Stack and Data Science.
               </p>
               <p
                  data-aos="slide-down"
                  data-aos-duration="2200"
                  className="  font-[Roboto]  text-slate-800"></p>
            </div>
         </div>
      </div>
   );
};

export default About;
