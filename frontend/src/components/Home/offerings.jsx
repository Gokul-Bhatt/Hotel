import React from 'react'
import "./home.css"
import Food from "../assets/food.png";
import DailyHygiene from "../assets/Daily Hygiene.png";
import Wifi from "../assets/wifi.jpg";
import Inroomdining from "../assets/InRoom Dining.png";
import Hotwater from "../assets/Hot Water.png";
import Powerbackup from "../assets/Power backup.jpg";

const offerings = () => {
  return (
    <div className='offerings'>
      <h1>our offerings</h1>
      <div className='imeg'>
        <img src={Food} alt="" />
        <h3>Fresh Local Cuisine</h3>
      </div>
      <div>
        <img src={DailyHygiene} alt="" />
        <h3>Daily Hygiene</h3>
      </div>
      <div>
        <img src={Wifi} alt="" />
        <h3>WIFI</h3>
      </div>
      <div>
        <img src={Inroomdining} alt="" />
        <h3>InRoom Dining</h3>
      </div>
      <div>
        <img src={Hotwater} alt="" />
        <h3>HOT WATER</h3>
      </div>
      <div>
        <img src={Powerbackup} alt="" />
        <h3>POWER BACKUP</h3>
      </div>
    </div>
  )
}

export default offerings
