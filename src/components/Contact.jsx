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
    <div className="bg-background text-white ">
      <img src="https://strapiprod.knowlarity.com/uploads/contact_us_5a6756504e.jpg" className='w-[100%] mb-10 h-[17rem]' alt="" />
      <div className="flex justify-center flex-col items-center">
      <header className='font-[700] leading-10 text-[24px]'>Let’s Start a Conversation</header>
      
      <p className=''>Ping me here!!</p>
      </div>
      <div className='flex flex-col justify-center'>
        
      <form action="post" className='w-fit self-center text-black'>
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
            <button type="submit" className="bg-slate-900 w-full self-center px-5 py-2 my-4 active:bg-slate-400 rounded" onClick={handleSubmit}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
