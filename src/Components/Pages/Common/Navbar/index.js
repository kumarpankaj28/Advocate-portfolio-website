import React,{ useState,useEffect } from 'react'
import{Link} from 'react-router-dom'
import { Transition } from "@headlessui/react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
//   } from "react-router-dom";




export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    
    const [stickyClass, setStickyClass] = useState('relative');
      
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 100 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
      }
    };
    
    return (
        <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>
            <nav className="bg-black">
            <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <h1 className="hover:bg-gray-700 py-2 text-white">ADVOCATE</h1>
                    {/* <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                    /> */}
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                        to="/"
                        className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        About
                    </Link>

                    <Link
                        to="/service"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Service
                    </Link>

                    <Link
                        to="/blog"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Blog
                    </Link>

                    <Link
                        to="/contact"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Contact
                    </Link>
                    </div>
                </div>
                </div>
                <button className="bg-white hover:bg-green-500 text-gray-800 font-semibold py-2 px-4 border border-green-500 rounded-full shadow hidden md:block">+91 9898989898</button>
                <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                    ):(
                    <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                    )}
                </button>
                </div>
            </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"    
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
          {(ref) => (
            <div className="md:hidden " id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center justify-between">
                <Link
                to=""
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Home
                </Link>

                <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                About
                </Link>

                <Link
                to="/service"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Service
                </Link>

                <Link
                to="/blog"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Blog
                </Link>

                <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Contact
                </Link>
            </div>
            </div>
          )}
          </Transition>
        </nav>
      </div>
    );
};
