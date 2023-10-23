import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
  <nav class='flex content-center border-box h-12 px-5 space-x-10 items-end font-semibold'>
    < Link to="/" class='text-4xl bold text-white'>Obaid</Link>
    <ul class='text-xl list-none flex flex-row space-x-10 '>
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