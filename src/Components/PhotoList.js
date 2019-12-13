import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList() {
  const [photos, setPhotos] = useState(Object);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=m7S0bdh5BDJqDdwzW9haomguk4jVdBBF4dBeZEQi`
      )
      .then(response => {
        console.log(response.data);
        setPhotos(response.data);
      })
      .catch(error => {
        console.log("The image was not returned", error);
      });
  }, []);

  return (
    <div>
      <PhotoCard
        title={photos.title}
        date={photos.date}
        src={photos.hdurl}
        explanation={photos.explanation}
      />
    </div>
  );
}
