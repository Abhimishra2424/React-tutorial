import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
       <h1>Home , go to  <Link  to="/about" >about</Link></h1>
    )
}
