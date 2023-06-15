import React, {useState} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode} from "react-icons/si";


const Home = () => {
   
   return (
   
      <div name="home" className=" py-20   w-screen">
         {/** Intro*/}
         <div className=" text-5xl ml-20 md:mr-20 mr:10 md:text-7xl font-bold animate-fade-in-down    md:flex flex-col flex-wrap   ">
            <p className="  animate-fade-in-down"> Hi,</p>
          
                <p className="  md:flex text-5xl md:text-4xl  animate-fade-in-down-1 my-1 mx-1 ">
               <h1>I'm &nbsp;</h1>
           
               <h1 className=" animate-bounce-1 text "> Akash &nbsp;</h1>

     
               <h1 className="animate-bounce-3  text ">Karmakar</h1>
        
               </p>
            
            {/* <p className=" animate-fade-in-down">Software Engineer</p> */}
         </div>

         {/** Details list  */}
         <div className=" ml-20 mr-20  text-2xl font-[Raleway] text-neutral-700 py-4  flex flex-col ">
            <div className="  md:flex flex-col  ">
               <p className="px-1">Data Science @ Celebal || Fullstack Developer ||</p>
               <p className="px-1">
                  Codechef - 1701 (3*) ||Google Kickstart 1056 || B.E Undergrad at Jadavpur University {" "}
               </p>
            </div>
            {/**button */}
         {/**   <span className=" animate-fade-in-down-1 pt-4  ">
               <button
                onClick={e => {
                     e.preventDefault();
                     window.location.href =
                        "";
                  }} 
                  className="font-[Roboto] hover:font-[Nunito] animate-bounce-1  hover:shadow-lg  flex border-2 border-neutral-400 rounded-lg items-center px-4  py-1  ">
                  <h1 className="text-yellow-600 "> R</h1>
              
               </button>
            </span>*/ }
         </div>
               
         {/** Socials */}
         <div className=" ml-20 mr-20 text-3xl  sm:text-3xl animate-fade-in-down ">
            <ul className="  md:flex  ">
               <li className=" ml-0 pl-0 py-1 pr-10  animate-fade-in-down-1 text-blue-600 ">
                  <a
                     className=" flex md:flex-col animate-bounce-1  "
                     href="https://www.linkedin.com/in/karmakarakash659/">
                     <h2 className="px-1 text-blue-600">
                        {" "}
                        <FaLinkedin />{" "}
                     </h2>
                     <h2 className="px-1 flex text-black ">
                        Linked
                        <h2 className=" h-8 bg-blue-600 rounded-sm text-white ">In </h2>
                     </h2>
                  </a>
               </li>
               <li className=" ml-0 pl-0  py-1 pr-10 animate-fade-in-down-2  ">
                  <a
                     className=" flex md:flex-col animate-bounce-2  "
                     href="https://github.com/karma659">
                     <h2 className="px-1 text-neutral-900">
                        <FaGithub />
                     </h2>
                     <h2 className="px-1 text-black">Github</h2>
                  </a>
               </li>
            { /*  <li className="ml-0 pl-0  py-1  text-amber-700 pr-10  animate-fade-in-down-3   ">
                  <a className=" flex md:flex-col  animate-bounce-3 " href="">
                     <h2 className="px-1  text-amber-900">
                        <SiCodechef />
                     </h2>
                     <h2
                        className="px-1 fil w-min 
               ">
                        Codechef
                     </h2>
                  </a>
         </li>*/}
               {/*   <li className=" ml-0 pl-0 py-1 pr-10 text-blue-600  animate-fade-in-down-4  ">
                  <a className=" flex md:flex-col  animate-bounce-4  " href="/">
                     <h2 className=" mx-1 px-1 h-4 w-6 text-white bg-gradient-to-r from-yellow-400 via-blue-600 to-red-500">
                        <SiCodeforces />
                     </h2>
                     <h2 className="px-1 flex text-black">
                        Code
                        <h2 className=" text-blue-900 "> forces</h2>
                     </h2>
                  </a>
                  </li> */}
               <li className="ml-0 pl-0  py-1 pr-10  text-green-600  animate-fade-in-down-5 ">
                  <a
                     className=" flex md:flex-col  animate-bounce-3"
                     href="https://auth.geeksforgeeks.org/user/karmakarakash659/practice/">
                     <h2 className="px-1 text-green-600">
                        <SiGeeksforgeeks />{" "}
                     </h2>
                     <h2 className="px-1 text-green-600 ">GeeksforGeeks</h2>
                  </a>
               </li>
               <li className="ml-0 pl-0  py-1 pr-10  text-yellow-600  animate-fade-in-down-5 ">
                  <a
                     className=" flex md:flex-col  animate-bounce-4"
                     href="https://leetcode.com/amourex/">
                     <h2 className="px-1 text-yellow-600">
                        {" "}
                        <SiLeetcode />{" "}
                     </h2>
                     <h2 className="px-1 flex text-black ">
                        Leet
                        <h2 className=" h-8 bg-yellow-600 rounded-sm text-black ">code </h2>
                     </h2>
                  </a>
               </li>
            </ul>
         </div>
         
            
      </div>
   );
};

export default Home;
