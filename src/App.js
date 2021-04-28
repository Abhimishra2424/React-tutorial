import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div>
      <input
        type="name"
        value={name}
        placeholder="Enter Your Name"
        onChange={updatetextfield}
      ></input>
      <input
        type="password"
        value={password}
        placeholder="Enter Your Password"
        onChange={updatepasswordfield}
      ></input>
      <button onClick={submitForm}>submit</button>
    </div>
  );
  function submitForm() {
    console.log(name, password);
  }

  function updatetextfield(event) {
    setname(event.target.value);
  }
  function updatepasswordfield(event) {
    setpassword(event.target.value);
  }
}

export default App;
