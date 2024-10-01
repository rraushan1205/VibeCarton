import React from "react";
import bg from "../../img/girl.png";
import headphones from "../../img/headphones.jpg";
import "./Extra_css.css";
function Dashboard() {
  const topstoriesdata = [
    {
      img: headphones,
      title: "headphones",
    },
    {
      img: "https://example.com/images/img2.jpg",
      title: "Mountain Landscape",
    },
    {
      img: "https://example.com/images/img3.jpg",
      title: "City Lights at Night",
    },
    {
      img: "https://example.com/images/img4.jpg",
      title: "Forest in Autumn",
    },
  ];

  return (
    <div className="bg-background text-white py-10">
      <div className="bg-background py-10">
        <div className="grid grid-cols-2 justify-between pt-10 mx-32 bg-[#424752] rounded-md">
          <div className="text-white font-[700] text-[50px] pl-20 py-10 ">
            <p className="">
              Explore <span className="text-yellow-200">offers</span>
            </p>
            on all<p className="text-violet-500"> Products</p>
            <div className="flex justify-around mt-5">
              <button class="golden-button bg-gradient-to-tr from-[#f5cd49] via-[#b47e11] to-[#fef1a2] hover:bg-[length:150%_150%] transition-all duration-200 ease-in-out shadow-md hover:shadow-lg active:shadow-md text-[#783205] hover:text-[#783205cc] rounded-md px-4 py-2 text-sm uppercase">
                <span class="text-shadow-sm">Offers %</span>
              </button>

              <button class="animated-button relative flex items-center gap-1 bg-green-700 px-9 py-4 border-4 border-transparent text-[16px] rounded-full font-semibold text-[#ffffff] shadow-[0_0_0_2px_#ffffff] cursor-pointer overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-lg hover:text-[#212121] hover:shadow-[0_0_0_12px_transparent] active:scale-95 active:shadow-[0_0_0_4px_greenyellow] h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-2 absolute w-6 fill-[#fff] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] left-[-25%]"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text relative z-[1] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[-12px]">
                  Shop Now
                </span>
                <span class="circle absolute top-1/2 left-1/2 w-5 h-5 bg-[#fcfcfc] rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)]"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-1 absolute w-6 fill-[#fff] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] right-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img src={bg} className="h-[500px]" alt="" />
        </div>
      </div>
      <div className="my-10 py-10 px-10 bg-slate-600  mx-20 rounded-xl">
        <header className="text-[30px]">Trending Stories</header>
        <hr className="bg-[#101114] rounded-2xl w-[500px] h-[5px] border-none" />
        <div className="my-10 mx-10 flex gap-14 justify-center">
          {topstoriesdata.map((item, index) => (
            <div
              key={index}
              className="containers w-[250px] h-[300px] rounded-2xl bg-[#2f3d69] flex flex-col items-center hover:scale-110 justify-center p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h2 className="text-white text-center mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 py-10 px-10 bg-slate-500 mx-20 rounded-xl">
        <header className="text-[30px]">Top offers</header>
        <hr className="bg-[#101114] rounded-2xl w-[500px] h-[5px] border-none" />
        <div className="my-10 mx-10 flex gap-14 justify-center">
          {topstoriesdata.map((item, index) => (
            <div
              key={index}
              className="containers w-[250px] h-[300px] rounded-2xl bg-[#2f3d69] flex flex-col items-center hover:scale-110 justify-center p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h2 className="text-white text-center mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 py-10 px-10 bg-slate-800 mx-20 rounded-xl">
        <header className="text-[30px]">Trending Stories</header>
        <hr className="bg-[#101114] rounded-2xl w-[500px] h-[5px] border-none" />
        <div className="my-10 mx-10 flex gap-14 justify-center">
          {topstoriesdata.map((item, index) => (
            <div
              key={index}
              className="containers w-[250px] h-[300px] rounded-2xl bg-[#2f3d69] flex flex-col items-center hover:scale-110 justify-center p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h2 className="text-white text-center mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 py-5 mt-10 mx-10 border-2 gap-10 border-black rounded-2xl bg-[#7a8396] flex">
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2019/04/10.png"  className="h-24" alt="" />
        <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190851/Louis-Vuitton-1.png" className="h-24"alt="" />
        <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/rolex.png" className="h-24"alt="" />
        <img src="https://marketplace.canva.com/EAFwyRXjJfI/1/0/1600w/canva-clean-elegant-typography-brand-logo-59hSL3onznc.jpg" className="h-24"alt="" />
        <img src="https://www.zarla.com/images/zarla-50-famous-brand-logos-to-inspire-you-5476x3651-20220425.jpeg?crop=2:1,smart&width=730" className="h-24 "alt="" />
        <img src="https://mbluxury1.s3.amazonaws.com/2022/02/25172711/versace.jpg" className="h-24"alt="" />
        <img src="https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d204875959d9c40d1973_MRYbrxnS5S3I1shUjYbg.jpeg" className="h-24"alt="" />
      </div>
      
    </div>
  );
}

export default Dashboard;
