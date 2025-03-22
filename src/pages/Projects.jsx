import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaServer, FaCode, FaLightbulb } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <h2><FaServer /> APIs</h2>
      <ProjectCard title="Volt Audio API" link="https://voltagelord-volt-audio.hf.space" />
      <ProjectCard title="Volt Translator API" link="https://voltagelord-volt-translator.hf.space" />

      <h2><FaCode /> Frontend Projects</h2>
      <ProjectCard title="Volt Audio Frontend" link="https://volt-audio.onrender.com" />
      <ProjectCard title="Volt Translator Frontend" link="https://volt-translator.onrender.com" />

      <h2><FaLightbulb /> Upcoming Projects</h2>
      <p>Voltura | Volt AI</p>
    </div>
  );
};

export default Projects;
