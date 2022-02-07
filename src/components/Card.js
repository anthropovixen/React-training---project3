import React from "react";
import star from "./images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        className="card--image"
        alt="representation of experience"
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="red star" />
        <span>{props.rating}</span>
        <span className="card--gray"> ({props.reviewCount}) • </span>
        <span className="card--gray">{props.country}</span>
        <p>{props.title}</p>
        <p>
          <span className="card--bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
