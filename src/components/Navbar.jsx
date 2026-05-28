import { Link, useLocation } from "react-router-dom";

function Navbar({ toggleMenu }) {
  const location = useLocation();

  return (
    <header className="head" id="header">
      
      {/* Logo always goes home */}
      <Link className="logo" to="/">
        <strong>Matthew Holzer</strong> Portfolio
      </Link>

      <div className="menu">
        <div className="menu-icon" onClick={toggleMenu}>
          Menu ☰
        </div>
      </div>
    </header>
  );
}

export default Navbar;