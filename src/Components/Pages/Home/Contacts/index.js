import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <div className="antiakiased  bg-gray-800 pt-8 pb-8 ">
        <div className="flex  w-full min-h-screen  justify-center items-center ">
          <div className="flex  flex-col space-y-6  bg-green-600 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden ">
            <div className="flex flex-col space-y-8  justify-between">
              <div>
                <h1 className=" font-bold text-4xl tracking-wide">
                  Contact Us
                </h1>
                <p className=" pt-2 text-white text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil facilis culpa quasi quos minima!
                </p>
              </div>
              <div className=" flex flex-col lg:flex-row">
                <div className="w-1/2">
                  <div className="flex flex-col p-8 space-y-6 text-white">
                    <div className="inline-flex space-x-2 items-center  ">
                      <Link className="mx-2 " to="#" aria-label="Mobile">
                        <svg
                          className="w-5 h-5 text-xl  fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>656676546543</span>
                      </Link>
                    </div>
                    <div className="inline-flex space-x-2 items-center ">
                      <Link className="mx-2 " to="#" aria-label="Twitter">
                        <svg
                          className="w-5 h-5 text-xl  fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>advocate@gmail.com</span>
                      </Link>
                    </div>
                    <div className="inline-flex space-x-2 items-center ">
                      <Link className="mx-2 " to="#" aria-label="Twitter">
                        <svg
                          className="w-5 h-5 text-xl  fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>High court Prayagraj</span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex px-8 mt-10 space-x-4 text-lg ">
                    <div className="inline-flex space-x-2 items-center ">
                      <Link
                        className="mx-2 text-gray-700"
                        to="#"
                        aria-label="Twitter"
                      >
                        <svg
                          className="w-5 h-5 text-white text-xl  fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                        </svg>
                      </Link>
                    </div>
                    <div className="inline-flex space-x-2 items-center ">
                      <Link
                        className="mx-2 text-gray-700"
                        to="#"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-5 h-5 text-white text-xl  fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                        </svg>
                      </Link>
                    </div>
                    <div className="inline-flex space-x-2 items-center ">
                      <Link
                        className="mx-2 text-gray -700"
                        to="#"
                        aria-label="Linkedin"
                      >
                        <svg
                          className="w-5 h-5 text-white text-xl  fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative  mx-auto w-2/3  ">
                  <div className="absolute w-40 h-40 bg-blue-900 rounded-full -right-28 -top-28"></div>
                  <div className="absolute w-40 h-40 bg-blue-900 rounded-full -left-28 -bottom-16"></div>
                  <div className=" relative z-index-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:mt-8">
                    <form action="" className="flex flex-col space-y-4 ">
                      <div>
                        <label htmlFor="" className="text-sm">
                          Your name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="ring-1 ring-green-500 w-full mt-2 rounded-md px-4 py-2 outline-none focus-ring-2 focus-ring-teal-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="text-sm">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="ring-1 ring-green-500 w-full mt-2 rounded-md px-4 py-2 outline-none focus-ring-2 focus-ring-teal-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="text-sm">
                          Message
                        </label>
                        <textarea
                          placeholder="Message"
                          row="4"
                          className="ring-1 ring-green-500 w-full mt-2 rounded-md px-4 py-2 outline-none focus-ring-2 focus-ring-teal-300"
                        />
                      </div>
                      <button className="inline-block self-end bg-green-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
