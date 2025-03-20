import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./Navbar.css";
import mainimg from "../assets/mainimg.jpeg"
import menu from "../assets/menu1.png";

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false)
  return (
    <div className='navbar'>
      <img src={mainimg} alt="" className='logo w-40 rounded-full' />
      <div className="menubar">
         <Link className='menuitem' to="/" >Home</Link>
        <Link className='menuitem'to="/gallery" >Gallery</Link>
        <Link className='menuitem' to="/room" >Room</Link>
        <Link className='menuitem' to="/contact" >Contact</Link>
      </div>
      <img src={menu} alt="menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className="mobmenubar" style={{display: showMenu? 'flex':'none'}}>
        <Link className="mobmenuitem" spy={true} to="/" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link className="mobmenuitem" spy={true} to="/gallery" onClick={()=>setShowMenu(false)}>Gallery</Link>
        <Link className="mobmenuitem" spy={true} to="/room" onClick={()=>setShowMenu(false)}>Room</Link>
        <Link className="mobmenuitem" spy={true} to="/contact" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
