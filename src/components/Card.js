import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={props.item.coverImg}
        className="card--image"
        alt="representation of experience"
      />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="red star" />
        <span>{props.item.stats.rating}</span>
        <span className="card--gray"> ({props.item.stats.reviewCount}) • </span>
        <span className="card--gray">{props.item.location}</span>
        <p>{props.item.title}</p>
        <p>
          <span className="card--bold card--price">
            From ${props.item.price}
          </span>{" "}
          / person
        </p>
      </div>
    </div>
  );
}
