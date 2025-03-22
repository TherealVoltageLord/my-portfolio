import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Voltage Lord</h1>
      <ul>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaUser /> About</Link></li>
        <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
