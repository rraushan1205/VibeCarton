import React from "react";

function Footer() {
  return (
    <div className="bg-blue-300 w-[100%] h-52 px-10 mt-5 text-justify py-5 cursor-default">
      <article className="flex justify-center mt-5">
        <ul className="flex text-white ">
          <li className="hover:translate-y-[-10px] transition-all duration-[200ms] hover:shadow-[0_18px_18px_-7px_rgba(0,0,0,0.3)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="40"
              height="40"
              enableBackground="new 0 0 100 100"
              viewBox="0 0 100 100"
              id="social"
            >
              <path
                d="M50,0C22.386,0,0,22.386,0,50c0,27.614,22.386,50,50,50c27.614,0,50-22.386,50-50C100,22.386,77.614,0,50,0z M66.764,28.385
	c0,0.745-0.604,1.349-1.348,1.349l-5.779,0.002c-3.984,0-4.713,1.553-4.713,4.611v6.363h10.089c0.358,0,0.702,0.142,0.955,0.396
	c0.253,0.253,0.395,0.596,0.395,0.954l-0.004,10.876c0,0.745-0.604,1.349-1.349,1.349H54.924v27.443
	c0,0.745-0.604,1.349-1.349,1.349H42.322c-0.745,0-1.349-0.604-1.349-1.349V54.284h-8.625c-0.745,0-1.349-0.604-1.349-1.349V42.06
	c0-0.745,0.604-1.35,1.349-1.35h8.625v-7.506c0-9.89,6.228-16.28,15.866-16.28l8.579,0.014c0.744,0.001,1.347,0.605,1.347,1.349
	V28.385z"
              ></path>
            </svg>
          </li>
          
          <li className="hover:translate-y-[-10px] transition-all duration-[200ms] hover:shadow-[0_18px_18px_-7px_rgba(0,0,0,0.3)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              baseProfile="tiny"
              version="1.2"
              viewBox="0 0 24 24"
              id="social"
            >
              <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z"></path>
              <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse>
            </svg>
          </li>
          <li className="hover:translate-y-[-10px] transition-all duration-[200ms] hover:shadow-[0_18px_18px_-7px_rgba(0,0,0,0.3)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="40"
              height="40"
              baseProfile="tiny"
              version="1.2"
              viewBox="0 0 24 24"
              id="social"
            >
              <path d="M18 3H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zM18 19H6c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z"></path>
            </svg>
          </li>
          <li className="hover:translate-y-[-10px] transition-all duration-[200ms] hover:shadow-[0_18px_18px_-7px_rgba(0,0,0,0.3)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" id="twitter" viewBox="0 0 100 100">
  <path fill="#fff" d="M98.488 9.473a42.1 42.1 0 0 1-11.634 3.189A20.078 20.078 0 0 0 95.736 1.5a40.35 40.35 0 0 1-12.8 4.887A20.189 20.189 0 0 0 48.007 20.2a20.79 20.79 0 0 0 .468 4.6A57.15 57.15 0 0 1 6.857 3.681a20.2 20.2 0 0 0 6.2 26.986 19.94 19.94 0 0 1-9.118-2.487v.22a20.284 20.284 0 0 0 16.177 19.841 20.152 20.152 0 0 1-5.294.665A17.853 17.853 0 0 1 11 48.561a20.383 20.383 0 0 0 18.867 14.065 40.57 40.57 0 0 1-25.034 8.612A37.819 37.819 0 0 1 0 70.96a56.843 56.843 0 0 0 30.974 9.061c37.154 0 57.468-30.777 57.468-57.455 0-.893-.031-1.754-.074-2.61a40.28 40.28 0 0 0 10.12-10.483Z"></path>
</svg>
          </li>
        </ul>
      </article>
      <section className="flex justify-center mt-5">
      <ul className="flex items-center gap-10 text-white text-[18px]">
          <li>Dashboard</li>
          <li>Categories</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </section>
      <div className="flex justify-center items-center my-7 flex-col text-white">
        <hr className="h-[1px] border-0 bg-white w-[100%]"/>
        <div className="my-2">©2021 Raushan Raj | All Rights Reserved</div>
      </div>
        
    </div>
  );
}

export default Footer;
