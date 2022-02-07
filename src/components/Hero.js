import React from "react";

export default function Hero() {
  return (
    <section className="hero--container">
      <img
        src="../images/photo-grid.png"
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
