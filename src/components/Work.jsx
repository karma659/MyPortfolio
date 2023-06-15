import React from "react";
import mypic from "../assets/celebal.png";
import {colors} from "@mui/material";

const Work = () => {
   return (
      <div name="work" className="w-screen my-20">
         <div className=""></div>
         <div name="about" className="  m-10 md:h-screen  justify-center items-center  ">
            <div
               data-aos="slide-down"
               data-aos-duration=""
               className=" h-10 flex  items-center justify-center m-10  ">
               <h1 className="  text-3xl sm:text-7xl font-[Nunito]   text-yellow-600 "> WORK</h1>
            </div>

            <div className="  container  flex flex-col-reverse md:flex-row items-center gap-2 ">
               {/**left */}
               <div data-aos="fade-in" data-aos-duration="1500" className="relative mx-20  ">
                  <div className="  overflow-hidden  ">
                     <img src={mypic} />
                  </div>
               </div>
               {/**right */}
               <div className="gg w-[60%]  flex-col  md:text-[60%] text-[70%] gap-3">
               <p
                  data-aos="fade-in"
                  data-aos-duration=""
                  className=" text-2xl  md:text-4xl  flex-col  ">
                  <p className="   text-slate-800 px-5 "> Data Scientist 
                  <h3 className="  md:text-2xl  text-slate-500 "> Received a PPO for Intern + Fulltime    <br></br> Jul'22 - Jan'23   &nbsp; </h3>
                  </p>
                  <h4 className=" md:text-2xl  text-slate-500 ">     </h4>
               </p>
              
               <ul
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  className=" py-1 text-2xl  sm:text-3xl font-[Roboto]  text-slate-800">
                  {" "}
                <h1 className="text-slate-800 px-5 ">  Part of the BMC team  </h1> 
                  {" "}
               </ul>
                 
                 <ol  data-aos="fade-in"
                  data-aos-duration="1200"
                   className=" m-2 font-[Roboto] ">
                     <li className="text-slate-800 mt-2 font-[Roboto] ">
                        Responsible for implementing optimized data mining
                        techniques and EDA for unstructured data and Feature Engineering .
                     </li>
                 
                     <li className="text-slate-800 mt-2 font-[Roboto]  ">Made Crud app using Node.js , Express , Sql server.</li>
            
                     <ul className=" text-slate-800   mt-2  font-[Roboto]  md:flex ">
                        <li>Javascript</li> 
                        <li>Python</li> 
                        <li>Node.js</li> 
                        <li>Express.js</li> 
                         <li>NLP</li>
                         <li>Git</li> 
                     </ul>
                     </ol>
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

export default Work;
