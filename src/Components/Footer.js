import React from 'react'
import '../Styles/Footer.css'
import logo from "../Images/Logo/logo.png";

export default function Footer() {
  return (
    <>
    <section className="bottom-nav">
    <div className="bottom-nav-left" >
        <img src={logo} alt="logo" id="bottom-logo" />
        <p>Monday Morning is the student Media Body of National Institute Of Technology Rourkela. We cover all the events, issues and activities going on inside the campus. We serve as a link between the administration and the students.</p>
    </div>
    <div className="bottom-nav-mid">
        <div>
            <ul>
                <li><a href="#0">Campus</a></li>
                <li><a href="#0">Connect</a></li>
                <li><a href="#0">DD & CWC</a> </li>
                <li><a href="#0">Career</a></li>
                <li><a href="#0">Alumni</a></li>
                <li><a href="#0">Expressions</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="#0">About</a></li>
                <li><a href="#0">Guide</a></li>
                <li><a href="#0">Contact Us</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="#0">Subscribe</a></li>
                <li><a href="#0">Terms of Use</a></li>
                <li><a href="#0">Privacy Policy</a></li>
                <li><a href="#0">Sitemap</a></li>
            </ul>
        </div>
    </div>
    <a href="#0"><i className="fa-brands fa-google-play" /></a>
</section>
      <footer>
        <h4>© 2015 - 2020 Monday Morning. All rights reserved.</h4>
        <div className="icons-tab">
            <a href="#0"><i className="fa-brands fa-facebook"></i></a>
            <a href="#0"><i className="fa-brands fa-twitter"></i></a>
            <a href="#0"><i className="fa-brands fa-youtube"></i></a>
            <a href="#0"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#0"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <span id='privacy-policy'>Privacy Policy</span>
        </footer>
      </>
  )
}
