import React from "react";

const PhotoCard = props => {
  return (
    <div>
      <img src={props.hdurl} alt="daily nasa snapshot" />
      <h2>Photo Date: {props.date}</h2>
      <p>Title: {props.title}</p>
      <p>Explanation: {props.explanantion}</p>
    </div>
  );
};

export default PhotoCard;
