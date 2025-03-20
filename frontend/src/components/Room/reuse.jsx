import React from 'react'
import "./room.css"
import { useNavigate} from 'react-router-dom'

const reuse = ({image, title, price}) => {
    const navigate = useNavigate();
  return (
    <div className='reuse'>
        <div className='reuse1'>
        <img className='imeg' src={image} alt="Image" />
        
        <div className='ptag'>
        <p className='title title1'>{title}</p>
        <p className=' title1 title is-4 is-family-secondary'>{price} INR</p>
        <div className='btn1 button is-primary is-rounded'>
        <button
        onClick={()=>navigate("../ragister")}>BOOK NOW</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default reuse
