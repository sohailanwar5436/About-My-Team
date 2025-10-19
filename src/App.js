import React from 'react'
import Card from './component/Card.js'
import './App.css'
export default function App() {
  return (
   <>
      <h1 className='main-heading'>About Our Team</h1>  {/* 👈 Heading outside the parent div */}
      <div className='parent'>
        <Card 
          name='Sohail Anwar' 
          paragraph='Sohail is a young person in our group. He is funny and creative, always ready with new ideas, a good sense of humor, and a positive attitude that inspires everyone around him.'
          image='https://media-mct1-2.cdn.whatsapp.net/v/t61.24694-24/544360346_2258171711301568_1945899826004956786_n.jpg?ccb=11-4&oh=01_Q5Aa2wE0vywScFzjIswi3k8p-CMFQmQGcJjAwxeg01Nj8NhDng&oe=690205B1&_nc_sid=5e03e0&_nc_cat=101'
        />
        <Card 
          name='Ihsaan Ullah' 
          paragraph='Ihsaan is our group leader — a confident, responsible, and inspiring person. He leads with patience, motivates everyone, and always makes sure the whole team works together toward success.'
          image='https://avatars.githubusercontent.com/u/128162020?v=4'
        />
        <Card 
          name='Sana Ullah' 
          paragraph='Sana Ullah is a calm and quiet member of our group. Sometimes he seems a bit lazy and sad, but deep down he’s thoughtful and has his own way of doing things.'
          image='https://media-mct1-2.cdn.whatsapp.net/v/t61.24694-24/540995457_1854467098489290_2248368417569797783_n.jpg?ccb=11-4&oh=01_Q5Aa2wEpnC_LA47hUQrWhcf6RqmmzIOHJMQk5-IRu_-9JtTWLQ&oe=69020A01&_nc_sid=5e03e0&_nc_cat=102'
        />
        <Card 
          name='Insanity' 
          paragraph='Insanity is past member of our group he not like group work he is very modren person'
          image='https://www.torontodefencelawyers.com/wp-content/uploads/2019/07/insanity.jpg'
        />
      </div>
    </>
  )
}
