import React from "react";
import vocal from "../images/vocal.jpg";
import personal from "../images/personal.jpg"
import movie from "../images/movie.jpg"

const Projects = () => {
    const projects = [
        {
          img: movie,
          title: "Movie searching App using React",
          desc: "Movie searching App using React | Created a responsive movie searching application using React.js, showcasing real-time search functionality and user-friendly UI. | Integrated external movie APIs for up-to-date information, demonstrating API handling.",
          code: "https://github.com/ankitaludbe/React-Practice-1",
        },
        {
          img: personal,
          title: "Personality prediction website using flask ",
          desc: "Personality prediction website using flask | Integrated the Ocean model into a Flask web app for real-time personality predictions. | Designed a user-friendly interface with intuitive input forms and clear result displays, enhancing the overall user experience.",
          code: "https://github.com/ankitaludbe/Personality-prediction-",
        },
        {
          img: vocal,
          title: "Vocal For Local",
          desc: "Vocal For Local | Developed an innovative online platform that bridges the gap between local service providers and customers, facilitating easy access to a variety of services",
          code: "https://github.com/ankitaludbe/Vocal-For-Local",
        },
        
      ]; 
// h-screen
  return (
    <div name="project" className="h-auto w-full bg-[#0a192f]">
    <section className="bg-[#0a192f] text-gray-300 px-5 py-32" id="projects">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
      <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Projects</p>
              <p className='py-4 text-2xl'>Navigate through a portfolio showcasing my expertise across a spectrum of technologies.</p>
          </div>

        <div></div>
      </div>

      <div className=" projects container mx-auto grid md:grid-cols-3 gap-10 ">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="h-[260px] w-[620px] rounded-lg" />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 hover:bg-[#0a192f]">
                <p className=" py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default Projects;
