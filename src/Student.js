import React from 'react'

function Student(props) {
    return (
        <div>
            <h1>Your name is :{props.name}</h1>
            <h1>Your Roll No :{props.rollno}</h1>
        </div>
    )
}

export default Student
