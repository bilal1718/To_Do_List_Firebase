import React from "react";
import { Link } from "react-router-dom";
import "../Styles/nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            All
          </Link>
        </li>
        <li>
          <Link to="/create" className="nav-link">
            Create
          </Link>
        </li>
      </ul>
      <h1 className="title">To-Do List</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
  );
};

export default Nav;
