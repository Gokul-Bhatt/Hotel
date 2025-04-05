import React from "react";
import "./home.css";
import icon from "../assets/mainimg.jpeg";
import Insta from "../assets/insta.jpg";
import Fb from "../assets/fb.png"

const footer = () => {
  return (
    <div className="footers">
      <div className="footerabout">
        <img src={icon} alt="" className="iconn"/>
        <p className="twoline">
          Jageshwar Inn – Your Comfort Stay in the Heart of Jageshwar Experience
          peace, nature, and heritage just steps away from the sacred Jageshwar
          temples. Book your stay today and feel at home amidst the Himalayas.
        </p>
        <div className="igfbcl">
        <a href="https://www.instagram.com/"><img src={Insta} alt="" className="igfb"/></a>
        <a href="https://www.facebook.com/"><img src={Fb} alt=""  className="igfb"/></a>
        </div>
      </div>
      <div className="footercontact">
        <h1>OUR LOCATION</h1>
        <p>Hotel Jageshwar In , Jageshwar, Almora-263623</p>
        <p>book@gmail.com</p>
        <p>9898989898</p>
      </div>
      <div className="lastfooter">
        @2025 Hotel Jageshwar In, Jageshwar, Almora-263623
      </div>
    </div>
  );
};

export default footer;
