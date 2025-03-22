import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Voltage Lord's Portfolio</h1>
      <p>Building the future with APIs and Frontend Magic!</p>
      <Link to="/projects" className="btn">View Projects</Link>
    </div>
  );
};

export default Home;
