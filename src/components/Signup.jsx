import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
function Signup() {
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log("uname:", uname, "Email:", email, "Password:", password);
      setUname("");
      setEmail("");
      setPassword("");
    };
    return (
      <div className="flex bg-stone-100 justify-center items- h-[100%]">
        <div className="bg-background py-10 px-10 rounded-xl my-20 flex flex-col scale-120">
          <header className="mt-5 self-center text-[1.5rem] font-[600]">Signup</header>
          <form action="post">
            <div className="flex flex-col mx-8 my-5 gap-3">
              <input
                type="name"
                className="border-b-[1px] border-black outline-none placeholder:text-[14px] px-2 h-8"
                placeholder="username"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
              <input
                type="email"
                className="border-b-[1px] border-black outline-none placeholder:text-[14px] px-2 h-8"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="border-b-[1px] border-black outline-none placeholder:text-[14px] px-2 h-8"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="bg-blue-900 text-white active:w-fit transition-all w-full self-center px-5 py-1 my-4 active:bg-blue-700	 rounded" onClick={handleSubmit}>Signup</button>
            </div>
          </form>
          <p className="self-center">Already have an account?</p>
          <Link to="/login" className="self-center mb-5 text-blue-900 font-bold">Login</Link>
        </div>
      </div>
    );
  }
  

export default Signup
