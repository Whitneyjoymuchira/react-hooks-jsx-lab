import React from "react";
import {image} from "../data/data";

function About() {
  return(
  <div id="about">
    <h2>About Me</h2>
    <p>I am a self-taught baker specializing in wedding cakes </p>
    <img src={image} alt= "I made this" />

  </div>

  ) 
}

export default About;
