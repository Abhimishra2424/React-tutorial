import React from "react";

const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/seed/picsum/200/300";
const img3 = "https://picsum.photos/seed/picsum/200/300";
const img4 = "https://picsum.photos/seed/picsum/200/300";

function Img() {
  return (
    <>
      <img src={img1} alt="imgss" />
      <img src={img2} alt="imgss" />
      <img src={img3} alt="imgss" />
      <img src={img4} alt="imgss" />
    </>
  );
}

export default Img;