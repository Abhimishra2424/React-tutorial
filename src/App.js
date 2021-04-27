import React from "react";
import "./App.css";

const name = "Abhishek Mishra";
const img = "https://picsum.photos/id/1/200/300";
const img2 = "https://picsum.photos/id/1/200/300";

const heading = {
  color: "blue",
  marginTop: "70px",
  textShadow: "0px 2px 4px #00c3ff",
};

function App() {
  return (
    <>
      <h1 style={heading} className="names">
        My Name Is {name}
      </h1>
      <div className="main">
        <img className="img" src={img} />
        <img className="img" src={img2} />
      </div>
    </>
  );
}

export default App;
