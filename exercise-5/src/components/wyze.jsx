import React from "react";

export default function Card({ id, name, info, hobby, image }) {
  return (
    <li className="card-frame" id={`card-${id}`}>
      <div className="image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h2 className="card-name">{name}</h2>
      <p className="card-info">{info}</p>
      <p className="card-hobby">{hobby}</p>
    </li>
  );
}
