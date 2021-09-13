import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1></h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <CardItem 
              src="https://chandani-gurung.github.io/mywebsite/images/projects.PNG"
              text="Here are some of the projects I have worked on"
              label="Projects"
              path="/projects"
              />
              <CardItem 
              src="https://chandani-gurung.github.io/mywebsite/images\aboutme.JPG"
              text="Know more about me"
              label="About"
              path="/about"
              />
          </ul>
          <ul className="cards__items">
              <CardItem 
              src="https://chandani-gurung.github.io/mywebsite/images\hireme.PNG"
              text="Let's work together"
              label="Hire Me"
              path="/hire-me"
              />
              <CardItem 
              src="https://chandani-gurung.github.io/mywebsite/images\hobbies.png"
              text="Some of my hobbies that I like to indulge on when I'm not coding"
              label="Hobbies"
              path="/hobbies"
              />
              <CardItem 
              src="https://chandani-gurung.github.io/mywebsite/images\socials.jpg"
              text="Feel free to give me a follow"
              label="Socials"
              path="/socials"
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
