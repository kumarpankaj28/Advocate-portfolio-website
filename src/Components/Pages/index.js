import React,{useState,useEffect} from "react";
import "../../App.css";
import Home from "./Home/Home";
import Navbar from "./Common/Navbar";
import Error from "./Error";
import Footer from "./Common/Footer";
import AboutUs from "./AboutUs";

export default function Pages() {


  return (
    <div>
        
      <Navbar />
    
      <Home />
      <AboutUs />
      <Error />
      <Footer />
    </div>
  );
}
