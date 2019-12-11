import React from "react";

const PhotoCard = props => {
  return (
    <div>
      <img src={props.src} alt="daily nasa snapshot" />
      <h2>Photo Date: {props.date}</h2>
      <p>Title: {props.title}</p>
      <p>Explanation: {props.explanation}</p>
    </div>
  );
};

export default PhotoCard;
