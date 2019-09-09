import React from "react";

function Card(props) {
  return (
    <div className="contact-card">
      <img alt="pic" src={props.contact.imgUrl} />
      <h3>{props.contact.name}</h3>
      <p style={{ display: props.contact.phone ? "block" : "none" }}>
        Phone: {props.contact.phone}
      </p>
      <p style={{ display: props.contact.email ? "block" : "none" }}>
        Email: {props.contact.email}
      </p>
    </div>
  );
}

export default Card;
