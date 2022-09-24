import React from "react";
import { image } from "../data/data";

function About() {
  return <div id= "about">
    <h2>About me</h2>
    <p>I am an ambitious girl with so many dreams to achieve</p>
    <img src={image} alt="I made this"></img>
  </div>;
  
}

export default About;
