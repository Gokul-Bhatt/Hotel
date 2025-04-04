import React from 'react'
import "./room.css"
import Reuse from './reuse'
import Room from "../assets/room.jpg";
import Room1 from "../assets/three bad.webp";
import Room2 from "../assets/four bed.jpg"

const room = () => {
  return (
    <div className='room'>
      <div className="itemroom">
      <Reuse title="DOUBLE BED" price="2500" image={Room}/>
    </div>
    <div className="itemroom">
      <Reuse title="THREE BED" price="2500" image={Room1}/>
    </div>
    <div className="itemroom">
      <Reuse title="FOUR BED" price="2500" image={Room2}/>
    </div>
    </div>
    
  )
}

export default room
