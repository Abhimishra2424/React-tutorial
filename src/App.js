import React from "react";

function Name(props) {
  console.log(props);
  return <h1>hello , {props.name}</h1>;
}

function App() {
  return <Name name="Abhishek" />;
}

export default App;
