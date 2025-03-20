import React from 'react'
import './gallery.css';
import room from "../assets/room.jpg"
import room1 from '../assets/room.png'
import sunset from "../assets/sunset.png"
import location from "../assets/location.png"

const gallery = () => {
  return (
    <div className='menuu'>
      <div className="itemgallery">
        <img src={room} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={room1} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={sunset} alt="" className="photo" loading='lazy'/>
      </div>
      <div className="itemgallery">
        <img src={location} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={location} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={room1} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={room} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={sunset} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={room} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={room1} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={location} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={room} alt="" className="photo" loading='lazy' />
      </div>
      <div className="itemgallery">
        <img src={sunset} alt="" className="photo" loading='lazy' />
      </div>
    </div>
  )
}

export default gallery
