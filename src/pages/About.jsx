import SkillBar from "../components/SkillBar";
import { FaCode, FaTools, FaCogs, FaJs, FaPython, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <h1><FaCode /> About Me</h1>
      <p>
        Hello! I'm <strong>Odunayo Ayinla</strong>, but you can call me <strong>Voltage Lord</strong>.  
        As a passionate developer with a strong focus on API building, frontend development, and Node.js,  
        I've been driving innovation in the tech space since 2020.
      </p>

      <p>
        My journey began as a learner under the guidance of experienced developers, where I honed my skills  
        and gained valuable insights. In 2022, I partnered with <strong>Silent</strong>, the developer of Demon Killer V5,  
        a WhatsApp bot. Although our partnership was short-lived due to unforeseen issues, it sparked  
        a new wave of determination within me.
      </p>

      <p>
        In January 2023, I embarked on a new challenge: mastering Python to build robust APIs.  
        This journey has been transformative, and I'm proud to showcase some of my notable projects below.
      </p>

      <p>
        I'm excited to continue pushing the boundaries of what's possible in the world of tech.  
        Let's connect and explore how we can create something amazing together!
      </p>

      <h2><FaCogs /> Skills</h2>
      <SkillBar skill="JavaScript" percentage={70} icon={<FaJs />} />
      <SkillBar skill="Python (Learning)" percentage={60} icon={<FaPython />} />
      <SkillBar skill="HTML" percentage={100} icon={<FaHtml5 />} />
      <SkillBar skill="CSS" percentage={95} icon={<FaCss3Alt />} />

      <h2><FaTools /> Specialties</h2>
      <ul>
        <li><FaCogs /> API Development</li>
        <li><FaCogs /> Frontend Web Development</li>
      </ul>

      <h2><FaNodeJs /> Tools & Frameworks</h2>
      <ul>
        <li><FaNodeJs /> Node.js</li>
        <li><FaPython /> Flask</li>
        <li><FaPython /> Django</li>
        <li>🖼️ Pillow</li>
      </ul>
    </div>
  );
};

export default About;
