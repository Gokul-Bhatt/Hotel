import React from 'react'
import "./home.css"
import Food from "../assets/food.png";
import DailyHygiene from "../assets/Daily Hygiene.png";
import Wifi from "../assets/wifi.png";
import Inroomdining from "../assets/InRoom Dining.png";
import Hotwater from "../assets/Hot Water.png";
import Powerbackup from "../assets/power.png";

const offerings = () => {
  return (
      <div className='offerings'>
      <h1 className='our'>OUR OFFERINGS</h1>
    <div className='offers'>
      <div className='imag'>
        <img src={Food} alt="" />
        <h3>LOCAL CUISINE</h3>
      </div>
      <div className='imag'>
        <img src={DailyHygiene} alt="" />
        <h3>DAILY HYGIENE</h3>
      </div>
      <div className='imag'>
        <img src={Wifi} alt="" />
        <h3>WIFI</h3>
      </div>
      <div className='imag'>
        <img src={Inroomdining} alt="" />
        <h3>INROOM DINING</h3>
      </div>
      <div className='imag'>
        <img src={Hotwater} alt="" />
        <h3>HOT WATER</h3>
      </div>
      <div className='imag'>
        <img src={Powerbackup} alt="" />
        <h3>POWER BACKUP</h3>
      </div>
    </div>
    </div>
  )
}

export default offerings
