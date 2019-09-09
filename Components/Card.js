import React from "react";

function Card(props) {
  return (
    <div className="contact-card">
      <img alt="pic" src={props.contact.imgUrl} />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}

export default Card;
