import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="h-14 w-[100%] bg-background flex justify-between px-10 cursor-default">
      <header className="text-[26px] text-white">🆅🅸🅱🅴🅲🅰🆁🆃🅾🅽</header>
      <div className="searchbar text-[14px] text-gray-400  flex items-center relative">
      <button type="submit" className="active:text-blue-800 absolute left-[5px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <input
          type="text"
          className="w-[350px] py-1 px-9 focus:outline-0 h-[35px]"
          placeholder="Type heree....."
        />
        
      </div>
        <ul className="flex justify-around items-center gap-10 text-white text-[18px]">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/categories">Categories</Link></li> 
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="bg-[#151B26] hover:bg-[#151b267e] active:bg-[#040c1a] py-1 px-2 rounded-xl"><Link to="/login">Login/SignUp</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;
