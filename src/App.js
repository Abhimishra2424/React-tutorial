import React from "react";

function App() {
  const myprolang = ["js", "php", "python"];

  // javascript
  // let top1 = myprolang[0]
  // let top2 = myprolang[1]
  // let top3 = myprolang[2]

  // Array Destructuring Es6
  let [top1, top2, top3] = myprolang;
  console.log(myprolang);

  return (
    <>
      <h1>{`my fav prog lang is  ${top1}`}</h1>
      <h1>{`my fav prog lang is  ${top2}`}</h1>
      <h1>{`my fav prog lang is  ${top3}`}</h1>
         {/* {myprolang.map((val , index)=>{
              return `   ${val}`
         })} */}
    </>
  );
}

export default App;
