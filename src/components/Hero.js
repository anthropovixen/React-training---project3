import React from "react";
import HeroImage from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero--container">
      <img
        src={HeroImage}
        alt="Images of people experiencing different activities"
        className="hero--image"
      />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--description">
        Join unique interactive activities led by one-of-a-kind hosts - all
        without leaving home.
      </p>
    </section>
  );
}
