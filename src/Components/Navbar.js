import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Logo/logo.png";

export default function Navbar() {
  return (
    <>
      <header>
        <ul className="header-list">
          <li className="header-list-item">
            <a href="#0">About</a>
          </li>
          <li className="header-list-item">
            <a href="#0">Guide</a>
          </li>
          <li className="header-list-item">
            <a href="#0">Contact Us</a>
          </li>
        </ul>
        {/* <img id="hamburger-icon" src="/Icons/hamburger.png" alt="" /> */}
      </header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} id="logo" alt="Logo" />
            {/* <input id="search" type="text" placeholder="Search For Articles"/> */}
            <div className="navbar-panel-list">
                <ul>
                  <li className="navbar-panel-list-items"><Link to="/" >-&gt;  HOME PAGE </Link></li>
                  <li className="navbar-panel-list-items"><Link to="/article-page" >-&gt;  ARTICLE PAGE</Link></li>
                  <li className="navbar-panel-list-items"><Link to="/admin-panel" >-&gt;  ADMIN PANEL</Link></li>
                  <li className="navbar-panel-list-items"><Link to="/squiggle" >-&gt;  SQUIGGLES</Link></li>
                  <li className="navbar-panel-list-items"><Link to="/footer" >-&gt;  FOOTER</Link></li>
                </ul>
            </div>
          </div>
          <hr />
          <ul className="navbar-list">
            <li>
              <a href="#0">Home</a>
            </li>
            <li>
              <a href="#0">Campus</a>
            </li>
            <li>
              <a href="#0">Connect</a>
            </li>
            <li>
              <a href="#0">DD & CWC</a>
            </li>
            <li>
              <a href="#0">Career</a>
            </li>
            <li>
              <a href="#0">Alumni</a>
            </li>
            <li>
              <a href="#0">Expressions</a>
            </li>
          </ul>
          <hr />
        </nav>
        {/* <h1>This is Home Page</h1> */}
      </div>
    </>
  );
}
