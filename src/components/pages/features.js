import React, { useState } from "react";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";

const Features = () => {
  const [properties, setProperties] = useState([
    { id: 1, img: Imagee, name: "23 Advance Blvd", details: "3 bd | 2 ba | 1,500 sqft", price: "$800,000", description: "A cozy retreat with modern finishes and a large backyard." },
    { id: 2, img: Imageee, name: "123 Mayfield Road", details: "4 bd | 3 ba | 2,000 sqft", price: "$950,000", description: "Spacious family home with an open-concept kitchen." },
    { id: 3, img: Imageeee, name: "58 Maple Ave", details: "2 bd | 1 ba | 1,000 sqft", price: "$550,000", description: "Perfect starter home in a quiet neighborhood." },
  ]);

  const [newProperty, setNewProperty] = useState({ name: "", details: "", price: "", img: "", description: "" });
  const [selectedProperty, setSelectedProperty] = useState(null);

  const addProperty = (e) => {
    e.preventDefault();
    if (newProperty.name && newProperty.details && newProperty.price) {
      setProperties([...properties, { id: Date.now(), img: newProperty.img || Imagee, ...newProperty }]);
      setNewProperty({ name: "", details: "", price: "", img: "", description: "" });
    }
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter((p) => p.id !== id));
  };

  const updateProperty = (id, field, value) => {
    setProperties(properties.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const showDetails = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div id="feature" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Feature <span className="text-amber-800">Properties</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">Here are some of our featured properties:</p>

        {/* Add New Listing Form */}
        <form onSubmit={addProperty} className="mb-8 flex flex-col gap-4">
          <input type="text" placeholder="Property Name" value={newProperty.name} onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })} className="px-4 py-2 border rounded-md" />
          <input type="text" placeholder="Details (e.g., 3 bd | 2 ba | 1,500 sqft)" value={newProperty.details} onChange={(e) => setNewProperty({ ...newProperty, details: e.target.value })} className="px-4 py-2 border rounded-md" />
          <input type="text" placeholder="Price (e.g., $800,000)" value={newProperty.price} onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })} className="px-4 py-2 border rounded-md" />
          <input type="url" placeholder="Image URL (optional)" value={newProperty.img} onChange={(e) => setNewProperty({ ...newProperty, img: e.target.value })} className="px-4 py-2 border rounded-md" />
          <textarea placeholder="Description" value={newProperty.description} onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })} className="px-4 py-2 border rounded-md" rows="3" />
          <button type="submit" className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">Add Property</button>
        </form>

        {/* Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <div className="bg-white rounded-lg shadow-lg">
                <img src={property.img} alt={property.name} className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                <div className="py-6 px-4">
                  <h3 contentEditable suppressContentEditableWarning onBlur={(e) => updateProperty(property.id, "name", e.target.textContent)} className="text-lg font-medium text-gray-900">
                    {property.name}
                  </h3>
                  <p contentEditable suppressContentEditableWarning onBlur={(e) => updateProperty(property.id, "details", e.target.textContent)} className="text-sm text-gray-500">
                    {property.details}
                  </p>
                  <p contentEditable suppressContentEditableWarning onBlur={(e) => updateProperty(property.id, "price", e.target.textContent)} className="text-lg font-bold text-gray-700 mt-4">
                    {property.price}
                  </p>
                  <button onClick={() => showDetails(property)} className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">View Details</button>
                  <button onClick={() => deleteProperty(property.id)} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{selectedProperty.name}</h3>
              <p className="text-gray-700 mb-4">{selectedProperty.description}</p>
              <button onClick={closeModal} className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
