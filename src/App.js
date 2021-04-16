import React from "react";

function App() {
  
  function buttonwasclicked (event)
  {
    console.log(event.target);
    alert('I was clicked')
  }
  return (
   
   <>
     <button onClick={buttonwasclicked}> button </button>
   </>
  );
}

export default App;
