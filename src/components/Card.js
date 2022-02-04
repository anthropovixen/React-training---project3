import React from "react";
import cardimage from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={cardimage}
        className="card--image"
        alt="representation of experience"
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="red star" />
        <span>5.0</span>
        <span className="card--gray"> (6) • </span>
        <span className="card--gray">USA</span>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="card--bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
