import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`box ${props.isPopular ? "popular" : ""}`}>
      {props.isPopular && <div className="label">Most Popular</div>}
      <h3 className="title">{props.title}</h3>
      <img src={props.icon} alt="" />
      <div className="price">
        {props.true && <span className="amount">{props.price}</span>}
        {props.boxes && (
          <span className="call_us">
            {props.phone} {props.price}
          </span>
        )}
        {props.true && <span className="time">Per Hour</span>}
      </div>
      <ul>
        {props.true && <li>Van with a driver</li>}
        {props.true && <li>{props.helper}</li>}
        {props.boxes && <li>{props.boxes}</li>}
      </ul>
    </div>
  );
};

export default Card;
