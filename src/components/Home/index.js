import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'

export default function Home() {
  const h1Ref = useRef()
  

  const [counter , setCounter] = useState(0)
  const [counter2 , setCounter2] = useState(0)

  useEffect(()=>{
      console.log(h1Ref);
  },[counter , counter2])
   
    return (
      <div ref={h1Ref}>
       <h1>{counter}</h1>
       <h1>{counter2}</h1>

       <button onClick={()=> setCounter(counter => counter + 1)}> counter1</button>
       <button onClick={()=> setCounter2(counter => counter + 1)}>conuter2</button>
      </div>
    )
}
