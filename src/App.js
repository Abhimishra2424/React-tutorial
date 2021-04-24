import React from "react";
import Img from "./Img";


const links = "https://abhi-web.netlify.app/"

function App() {
  return (
    <>
    <Img />
      <h1 contentEditable="true" >abhishek</h1>
       <br />
       <a href={links}  target="_abhi">My website</a>
    </>
  );
}

export default App;
