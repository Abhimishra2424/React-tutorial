import React from "react";
import axios from "axios";

function App() {
  const fetchRandomData = () => {
    return axios
      .get("https://randomuser.me/api")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button onClick={fetchRandomData}>random data</button>
    </>
  );
}

export default App;
