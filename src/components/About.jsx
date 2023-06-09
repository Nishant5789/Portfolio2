import React, { useState, useEffect } from "react";
import socialMediaLinks from "./../assets/socialMedia";
import Articles from "./Articles";

const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen flex justify-between items-center text-white px-10 flex-col lg:flex-row pb-10 backdrop-blur-lg"
    >
      <div className="">
        <div className="mx-10 md:mx-24">
          <h2 className="text-4xl mb-4 text-center">About Me</h2>
          <div className="md:text-xl">
            <p className="mb-4">
            Enthusiastic and dedicated pre-final year student studying in Dharmsinh Desai University, Gujarat. Active learner and good at adapting new technologies. Gained experience in Web
            </p>
            <p className="pb-3">
              🔭 I'm currently learning MERN stack
            </p>
            <p className="pb-3">
               Gained experience in Web, App and participating in hackathons
            </p>
            <p className="pb-3">
              👯 I'm looking to collaborate on Open Source Project
            </p>
            <p className="pb-3">
              💬 Ask me about JavaScript, Python, Web Development
            </p>
            <p className="pb-3">
              💼 I'm open to work on Web Design &amp; Development
            </p>
          </div>
          <div className="pt-10 min-w-full grid grid-rows-2 md:grid-rows-1 gap-2 grid-flow-col">
            {socialMediaLinks.map((link, idx) => {
              return (
                <span className="px-2 col-span-3" key={idx}>
                  <a
                    href={link.profileLink}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <img
                      src={link.iconLink}
                      alt={link.name}
                      className="w-10 h-10 bg-slate-700 bg-opacity-70"
                    />
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
