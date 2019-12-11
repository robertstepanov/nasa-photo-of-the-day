import React from "react";
import PhotoList from "./Components/PhotoList";
// import logo from "./assets/earth-from-space.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header>
        <img src={logo} alt="earth from space" />
      </header> */}
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <h1>NASA Photo Of The Day!</h1>
      <PhotoList />
    </div>
  );
}

export default App;
