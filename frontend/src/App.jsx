import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import Index from "./components/Home/index.jsx"
import Navbar from "./components/Navbar/Navbar.jsx";
import Contect from './components/Contact/contact.jsx';
import Room from './components/Room/room.jsx';
import Ragister from './components/Room/ragister.jsx';
import Gallery from './components/Gallery/gallery.jsx';
import Admin from './components/Layouts/adminlayout.jsx';
import AdminUser from './components/Layouts/AdminUser.jsx';
import Admincontact from './components/Layouts/admincontact.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/contact' element={<Contect/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/room' element={<Room/>}/>
            <Route path='/ragister' element={<Ragister/>}/>
            <Route path='/admin' element={<Admin/>}>
              <Route path='/admin/user' element={<AdminUser/>}/>
              <Route path='/admin/contact' element={<Admincontact/>}/>
            </Route> 
          </Routes>
      </BrowserRouter>

      </div>
  )
}

export default App

