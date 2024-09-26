import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Email:", email, "Password:", password);
  };
  return (
    <div className="flex bg-stone-100 justify-center items- h-[100%]">
      <div className="bg-white my-20 flex flex-col scale-120">
        <header className="mt-5 self-center text-[1.5rem] font-[600]">Login</header>
        <form action="post">
          <div className="flex flex-col mx-8 my-5 gap-3">
            <input
              type="email"
              className="border-b-[1px] border-black outline-none placeholder:text-[14px]"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border-b-[1px] border-black outline-none placeholder:text-[14px]"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-slate-200 w-fit self-center px-5 py-1 my-4 active:bg-slate-400 rounded" onClick={handleSubmit}>Login</button>
          </div>
        </form>
        <p className="self-center">Don't Have an account?</p>
        <Link to="/vibecarton/signup" className="self-center mb-5 text-blue-900 font-bold">SignUp</Link>
      </div>
    </div>
  );
}

export default Login;
