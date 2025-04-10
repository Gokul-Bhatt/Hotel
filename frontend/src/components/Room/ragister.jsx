import React, { useState } from 'react'
import "./room.css"

const ragister = (handlemiddlware) => {
  const [user, setUser] = useState({
    username:"",
    phone:"",
    bed:"",
    checkin:"",
    checkout:"",
  })

  const handelInput = (e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };
  const handlesubmit = async(e)=>{
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`https://hotel-2-fkkj.onrender.com/register`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log(res_data)
      if(response.ok){
        alert("Room is Booked")
      
      setUser({
        username:"",
        phone:"",
        bed:"",
        checkin:"",
        checkout:""
      })
    }
      const handlemiddlware = ()=>{
        setAddmid(res_data);
      }
    } catch (error) {
      console.log(error)
    }
  }
    return (
    <div className='ragister'>
        <div className="head">
      <h1 className='title'>Fill The Form To Book The Room</h1>
      </div>
      <div className="item1">
      <form onSubmit={handlesubmit}>
        <div className='item11'>
          <label htmlFor="Name"></label>
          <input
            type='text'
            name='username'
            placeholder='NAME'
            id='Name'
            required
            autoCapitalize='off'
            value={user.username}
            onChange={handelInput}
          />
        </div>
        <div className='item11'>
          <label htmlFor="phone"></label>
          <input
            type='text'
            name='phone'
            placeholder='PHONE'
            id='phone'
            required
            autoCapitalize='off'
            value={user.phone}
            onChange={handelInput}
          />
        </div>
        <div className='item11'>
          <label htmlFor="bed"></label>
          <input
            type='number'
            name='bed'
            placeholder='BED NEED 1,2'
            id='bed'
            required
            autoCapitalize='off'
            value={user.bed}
            onChange={handelInput}
          />
        </div>
        <div className='item11'>
          <label htmlFor="checkin" className='check'> CHECK IN </label>
          <input
            type='date'
            name='checkin'
            placeholder='CHECK IN'
            id='checkin'
            required
            autoCapitalize='off'
            value={user.checkin}
            onChange={handelInput}
          />
        </div>
        <div className='item11'>
          <label htmlFor="checkout" className='check'>CHECKOUT </label>
          <input
            type='date'
            name='checkout'
            placeholder='CHECKOUT'
            id='checkout'
            required
            autoCapitalize='off'
            value={user.checkout}
            onChange={handelInput}
          />
        </div>
        <div className="item11">
        <button type='submit' id='butn' className='butn' onClick={()=>{massage()}}>
          BOOK NOW
        </button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default ragister
