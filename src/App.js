import React from "react";
import PhotoList from "./Components/PhotoList";
import styled from "styled-components";
// import logo from "./assets/earth-from-space.jpg";

import "./App.css";

const TitleH1 = styled.h1`
  text-align: center;
  color: #fff;
  font-family: "Titillium Web", sans-serif;
  margin: 2rem auto;
`;

function App() {
  return (
    <>
      <TitleH1>NASA Photo Of The Day!</TitleH1>
      <div>
        <PhotoList />
      </div>
    </>
  );
}

export default App;
