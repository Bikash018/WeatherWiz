
import CurrentLocation from "./currentLocation";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {" "}
        Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/bikash-kumar-prasad-0b509924a/">
          Bikash Prasad
        </a>{" "}
         Leveraging React.js{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
