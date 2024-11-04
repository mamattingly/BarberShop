import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { pathname } = useLocation();
  const [burgerClick, setBurgerClick] = useState(false);

  const burgerToggle = () => {
    setBurgerClick(!burgerClick);
  };

  useEffect(() => {
    setBurgerClick(false);
  }, [pathname]);

  const title = "The Elegant Edge";

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/packages", label: "Packages" },
    { path: "/hours", label: "Hours" },
    { path: "/schedule", label: "Schedule" },
  ];


  return (
    <nav className="header">
      <h1>{title}</h1>
      <div className={burgerClick ? "nav-title active" : "nav-title"}>
        <ul className={burgerClick ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="burger" onClick={burgerToggle}>
        {burgerClick ? (
          <FaTimes size={25} style={{ color: "#000" }} />
        ) : (
          <FaBars size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}

export default Header;
