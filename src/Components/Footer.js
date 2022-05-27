import React from 'react'
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
    <a href="https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google-play" /></a>
</section>
      <footer>
        <h4>© 2015 - 2020 Monday Morning. All rights reserved.</h4>
        <div className="icons-tab">
            <a href="https://www.facebook.com/mondaymorningnitr/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/mmnitrkl?lang=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.youtube.com/c/MondayMorningNITR/featured" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqazRrSm1uUkFsM09GUTRONlFSN25YanN1a08zd3xBQ3Jtc0tsUFNZVUQwbGlKc2ZhM2NaTk5DazI2RGxUekxnanJKYUQ2MTFlMUZsZnU1QWJVM19JdWRPdGNlYmpWQTVkOG9XaVJoWC1zbHJZQVppdS03czI3d3NBU2xheTliaHZHRXBiVEY1eG9DM1MzalFBZ180SQ&q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmonday-morning-the-official-student-media-body-of-nit-rourkela" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Finstagram.com%2Fmondaymorningnitrofficial%2F&h=AT2D9fZiBMuQWjnO6dPuKU5AP1JlEltHy6DnGyDHSxLcJ76P7M5EXyDldMwaJXmNMXPbUDT2mupL4P82Hv7d98lTvaYhPMzH1Lcvq7zctf9RpXfMTXXXBhi18CDHM7Bkj6X_gap6ZdKW6_-BrFrkT5tviX7uK7CjGmpCHg" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <span id='privacy-policy'>Privacy Policy</span>
        </footer>
      </>
  )
}
