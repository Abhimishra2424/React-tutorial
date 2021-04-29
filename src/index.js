import React from "react";
import ReactDOM from "react-dom";
import * as ques  from "./App";



ReactDOM.render(
  <>
    <h1>{ques.default}</h1>
    <h1>{ques.favpro}</h1>
    <h1>{ques.myLast()}</h1>
    <h1>{ques.myage()}</h1>
  </>,
  document.getElementById("root")
);
