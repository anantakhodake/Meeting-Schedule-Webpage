import React from "react";
import "./Navbar.css";
import fibrelogo from "../img/fibrelogo.png";
function Navbar() {
  return (
    <div className="flex justify-between items-center nav-wrapper">
      {/* logo here and links here */}
      <div className=" flex items-center gap-2 ">
        <img className="h-20" src={fibrelogo} />
        <ul className="list-none flex list-left justify-around font-bold ">
          <li>
            <a href="">Solution</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">...</a>
          </li>
        </ul>
      </div>
      {/* for buttons */}
      <div className="navbtn_wrapper flex items-center gap-5">
        <button className="btn1 font-semibold ">Log In</button>
        <button className="btn2 text-xl font-semibold">Get a Demo</button>
        <button className="btn2 text-white bg-black font-semibold text-xl font-sans">
          Try for free
        </button>
      </div>
    </div>
  );
}

export default Navbar;
