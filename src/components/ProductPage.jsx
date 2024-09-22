import React from "react";

function ProductPage() {
  return (
    <div className="my-10 mx-10">
      <hr className="w-[100%] h-[2px] bg-blue-300" />
      <div className="grid grid-cols-2">
        <div className="fl static">
          <div className="flex mt-10">
            <div className="mx-5 my-5 ">
              <ul>
                <li className="border-[1px] border-gray-700 mx-1 w-[80px] h-[80px] my-1">
                  <img
                    src="https://media.istockphoto.com/id/1368962284/vector/can-of-condensed-tomato-soup-vector-flat-color-illustration.jpg?s=612x612&w=0&k=20&c=9kVq_-mpthvv201nWJkFsrXNCEr4oAP_IWfqRm0SDak="
                    alt=""
                    className=""
                  />
                </li>
                <li className="border-[1px] border-gray-700 mx-1 w-[80px] h-[80px] my-1">
                  <img
                    src="https://media.istockphoto.com/id/1368962284/vector/can-of-condensed-tomato-soup-vector-flat-color-illustration.jpg?s=612x612&w=0&k=20&c=9kVq_-mpthvv201nWJkFsrXNCEr4oAP_IWfqRm0SDak="
                    alt=""
                    className=""
                  />
                </li>
                <li className="border-[1px] border-gray-700 mx-1 w-[80px] h-[80px] my-1">
                  <img
                    src="https://media.istockphoto.com/id/1368962284/vector/can-of-condensed-tomato-soup-vector-flat-color-illustration.jpg?s=612x612&w=0&k=20&c=9kVq_-mpthvv201nWJkFsrXNCEr4oAP_IWfqRm0SDak="
                    alt=""
                    className=""
                  />
                </li>
              </ul>
            </div>
            <div className="mx-5 my-5 border-[1px] border-black">
              <img
                src="https://media.istockphoto.com/id/1368962284/vector/can-of-condensed-tomato-soup-vector-flat-color-illustration.jpg?s=612x612&w=0&k=20&c=9kVq_-mpthvv201nWJkFsrXNCEr4oAP_IWfqRm0SDak="
                alt=""
                className="mix-blend-multiply aspect-[1/1] object-contain	"
              />
            </div>
          </div>
          <div className="buttons flex justify-center">
            <button className="bg-stone-600 text-white px-5 py-2 mx-5 text-[22px] hover:opacity-80">
              Add to cart
            </button>
            <button className="bg-green-500 text-white px-5 py-2 mx-5 text-[22px] hover:opacity-80">
              Buy Now
            </button>
          </div>
        </div>
        <div className="my-10 mx-5 px-5 border-l-[1px] border-black">
          <div className="text-gray-400">
            Home &gt; Categories &gt; Beverages
          </div>
          <header className="text-[23px]">Tomato Soup (250 ml) Can</header>
          <section className="text-gray-400">200 Ratings & 300 Reviews</section>
          <div className="price text-[30px] font-[600]">
            <span>₹</span>
            <span>199</span>
            <span className="line-through text-[18px] font-[400] ml-2 text-gray-400">
              ₹
            </span>
            <span className="line-through text-[18px] font-[400] text-gray-400">
              250
            </span>
            <span className="ml-5 text-green-600 text-[16px] font-[400]">59% off</span>
          </div>
          <div className="flex flex-col mt-5">
            <span className="text-[18px] font-[600]">Coupons for you</span>
            <span className="flex"><img src="https://rukminim2.flixcart.com/www/36/36/promos/30/07/2019/79f48e86-8a93-46ab-b45a-5a12df491941.png?q=90" width="28" height="18" /> <span className="text-[18px] font-[600]">Partner Offer &nbsp; </span> Buy this & get upto ₹100 off &nbsp;  <span className="text-blue-900">Know More</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
