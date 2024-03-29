import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from '../assets/me.png';
import { Link } from "react-scroll"; 


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ankita Ludbe
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Software Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        As an aspiring software developer, I bring a versatile skill set to the table. Proficient in Java, C, C++, and Python, I excel in programming. My expertise extends to web development with HTML, CSS, Bootstrap, and Tailwind, along with frameworks like React.js and Flask. With a passion for learning and a commitment to excellence, I am poised to make impactful contributions in the field of technology.
        </p>
        <div>
          <Link
            to="skills"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Home;