import React from "react";
import Image from "../../assets/4.png";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-amber-800">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
          Tejz Properties is a dynamic real estate company dedicated to providing top-tier real estate solutions with integrity, transparency, and professionalism. Our mission is to connect buyers, sellers, and investors with the best real estate opportunities tailored to their needs.
            <br/>
            <br/>
            At Tejz Properties, we believe that real estate is more than just buying and selling properties—it’s about building dreams, creating opportunities, and delivering exceptional value. Whether you're looking for your dream home, an investment property, or a commercial space to grow your business, we are committed to guiding you through every step of the journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
































