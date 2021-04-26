import React from "react";
import './App.css'

const name = 'Abhishek Mishra'
const img = 'https://picsum.photos/id/1/200/300'
const img2 = 'https://picsum.photos/id/1/200/300'

function App() {
  return (
    <>
      <h1 className="names"> my name is {name} </h1>
      <div className="main">
        <img className="img" src={img}/>
        <img className="img" src={img2}/>
      </div>
    </>
  );
}

export default App;
