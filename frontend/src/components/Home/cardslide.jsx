import React from 'react'
import Cards from './cards'
import Room from "../assets/room.jpg"
import "./home.css"

const cardslide = () => {
  return (
    <div className="secc">
      <div>
        <section className="section">
            <div className="colum columns">
                <div className="colum">
                    <Cards title="DOUBLE BAD" price="2500" image={Room}/>
                </div>
                <div className="colum">
                    <Cards title="DOUBLE BAD" price="2500" image={Room}/>
                </div>
                <div className="colum">
                    <Cards title="DOUBLE BAD" price="2500" image={Room}/>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default cardslide
