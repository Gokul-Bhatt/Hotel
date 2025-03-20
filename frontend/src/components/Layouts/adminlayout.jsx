import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import { FaHome, FaUser } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6';
import "./adminlayout.css";

const adminlayout = () => {
    return (
        <>
       <header>
        <div className="container">
          <nav>
            <ul className='menu'>
            {/* <Link to="/admin"><FaHome/>home</Link>
            <Link to="/admin/users"><FaUser/>user</Link>
            <Link to="/admin/contact"><FaMessage/>contact</Link> */}
            <Link to="/admin"><FaHome/>home</Link>
            <Link to="/admin/user"><FaUser/>user</Link>
            <Link to="/admin/contact"><FaMessage/>contact</Link>
            </ul>
          </nav>
        </div>
       </header>
       <Outlet/>
       </>
      )
}

export default adminlayout
