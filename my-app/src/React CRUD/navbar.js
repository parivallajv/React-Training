import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Div, H2 } from "../React-useState,useEffect/styles";

const Navbar = () => {
  return (
    <div className="Navbar">
      <H2>The Shopping Zone</H2>
      <div className="links">
        <Link to="/" style={{ textDecoration: "none", paddingLeft: 13 }}>
          Home
        </Link>
        <Link to="/create" style={{ textDecoration: "none", paddingLeft: 13 }}>
          New Product
        </Link>
        <Link to="/about" style={{ textDecoration: "none", paddingLeft: 13 }}>
          About us
        </Link>
        <Link to="/help" style={{ textDecoration: "none", paddingLeft: 13 }}>
          Support
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
