import React, { useState } from "react";



function App() {

  const [counter,  setCounter] = useState(0)// <- [0, function]

  function Clicked (){
       setCounter(counter + 1);
    
  }
  return (
    <>
      <button onClick={Clicked}>button</button>
      <h1> {counter}</h1>
    </>
  );
}

export default App;
