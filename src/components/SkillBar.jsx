const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill">
      <p>{skill}</p>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
