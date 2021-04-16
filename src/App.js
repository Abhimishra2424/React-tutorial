import React from "react";

//  null , numbers , strings, array , HTML,
//ternary operator , [(condition) ? (if true, do this) : (otherwise, do this)

const arr =[1,2,3,4,5,6]

function App() {
  return (
   
  <h1> {arr.map(val =>  <div>{val ** 2}</div>)}</h1>
  );
}

export default App;
