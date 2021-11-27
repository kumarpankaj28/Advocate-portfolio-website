import React from "react";
import img1 from "../../../Assetes/Images/image7.jpg";
import img2 from "../../../Assetes/Images/image5.jpg";

export default function index() {
  return (
    <div>
      <section>
        <div className="relative">
          <img
            className=" w-full h-96 object-cover rounded-md shadow-xl"
            src={img2}
            alt="Do not match img"
          />
          <div className="absolute top-4 left-80 overlaytwo h-96 flex flex-col item-center justify-center ">
            <h1 className=" z-40 text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56 text-green-500">
              ABOUT ME
            </h1>
          </div>
        </div>
        <div className="flex flex-col mt-20 ">
          <div className=" dark:bg-gray-800   ">
            <div className=" justify-between lg:flex ">
              <div className="mx-auto ">
                <div className="max-w-lg">
                  <img
                    className="w-full h-full rounded-md shadow-xl"
                    src={img1}
                    alt="Do not match img"
                  />
                </div>
              </div>
              <div className="lg:w-1/2  ">
                <h2 className=" text-3xl font-bold text-black  dark:text-gray-100">
                  About
                </h2>
                <p className="mt-4 text-black  dark:text-gray-400 px-16 md:text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi, mollitia tempora. Unde voluptates iure cum beatae est
                  architecto impedit consequatur, eius eaque fuga sed porro iste
                  dolores enim ea tenetur voluptatum placeat repudiandae tempora
                  rem, debitis, ab magnam. Beatae soluta ipsa eveniet rem neque
                  nihil nulla aperiam eius quos saepe, repudiandae officia iste
                  fugit modi quidem exercitationem expedita maxime sequi? Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                  perferendis architecto officiis quasi sapiente optio,
                  repellendus quaerat labore, dolores esse consectetur tempore
                  atque nisi dolorem nihil voluptatibus neque amet recusandae.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-20 ">
            <div className="bg-light dark:bg-gray-800 object-right  ml-auto bg-gray-200 h-full">
              <div className="container  px-6 py-4 mx-auto ">
                <div className=" items-center  lg:flex  text-justify">
                  <div className="container lg:ml-24 lg:w-1/2  ">
                    <h2 className="ml-24 text-3xl font-bold text-black  dark:text-gray-100 md:ml-0 ">
                      This is a About page
                    </h2>
                    <p className="  mt-4 text-black  dark:text-gray-400 lg:max-w-md md:text-justify  ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Commodi, mollitia tempora. Unde voluptates iure cum beatae
                      est architecto impedit consequatur, eius eaque fuga sed
                      porro iste dolores enim ea tenetur voluptatum placeat
                      repudiandae tempora rem, debitis, ab magnam. Beatae soluta
                      ipsa eveniet rem neque nihil nulla aperiam eius quos
                      saepe, repudiandae officia iste fugit modi quidem
                      exercitationem expedita maxime sequi? Lorem, ipsum dolor
                      sit amet consectetur adipisicing elit. Dignissimos
                      perferendis architecto officiis quasi sapiente optio,
                      repellendus quaerat labore, dolores esse consectetur
                      tempore atque nisi dolorem nihil voluptatibus neque amet
                      recusandae.
                    </p>
                  </div>
                  <div className="mt-8 lg:mt-0 lg:w-1/2 p-24">
                    <div className="flex items-center justify-items-center lg:justify-end">
                      <div className="max-w-lg">
                        <img
                          className="object-cover object-center w-full h-full rounded-md shadow-xl"
                          src={img2}
                          alt="Do not match img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
