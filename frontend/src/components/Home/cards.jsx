import React from 'react'
import "./home.css";
import { useNavigate} from 'react-router-dom'

const cards = ({image,title, price}) =>{
  const navigate = useNavigate();
  return (
    <div className="wweeff w-70 border-2 overflow-hidden my-4 mx-4  bg-sky-500">
      <div className="w-90 h-60 ">
        <img className="bedimg w-70" src={image} alt="Image" />
      </div>
      <div className="secdiv h-32">
        <p className=" titlecss text-black font-semibold">{title}</p>
        <p className="titlecss text-black font-semibold">{price} INR</p>
        <div className="btncss1">
        <button className='btncss'
        onClick={()=>navigate("./ragister")}>BOOK NOW</button>
        </div>
      </div>
    </div>
  )
}

export default cards
//  className=" text-black font-semibold bg-green-500 border-2 border-green-600 p-2 w-48 rounded-full ml-4 hover:bg-green-800 hover:text-white