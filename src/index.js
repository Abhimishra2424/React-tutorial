import React from "react";
import ReactDOM from "react-dom";
import add, { sub, mul, div } from "./App";

ReactDOM.render(
  <>
    <h1>add two number {add(23, 65)}</h1>
    <h1>sub two number {sub(23, 20)}</h1>
    <h1>mul two number {mul(23, 20)}</h1>
    <h1>div two number {div(2, 20)}</h1>
  </>,
  document.getElementById("root")
);
