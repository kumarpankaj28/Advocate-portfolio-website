import React from "react";
import img1 from "../../../../Assetes/Images/advocate.jpg";
import img2 from "../../../../Assetes/Images/image1.jpg";
import img3 from "../../../../Assetes/Images/image2.jpg";
import img4 from "../../../../Assetes/Images/image3.jpg";
import img5 from "../../../../Assetes/Images/image4.jpg";
import img6 from "../../../../Assetes/Images/image5.jpg";

export default function index() {
  return (
    <div className=" container ">
      <div className="mx-auto bg-white ">
        <section className=" flex bg-light dark:bg-gray-800">
          <div className="container px-6 py-8 mx-auto">
            <div className="section-title flex lg:flex pt-24 justify-items-center ">
              <h1 className=" md-w-1/2 text-4xl font-bold text-center  pt-4  text- dark:text-gray-400 lg:text-center lg:px-24 uppercase md-w-24 ">
                What can we help you with...
              </h1>
              <p className=" dark:text-gray-400 text-center ml-24 mt-4 text- overflow-hidden dark:text-gray-400 lg:max-w-md ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                nihil sit debitis totam accusantium et ratione ad maiores. Velit
                ex esse, officia deserunt quo id vitae magni ad praesentium,
                voluptates dignissimos non quos? Amet.
              </p>
            </div>
          </div>
        </section>
        {/* --------------Start Card------->>>>> */}
        <section className="grid grid-cols-1 lg:grid-cols-3  mr-8 py-10 gap-24 justify-items-center sm:grid-cols-2 md:w-full">
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full rounded-xl  hover:skew-y-12 transition duration-500 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
              src={img1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full rounded-xl hover:skew-y-12 transition duration-500 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
              src={img2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full rounded-xl hover:skew-y-12 transition duration-500 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
              src={img3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full rounded-xl hover:skew-y-12 transition duration-500 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
              src={img4}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full rounded-xl hover:skew-y-12 transition duration-500 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
              src={img5}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full rounded-xl hover:skew-y-12 transition duration-500 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
              src={img6}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </section>
         {/* --------------End  Card------->>>>> */}
      </div>
    </div>
  );
}
