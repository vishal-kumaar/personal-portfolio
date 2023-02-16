import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from "../assets/images/avatar.svg";
import close from "../assets/images/close.svg";
import home from "../assets/images/home.svg";
import project from "../assets/images/project.svg";
import blog from "../assets/images/blog.svg";
import resume from "../assets/images/resume.svg";
import contact from "../assets/images/contact.svg";

export default function Sidebar() {
  return (
    <aside className='fixed top-0 left-0 h-screen bg-white z-10'>
      <div className='flex items-center justify-between mb-5 mx-4 pt-4'>
        <img src={avatar} alt="developer" className='w-14'/>
        <img src={close} alt="close" className='w-7 cursor-pointer'/>
      </div>
      <hr className='border'/>
      <div className='text-gray-600 font-bold my-5 mx-4 flex flex-col'>
        <NavLink to="/" className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center">
          <img src={home} alt="home" className='w-7 h-7 mr-1'/>
          <div className=''>Home</div>
        </NavLink>
        <NavLink to="/project" className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center">
          <img src={project} alt="project" className='w-7 h-7 mr-1'/>
          <div className=''>Project</div>
        </NavLink>
        <NavLink to="/resume" className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center">
          <img src={blog} alt="blog" className='w-7 h-7 mr-1'/>
          <div className=''>Blog</div>
        </NavLink>
        <NavLink to="/blog" className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center">
          <img src={resume} alt="resume" className='w-7 h-7 mr-1'/>
          <div className=''>Resume</div>
        </NavLink>
        <NavLink to="/contact" className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center">
          <img src={contact} alt="contact" className='w-7 h-7 mr-1'/>
          <div className=''>Contact</div>
        </NavLink>
      </div>
    </aside>
  )
}