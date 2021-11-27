import React,{useState,useEffect} from "react";
import "../../App.css";
import Home from "./Home/Home";
import Navbar from "./Common/Navbar";
import Error from "./Error";
import Footer from "./Common/Footer";
import AboutUs from "./AboutUs";

export default function Pages() {

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
    <div>
        <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>
      <Navbar />
      </div>
      <Home />
      <AboutUs />
      <Error />
      <Footer />
    </div>
  );
}
