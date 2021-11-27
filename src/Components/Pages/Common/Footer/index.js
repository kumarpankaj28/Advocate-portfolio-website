import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-100 bg-gray-800">
        <div className="max-w-3xl mx-auto py-6">
          <h1 className="text-center text-lg lg:text-2xl">Let's begain...</h1>
          <div className="flex justify-center mt-6">
            <div className="bg-white rounded-md">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
                  placeholder="Enter your email"
                  area-label="Enter your email"
                />
                <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">
                  Contact me
                </button>
              </div>
            </div>
          </div>
          <hr className="h-px mt-6 bg-gray-700 border-none" />
          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <Link
                to="#"
                className="text-xl font-bold text-gray-100 hover:text-gray-400"
              >
                Advocate Rajiv
              </Link>
            </div>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <Link
                  to="#"
                  className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400"
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400"
                >
                  Blog
                </Link>
                <Link
                  to="#"
                  className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
