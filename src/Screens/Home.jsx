import React from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import FoodList from "./FoodList";

export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div><Carousel/></div>
      <div className="m-3 col-3">

      
      <FoodList/>


      </div>
    

      <div>
        <Footer />
      </div>
    </div>
  );
}
