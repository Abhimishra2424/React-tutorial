import React from "react";


const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/seed/picsum/200/300";
const img3 = "https://picsum.photos/seed/picsum/200/300";
const img4 = "https://picsum.photos/seed/picsum/200/300";
const links = "https://abhi-web.netlify.app/"

function App() {
  return (
    <>
      <h1 contentEditable="true">abhishek</h1>
       <img src={img1} alt="imgss" />
       <img src={img2} alt="imgss" />
       <img src={img3} alt="imgss" />
       <img src={img4} alt="imgss" /> <br />
       <a href={links}  target="_abhi">My website</a>
    </>
  );
}

export default App;
