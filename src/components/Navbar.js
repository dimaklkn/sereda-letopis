import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import logo from "../logo.jpg";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="museum logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeclassname="active">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              О проекте
            </NavLink>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vk.com/muzei.furmanova"
            >
              <FontAwesomeIcon icon={faVk} className="envelope" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
