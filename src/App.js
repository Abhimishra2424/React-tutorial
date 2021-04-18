import React from "react";


const dayDate = new Date ;
const monthDate = new Date ;
const yearDate = new Date ;


function App() {
  
  return (
   <>
     <h1>{`${dayDate.getDate()} ${monthDate.getMonth()} ${yearDate.getFullYear()} `}</h1>
   </>
  );
}

export default App;
