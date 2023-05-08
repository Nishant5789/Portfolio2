import React from "react";
import projectslink from "../assets/projectsLink";
import { BsCodeSlash } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full min-h-screen py-2 backdrop-blur-lg"
    >
      <h2 className="text-white text-4xl mb-5 text-center">Projects</h2>
      <div className="flex justify-center items-center">
        <ul
          role="list"
          className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectslink.map((link, index) => (
            <li
              key={index}
              className="col-span-1 flex flex-col text-center bg-slate-800 rounded-lg shadow divide-y divide-gray-200 hover:scale-105 duration-200"
            >
              <div className="flex-1 flex flex-col">
                <img
                  className="w-80 flex-shrink-0 mx-auto rounded-t-lg"
                  loading="lazy"
                  src={link.picture}
                  alt={link.name}
                />
                <h3 className="my-2 text-white font-semibold">{link.name}</h3>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200  text-slate-100 rounded-b-xl">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={link.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:text-slate-300"
                    >
                      <CgMediaLive className="w-5 h-5" aria-hidden="true" />
                      <span className="ml-3">Demo</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={link.code}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-br-lg hover:text-slate-300"
                    >
                      <BsCodeSlash className="w-5 h-5" aria-hidden="true" />
                      <span className="ml-3">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default Projects;
