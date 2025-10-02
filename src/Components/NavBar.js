import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
  <nav className='flex justify-center items-end pt-5 font-semibold '>
    <ul className='flex justify-center text-xl text-white list-none space-x-4 md:space-x-10'>
      <li className= 'hover:text-sky-500 duration-500'>
        <Link to="/">Home</Link>
      </li>
      <li className='hover:text-sky-500 duration-500'>
        <Link to="/Experiences">Experiences</Link>
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