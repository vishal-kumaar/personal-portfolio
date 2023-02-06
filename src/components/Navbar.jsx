import React from 'react';
import hamburger from "../assets/images/hamburger.svg";
import devIcon from "../assets/images/devIcon.png";

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center text-white p-6 fixed left-0 top-0 w-full'>
        <div className=''>
          <img src={devIcon} alt="dev-icon" className='w-16'/>
        </div>
        <div className=''>
          <div className='flex font-mono text-lg'>
          <div className='mx-6 cursor-pointer hover:text-gray-400'>Home</div>
          <div className='mx-6 cursor-pointer hover:text-gray-400'>Skills</div>
          <div className='mx-6 cursor-pointer hover:text-gray-400'>Project</div>
          <div className='mx-6 cursor-pointer hover:text-gray-400'>Contact</div>
          </div>
          <div className=''>
            <img src={hamburger} alt="menu" className='w-8 h-8 hidden'/>
          </div>
        </div>
    </nav>
  )
}