import React, { useState } from "react";
import "./contact.css";

const contect = (handlemiddlware) => {
const [user, setUser] = useState({
  username:"",
  phone:"",
  message:"",
})
const handleInput =(e)=>{
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
  console.log(user)
  try {
    const response = await fetch(`http://localhost:5000/contact`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    const res_data = await response.json();
    console.log(res_data)
    if(response.ok){
      alert("Message sent")
    
    setUser({
      username: "",
      phone: "",
      message: "",
    });
  }
    const handlemiddlware = ()=>{
      setAddmid(res_data);
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="contect">
      <div className="left">
        <h1 className="titlemain">QUESTIONS?</h1>
        <h1 className="titlemain">COMMENTS?</h1>
        <p className="titlemain">
          "We’d love to hear from you! <br />
          Reach out for reservations, special requests, <br />
          or any inquiries about your stay."
        </p>
        <p className="titlemain">
          OUR ADDRESS 
          <br /> JAGESHWAR, ALMORA, UTTARAKHAND
          <br /> NAME:  XXXXXXXXXX
          <br /> PHONE: 844914XXXX
        </p>
      </div>
      <div className="right">
        <form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="Name"></label>
            <input
              className="namediv"
              type="text"
              name="username"
              placeholder="ENTER YOUR NAME"
              id="name"
              required
              autoCapitalize="off"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="phone"></label>
            <input
              className="phonediv"
              type="text"
              name="phone"
              required
              placeholder="ENTER YOUR PHONE NUMBER"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              className="messagediv"
              rows="5"
              cols="48"
              name="message"
              id=""
              required
              placeholder="ENTER YOUR MASSAGE"
              value={user.message}
              onChange={handleInput}
            ></textarea>
          </div>
          <div>
            <button type="submit" id='buton' className="butn">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contect;
