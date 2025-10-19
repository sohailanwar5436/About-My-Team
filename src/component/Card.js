import React from 'react'
import './Cmp.css'

export default function Card(props) {
  return (
    <div className='card'>
         <img src={props.image} alt={props.name} className="card-image" />
     <h1>{props.name}</h1>
     <p>{props.paragraph}</p>
     <button>View Profile</button>
    </div>
  )
}
