import React from "react";
import Client1 from "../../assets/client1.png";
import Client4 from "../../assets/client4.png";
import Client5 from "../../assets/client5.png";

const OurClients = () => {
  return (
    <div id="client" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-lg text-gray-700 mb-8">
            See what our clients have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
        <div className="justify-center">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={Client1}
          alt="Client 1"
        />
        <div className="z-10 bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            "As a business owner, finding the right commercial space was crucial. Tejz Properties not only found me a great location but also negotiated a fantastic deal. They truly go above and beyond for their clients!"
          </p>
          <p className="text-gray-500">Ravi D, Business Owner</p>
        </div>
      </div>
      <div className="justify-center">
      <img
        className="w-24 h-24 object-cover rounded-full"
        src={Client4}
        alt="Client 1"
      />
      <div className="z-10 bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          "I was looking for a solid investment opportunity, and Tejz Properties helped me secure a high-yield rental property. Their market knowledge and strategic insights were invaluable. Highly recommended!"
        </p>
        <p className="text-gray-500">Simran S, Real-Estate Investor</p>
      </div>
    </div>
    <div className="justify-center">
    <img
      className="w-24 h-24 object-cover rounded-full"
      src={Client5}
      alt="Client 1"
    />
    <div className="z-10 bg-white p-8 rounded-lg shadow-md">
      <p className="text-lg text-gray-700 mb-4">
        "Tejz Properties made my home-buying journey smooth and hassle-free. They found me the perfect dream home without any delays. Their professionalism and dedication is unmatched!"
      </p>
      <p className="text-gray-500">Aman K, First-Time Homebuyer</p>
    </div>
  </div>
  </div>
  </div>
</div>
  );
};

export default OurClients;
















