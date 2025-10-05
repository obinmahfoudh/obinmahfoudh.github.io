import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
  <nav className='flex justify-center pt-5 font-semibold'>
    <ul className='flex justify-between md:text-2xl text-white text-sm list-none space-x-3 md:space-x-10'>
      <li className= 'hover:text-sky-500 duration-500'>
        <Link to="/">Home</Link>
      </li>
      <li className='hover:text-sky-500 duration-500'>
        <Link to="/Experiences">Experiences</Link>
      </li>
      <li className='hover:text-sky-500 duration-500'>
        <Link to="/Projects">Projects</Link>
      </li>
      <li className='hover:text-sky-500 duration-500'>
        <Link to="/Classes">Classes</Link>
      </li>
      <li className='hover:text-sky-500 duration-500'>
        <Link to="/ContactMe">Contact Me</Link>
      </li>
    </ul>
  </nav>
  );
}