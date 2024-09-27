import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
    console.log("Name:", name, "Email:", email, "Contact:", number, "Message: ", message);
  };
  return (
    <div className=' '>
      <img src="https://strapiprod.knowlarity.com/uploads/contact_us_5a6756504e.jpg" className='w-[100%] h-[17rem]' alt="" />
      <div className="flex justify-center ">
      <header className='font-[700] leading-10 text-[24px]'>Let’s Start a Conversation</header>
      </div>
      <div className='flex flex-col justify-center'>
        
      <form action="post" className='w-fit self-center'>
          <div className="flex flex-col mx-8 my-5 gap-3 w-[300px]">

            <input
              type="Name"
              className="border-[1px] py-1 px-2 rounded border-black outline-none placeholder:text-[14px]"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="border-[1px] py-1 px-2 rounded border-black outline-none placeholder:text-[14px]"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="border-[1px] py-1 px-2 rounded border-black outline-none placeholder:text-[14px]"
              placeholder="Contact"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              className="border-[1px] py-1 px-2 rounded border-black outline-none placeholder:text-[14px]"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="bg-slate-200 w-fit self-center px-5 py-1 my-4 active:bg-slate-400 rounded" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
