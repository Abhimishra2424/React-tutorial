import React, { useState } from "react";

function App() {

  const [name , setName] = useState('')
  const [password , setPassword] = useState('')

  const UpdateName =(e)=>{
    setName(e.target.value)
  }
  const UpdatePassword =(e)=>{
    setPassword(e.target.value)
  }

  const submit =()=>{
    console.log(name , password);
  }

  return (
    <>
     <label>Enter your name:
     <input type="name"  value={name} onChange={UpdateName}  />
     </label>
     <br />
     <label>Enter your password:
     <input type="password"  value={password} onChange={UpdatePassword} />
     </label>

     <button onClick={submit}> submit</button>
    </>
  );
}

export default App;
