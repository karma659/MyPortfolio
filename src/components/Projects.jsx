import React from 'react';
import userr from "../assets/user.PNG";
import movier from "../assets/movie.PNG";
import chatr from "../assets/chatsnap.PNG";
import swach from "../assets/swach.PNG";
import portf from "../assets/portf.PNG";

const Projects = () => {

    return (
    <div>
         <div name="Projects"
            data-aos="slide-down"
            data-aos-duration="1000"
            className="  flex  items-center justify-center py-4 ">
            <h1 className="  text-3xl sm:text-7xl font-[Nunito] hover:font-[Roboto]  text-green-600"> Projects</h1>
         </div>
         
        <div className="p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

    <div  data-aos="fade-out" className="  rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={chatr} alt="Mountain"/>
      <div className="px-6 py-4">
        <div  data-aos="fade-out" className="font-bold text-xl mb-2 text-blue-700">MERN Chat App</div>
        <p className="text-gray-700 text-base">
        A multi user chat application which connects different users from server using socket.io.
        </p>
      </div>
      <div className=" px-5 py-5 justify-between flex ">
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://github.com/karma659/CIRCLE-CONNECT/tree/master';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://circleconnectapp.herokuapp.com/';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
    </div>
    
    <div data-aos="fade-out" className="  rounded overflow-hidden shadow-lg">
 
    <img className=" w-full h-60 " src={movier} alt="River"/>
     
      <div className="px-6 py-4  ">
        <div data-aos="fade-out" className="font-bold text-xl mb-2  text-blue-700">OmDb Movie Search Using React</div>
        <p className="text-gray-700 text-base">
        A movie search app which shows movies posters  from the OmDb Api and
returns the searched movie posters.
        </p>
      </div>
      <div className=" px-5 py-5 justify-between flex ">
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://github.com/karma659/MovieReact';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://csb-p82p6i-g9wj79nxg-karma659.vercel.app/';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
    </div>

    <div  data-aos="fade-out" className="rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={userr} alt="Forest"/>
      <div className="px-6 py-4">
        <div data-aos="fade-out" className="font-bold text-xl mb-2  text-blue-700">React-Redux User Profile App</div>
        <p className="text-gray-700 text-base">
        Dispaly user profile details on clicking the button of id  people using pagination and redux store .
        </p>
      </div>
      <div className=" px-5 py-5 justify-between flex ">
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://github.com/karma659/ReactReduxUserProfile';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://csb-r6cy40.vercel.app/';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
      </div>

      <div data-aos="fade-out" className="rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={swach} alt="Forest"/>
      <div className="px-6 py-4">
        <div data-aos="fade-out" className="font-bold text-xl mb-2 text-blue-700">SwachBin</div>
        <p className="text-gray-700 text-base">
         A Smart Dustbin which lets Sensor Enabled waste collection Data and separates biodegradable waste.
        </p>
      </div>
      <div className=" px-5 py-5 float-right flex ">
    
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://karma659.github.io/SwachBin.github.io-main/';}
            }className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
  </div>  
  <div data-aos="fade-out" className="rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={portf} alt="Forest"/>
      <div className="px-6 py-4">
        <div data-aos="fade-out" className="font-bold text-xl mb-2 text-blue-700">My Portfolio</div>
        <p className="text-gray-700 text-base">
        This website you are visiting is created from scratch by me
        while learning  Tailwind Css and React .
        </p>
      </div>
      <div className=" px-5 py-5  float-right ">
     
      <button className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
  </div>  
    </div>
    
  </div>
    )
};
export default Projects;