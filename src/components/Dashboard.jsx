import React from 'react'
import bg from'../../img/dashbg.png';
function Dashboard() {
  return (
    <div>
      <div className="flex justify-between bg-blue-200 ">
       <div className="text-white font-[700] text-[50px] px-10 py-10">
        <p className=''>Sower Your family with</p><span className='text-yellow-200'> Sales offers <br /></span><span className='flex'>on &nbsp;<p className='text-violet-500'>  all Products</p></span>
        <div className="flex justify-around mt-5">
          <button className='text-[25px] bg-yellow-300 rounded-lg py-1 hover px-4'>Offers %</button>
          <button className='text-[25px] bg-green-300 rounded-lg py-1  hoverpx-4'>Shop Now</button>
        </div>
       </div>
      <img src={bg} className='w-fit' alt="" />
      </div>
    </div>
  )
}

export default Dashboard
