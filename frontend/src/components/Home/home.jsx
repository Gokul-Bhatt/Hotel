import React from 'react'
import "./home.css"
import logo from "../assets/mainimg.jpeg"
import { useNavigate } from 'react-router-dom'

const home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
        <div className="middle">
            <div className="logoh1">
            <img src={logo} alt="" className='loogo w-50 rounded-full'/>
            <h1>𝔧𝔞𝔤𝔢𝔰𝔥𝔴𝔞𝔯 ℑ𝔫</h1>
            </div>
            <div className="btn">
            <button className='btn2' onClick={()=> navigate("./room")}> BOOK YOUR STAY   ➜</button>
            </div>
        </div>
      
    </div>
  )
}

export default home
