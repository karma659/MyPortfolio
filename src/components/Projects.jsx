import React from 'react';
import userr from "../assets/user.PNG";
import movier from "../assets/movie.PNG";
import chatr from "../assets/chatsnap.PNG";
import swach from "../assets/swach.PNG";
import portf from "../assets/picc.PNG";
import ecom from "../assets/ecom.PNG";
import recom from "../assets/recom.PNG";

const Projects = () => {

    return (
    <div>
         <div name="Projects"
            data-aos="slide-down"
            data-aos-duration="1000"
            className="  flex  items-center justify-center py-4 ">
            <h1 className="  text-3xl sm:text-7xl font-[Nunito]   text-yellow-600"> Projects</h1>
         </div>
         
        <div className="p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

 

    <div  data-aos="fade-out" className="  rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={ecom} alt="Mountain"/>
      <div className="px-6 py-4">
        <div  data-aos="fade-out" className="font-bold text-xl mb-2 text-blue-700">MERN Ecommerce App</div>
        <p className="text-gray-700 text-base">
        Website for buying and selling products supports authentication and authorization with JSON Web
Token for admin and customer users. 
        </p>
      </div>
      <div className=" px-8 py-8 justify-between flex    ">
    <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://github.com/karma659/Appecomo';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
            <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://appecomo-karma659.vercel.app/';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700   text-xl">Link</button>
      </div>

    </div>
    

    {/* <div data-aos="fade-out" className="  rounded overflow-hidden shadow-lg">
 
    <img className=" w-full h-60 " src={movier} alt="River"/>
     
      <div className="px-6 py-4  ">
        <div data-aos="fade-out" className="font-bold text-xl mb-2  text-blue-700">BROWSER GAME APP</div>
        <p className="text-gray-700 text-base">
        Developed a game search app which shows browser games from the
Freetogame Api and returns the searched games with game link to play.
        </p>
      </div>
      <div className=" px-8 py-8 justify-between flex ">
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
    </div> */}

    <div  data-aos="fade-out" className="rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={userr} alt="Forest"/>
      <div className="px-6 py-4">
        <div data-aos="fade-out" className="font-bold text-xl mb-2  text-blue-700">React-Redux User Profile App</div>
        <p className="text-gray-700 text-base">
        Dispaly user profile details on clicking the button of id
          people using pagination and redux store .
        </p>
      </div>
      <div className=" px-8 py-14 justify-between flex ">
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
{/*
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
             window.location.href='';}
            }className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
  </div>
  */}
          
  <div data-aos="fade-out" className="rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={portf} alt="Forest"/>
      <div className="px-6 py-4">
        <div data-aos="fade-out" className="font-bold text-xl mb-2 text-blue-700">My Portfolio</div>
        <p className="text-gray-700 text-base">
        This website you are visiting is created from scratch by me
        while learning  Tailwind Css and React .
        </p>
      </div>
      <div className=" px-8 py-14  justify-between flex  ">
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://github.com/karma659/MyPortfolio';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
      <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://portfolio-karma659.vercel.app/';}} className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700  text-xl">Link</button>
      </div>
  </div>  
{/* 
  <div  data-aos="fade-out" className="  rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={chatr} alt="Mountain"/>
      <div className="px-6 py-4">
        <div  data-aos="fade-out" className="font-bold text-xl mb-2 text-blue-700">MERN Chat App</div>
        <p className="text-gray-700 text-base">
        A multi user chat application which connects different users from server using socket.io.
        </p>
      </div>
      <div className=" px-8 py-14 justify-between flex    ">
  <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
      
            <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700   text-xl">Link</button>
      </div>

    </div> */}

    
  <div  data-aos="fade-out" className="  rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={recom} alt="Mountain"/>
      <div className="px-6 py-4">
        <div  data-aos="fade-out" className="font-bold text-xl mb-2 text-blue-700">Recomendation System</div>
        <p className="text-gray-700 text-base">
        Applied Natural Language Feature Engineering and built a content
based recommendation system using NLPModels (Bag of words and
TF-IDF) .
        </p>
      </div>
      <div className=" px-8 py-8 justify-between flex   ">
    <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='https://github.com/karma659/Recommendation-System';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-green-700 text-xl " >Source</button>
       
           {/* <button onClick={(e) => {
                 e.preventDefault();
             window.location.href='';}
            } className="shadow-lg font-[Nunito] hover:font-[Roboto]  cursor-pointer text-red-700   text-xl">Link</button>
          */}
      </div>

    </div>

    </div>
    
  </div>
    )
};
export default Projects;