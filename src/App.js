
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
      
          Bikash Prasad
      
         Leveraging React.js{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
