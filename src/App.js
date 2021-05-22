import React, { useState } from "react";

function App() {
  const purple = "#8e44ad";
  const [bgcolor, setBgcolor] = useState(purple);
  const [name, setName] = useState("click me");

  const bgchange = () => {
    let newBg = "#34495e";
    let newName = "yo yo";
    setBgcolor(newBg);
    setName(newName);
  };

  const BgBack = () => {
    setBgcolor(purple);
    setName("ayyo !!");
  };

  return (
    <>
      <div style={{ backgroundColor: bgcolor }}>
        <button onClick={bgchange} onDoubleClick={BgBack}>
          {name}
        </button>
      </div>
    </>
  );
}

export default App;
