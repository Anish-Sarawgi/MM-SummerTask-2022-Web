import React from "react";
import "../Styles/Cards.css"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import card from '../Images/Card/card.jpg'

export default function Card() {
  return (
    <div className="cards-container">
      <div id="card-1" className="card-items">
        <img src={card} alt="" />
        <h4>Lorem ipsum dolor sit amet.</h4>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem dolore saepe et non quos, est quod illo alias beatae.</p>
        <Button variant="conatined" size="small"><Link to='/article-page'> Learn More </Link></Button>
      </div>
      <div id="card-2" className="card-items">
        <img src={card} alt="" />
        <h4>Lorem ipsum dolor sit amet.</h4>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem dolore saepe et non quos, est quod illo alias beatae.</p>
        <Button variant="conatined" size="small"><Link to='/article-page'>Learn More </Link></Button>
      </div>
      <div id="card-3" className="card-items">
        <img src={card} alt="" />
        <h4>Lorem ipsum dolor sit amet.</h4>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem dolore saepe et non quos, est quod illo alias beatae.</p>
        <Button variant="conatined" size="small"><Link to='/article-page'>Learn More</Link></Button>
      </div>
      <div id="card-4" className="card-items">
        <img src={card} alt="" />
        <h4>Lorem ipsum dolor sit amet.</h4>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem dolore saepe et non quos, est quod illo alias beatae.</p>
        <Button variant="conatined" size="small"><Link to='/article-page'>Learn More</Link></Button>
      </div>
      <div id="card-5" className="card-items">
        <img src={card} alt="" />
        <h4>Lorem ipsum dolor sit amet.</h4>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem dolore saepe et non quos, est quod illo alias beatae.</p>
        <Button variant="conatined" size="small"><Link to='/article-page'>Learn More</Link></Button>
      </div>
      <div id="card-6" className="card-items">
        <img src={card} alt="" />
        <h4>Lorem ipsum dolor sit amet.</h4>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem dolore saepe et non quos, est quod illo alias beatae.</p>
        <Button variant="conatined" size="small"><Link to='/article-page'>Learn More</Link></Button>
      </div>
    </div>
  );
}
