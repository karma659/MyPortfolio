import React from "react";
import mypic from "../assets/mypic.png";

const About = () => {
   return (
      <div className="w-screen">
         <div className=""></div>
      <div name="about" className="  m-10 md:h-screen  justify-center items-center  ">
         <div
            data-aos="slide-down"
            data-aos-duration=""
            className=" h-10 flex  items-center justify-center m-10  ">
            <h1 className="  text-3xl sm:text-7xl font-[Nunito]   text-yellow-600 ">
               {" "}
               About
            </h1>
         </div>

         <div className="  container  flex flex-col-reverse md:flex-row items-center gap-2 ">
            {/**left */}
            <div data-aos="slide-up" data-aos-duration="1500" className="relative mx-20">
               <div className="  w-40 shadow-md rounded  overflow-hidden ">
                  <img src={mypic} class="    " />
               </div>
            </div>
            {/**right */}
            <div className="gg   flex-col  md:text-[60%] text-[70%] gap-3">
               <p
                  data-aos="Bounce"
                  data-aos-duration=""
                  className=" text-2xl  md:text-4xl  flex-col  ">
                  <p className="   text-slate-800 "> Reach me 
                  <h3 className="  text-red-800   "> @ &nbsp; </h3>
                  </p>
                  <h4 className=" md:text-3xl  text-slate-800 "> karmakarakash659@gmail.com</h4>
               </p>
              
               <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  className=" py-1 text-2xl  sm:text-3xl font-[Roboto]  text-slate-800">
                  {" "}
                <h1 className="text-green-700"> I’m interested in creating apps & looking to collaborate  </h1> 
                  {" "}
               </p>
               <p
                  data-aos="fade-in"
                  data-aos-duration="1500"
                  className=" py-1 text-1xl  sm:text-2xl font-[Roboto]   text-slate-600">
                  I am skilled in Algorithms and Data Structures and I have fair knowledge in web
                  technologies like MERN Stack and Data Science.
               </p>
               <p
                  data-aos="fade-out"
                  data-aos-duration="1800"
                  className="  font-[Roboto]  text-slate-800"></p>
            </div>
         </div>
      </div>
      </div>
   );
};

export default About;
