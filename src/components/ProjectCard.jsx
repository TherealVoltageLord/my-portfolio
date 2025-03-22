const ProjectCard = ({ title, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;
