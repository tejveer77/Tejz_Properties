import React, { useState } from "react";
import PropertyImage1 from "../../assets/6.png";
import PropertyImage2 from "../../assets/7.png";
import PropertyImage3 from "../../assets/8.png";

const SaleProperties = () => {
  const [properties, setProperties] = useState([
    { id: 1, img: PropertyImage1, name: "88 HumberLine Drive", details: "3 bd | 2 ba | 1,500 sqft", originalPrice: "$900,000", salePrice: "$825,000", description: "Modern home with a discounted price—perfect for families." },
    { id: 2, img: PropertyImage2, name: "93 Finch Ave", details: "4 bd | 3 ba | 2,000 sqft", originalPrice: "$1,100,000", salePrice: "$950,000", description: "Luxury villa on sale—great investment opportunity." },
    { id: 3, img: PropertyImage3, name: "64 CottonCloud Street", details: "2 bd | 1 ba | 1,000 sqft", originalPrice: "$600,000", salePrice: "$500,000", description: "Affordable starter home with charm." },
  ]);

  const [newProperty, setNewProperty] = useState({ name: "", details: "", originalPrice: "", salePrice: "", img: "", description: "" });
  const [selectedProperty, setSelectedProperty] = useState(null);

  const addProperty = (e) => {
    e.preventDefault();
    if (newProperty.name && newProperty.details && newProperty.salePrice) {
      setProperties([...properties, { id: Date.now(), img: newProperty.img || PropertyImage1, ...newProperty }]);
      setNewProperty({ name: "", details: "", originalPrice: "", salePrice: "", img: "", description: "" });
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
    <div id="sale" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          On Sale <span className="text-amber-800">Properties</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We offer a wide selection of on-sale properties that cater to different preferences and budgets. Here are some of our featured properties:
        </p>

        {/* Add New Listing Form */}
        <form onSubmit={addProperty} className="mb-8 flex flex-col gap-4">
          <input type="text" placeholder="Property Name" value={newProperty.name} onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })} className="px-4 py-2 border rounded-md" />
          <input type="text" placeholder="Details (e.g., 3 bd | 2 ba | 1,500 sqft)" value={newProperty.details} onChange={(e) => setNewProperty({ ...newProperty, details: e.target.value })} className="px-4 py-2 border rounded-md" />
          <input type="text" placeholder="Original Price (e.g., $900,000)" value={newProperty.originalPrice} onChange={(e) => setNewProperty({ ...newProperty, originalPrice: e.target.value })} className="px-4 py-2 border rounded-md" />
          <input type="text" placeholder="Sale Price (e.g., $825,000)" value={newProperty.salePrice} onChange={(e) => setNewProperty({ ...newProperty, salePrice: e.target.value })} className="px-4 py-2 border rounded-md" />
          <input type="url" placeholder="Image URL (optional)" value={newProperty.img} onChange={(e) => setNewProperty({ ...newProperty, img: e.target.value })} className="px-4 py-2 border rounded-md" />
          <textarea placeholder="Description" value={newProperty.description} onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })} className="px-4 py-2 border rounded-md" rows="3" />
          <button type="submit" className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">Add Property</button>
        </form>

        {/* Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="hover:shadow-md hover:shadow-[#040c16]">
              <div className="bg-white rounded-lg shadow-lg">
                <img src={property.img} alt={property.name} className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                <div className="py-6 px-4">
                  <h3 contentEditable suppressContentEditableWarning onBlur={(e) => updateProperty(property.id, "name", e.target.textContent)} className="text-lg font-medium text-gray-900">
                    {property.name}
                  </h3>
                  <p contentEditable suppressContentEditableWarning onBlur={(e) => updateProperty(property.id, "details", e.target.textContent)} className="text-sm text-gray-500">
                    {property.details}
                  </p>
                  <p contentEditable suppressContentEditableWarning onBlur={(e) => updateProperty(property.id, "salePrice", e.target.textContent)} className="text-lg font-bold text-gray-700 mt-4">
                    <del>{property.originalPrice}</del> On Sale Now: {property.salePrice}
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

export default SaleProperties;
