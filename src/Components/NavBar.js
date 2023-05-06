
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import {AiOutlineDesktop, AiOutlineGithub, AiOutlineMail,
    
} from "react-icons/ai";


const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
      <div className='flex justify-center  '>
     
    <header className="w-full flex justify-between rounded-lg  border-2 p-3  text-white fixed z-50 bg-gradient-to-tr from-blue-900 to-zinc-700  ">
      <a href="/" className="text-xl font-serif  font-bold  ">
       ADITYA
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex justify-center align-middle space-x-5 font-bold">
          <li>
            <a href="/#About">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#achieve">Achievements</a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex text-white border-2  bg-gradient-to-tr from-blue-900 to-zinc-700  flex-col m-5 text-center rounded-xl p-3 font-Alkatra">
          <li>
            <a href="/#About">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#achieve">Achievements</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
         
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
    </div>
  );
};


export default NavBar