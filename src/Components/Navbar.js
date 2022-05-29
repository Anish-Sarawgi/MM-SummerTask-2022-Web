import React from "react";
import '../Styles/Navbar.css'
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
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
                </ul>
            </div>
          </div>
          <hr />
          <div className="navbar-list">
            <h2 style={{'fontSize':'30px' }}>Filters :</h2>
          <ul>
            <li>
              <a href="#0">Trending</a>
            </li>
            <li>
              <a href="#0">Campus</a>
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
          <input type="text" placeholder="Search article.." style={{'padding':'5px', 'margin':'2px'}}/>
          <Button variant="contained" color="success" size="small" startIcon={<SearchIcon/>}  />
          </div>
          <hr/>
        </nav>
      </div>
    </>
  );
}
