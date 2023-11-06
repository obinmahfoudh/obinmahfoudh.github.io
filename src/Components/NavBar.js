import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
  <nav class='flex h-12 px-5 items-end font-semibold justify-center space-x-10'>
    <Link to="/" class='text-xl bold text-white'>Home</Link>
    <ul class='text-xl list-none flex space-x-10 justify-center'>
      <li class='transition ease-in-out delay-150  hover:scale-125 duration-700'>
        <Link to="/WorkExperiences" class='text-white'>Work Experiences</Link>
      </li>
      <li class='transition ease-in-out delay-150  hover:scale-125 duration-700'>
        <Link to="/Classes" class='text-white'>Classes</Link>
      </li>
      <li class='transition ease-in-out delay-150  hover:scale-125 duration-700'>
        <Link to="/ContactMe" class='text-white'>Contact Me</Link>
      </li>
    </ul>
  </nav>
  );
}