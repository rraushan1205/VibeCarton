import React from 'react'
import headphones from "../../img/headphones.jpg";
function Categories() {
  const categoriesdata = [
    {
      img: headphones,
      category: "headphones",
    },
    {
      img: "https://example.com/images/img2.jpg",
      category: "Mountain Landscape",
    },
    {
      img: "https://example.com/images/img3.jpg",
      category: "City Lights at Night",
    },
    {
      img: "https://example.com/images/img4.jpg",
      category: "Forest in Autumn",
    },
  ];
  return (
    <div className='bg-background '>
      <div className='py-10 px-32'>
      <header className='text-white text-[30px]'>Categories</header>
      <hr className="bg-[#101114] rounded-2xl w-[100px] h-[5px] border-none" />
      <div className="my-10 mx-10 flex gap-14 justify-center">
          {categoriesdata.map((item, index) => (
            <div
              key={index}
              className="containers w-[250px] h-[300px] rounded-2xl bg-[#2f3d69] flex flex-col items-center hover:scale-110 justify-center p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h2 className="text-white text-center mt-3">{item.category}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
