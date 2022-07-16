import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleclick = () => {
    setnav(!nav);
  };

  return (
    <div className="z-10  fixed w-full h-[50px] flex justify-between items-center pl-20 pr-10 font-[Nunino]  bg-neutral-100 ">
      {/**Akash logo */}
      <div className=" flex px-1  text-4xl font-[Nunito] hover:font-[Roboto]  cursor-pointer">
        <h1 className="animate-bounce-1 text-blue-600 "> A</h1>
        <h1 className="animate-bounce-2 text-red-600">k</h1>
        <h1 className="animate-bounce-3 text-yellow-300">a</h1>
        <h1 className="animate-bounce-4 text-blue-600">s</h1>
        <h1 className="animate-bounce-5 text-green-600">h</h1>
      </div>
      {/**Menu */}
      <div className="text-3xl ">
        <ul className=" hidden  md:flex ">
          <li className="font-[Nunito] hover:font-[Roboto] text-blue-600 ">
          <Link   to="home" smooth={true} duration={500} >
          Home
          </Link>
          </li>
          <li className="font-[Nunito] hover:font-[Roboto] pr-10 text-red-600">
             <Link to="about"smooth={true}  duration={500} >
             About
          </Link>
          </li>
        {/*  <li className="font-[Nunito] hover:font-[Roboto] text-yellow-400">
            Work
          </li>
  */}
          <li className="font-[Nunito] hover:font-[Roboto] text-blue-600">
          <Link to="skills"smooth={true}  duration={500} >
          Skills
          </Link>
          </li>
         {/* <li className="font-[Nunito] hover:font-[Roboto] text-green-600">
            Projects
  </li>*/}
        <li className="font-[Nunito] hover:font-[Roboto] text-green-600">
          <Link to="Projects"smooth={true}  duration={500} >
          Projects
          </Link>
          </li>
        </ul>
      </div>
      {/*Hamburger */}
      <div
        onClick={handleclick}
        className="  py-1 px-1 fill-current text-yellow-300  text-sm md:hidden z-10 cursor-pointer border-2 border-blue-700    hover:text-yellow-300 hover:border-green-600   "
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/** mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " md:hidden absolute top-0 left-0 w-full bg-neutral-100   flex flex-col justify-center items-center "
        }
      >
        <li className=" font-[Nunito] hover:font-[Roboto] py-2 tet-3xl text-blue-600 ">
        <Link  onClick={handleclick} to="home" smooth={true} duration={500} >
          Home
          </Link>
        </li>
        <li className="font-[Nunito] hover:font-[Roboto] py-2 tet-3xl text-red-600 ">
        <Link onClick={handleclick} to="about"smooth={true}  duration={500} >
             About
          </Link>
        </li>
      {/*  <li className="font-[Nunito] hover:font-[Roboto] py-2 tet-3xl text-yellow-400 ">
          Work
        </li>
      */}
        <li className="font-[Nunito] hover:font-[Roboto] py-2 tet-3xl text-blue-600 ">
        <Link onClick={handleclick} to="skills"smooth={true}  duration={500} >
          Skills
          </Link>
        </li>
       {/* <li className="font-[Nunito] hover:font-[Roboto] py-2 tet-3xl text-green-600 ">
          Projects
    </li>*/}
    <li className="font-[Nunito] hover:font-[Roboto] py-2 tet-3xl text-green-600 ">
        <Link onClick={handleclick} to="Projects"smooth={true}  duration={500} >
          Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
