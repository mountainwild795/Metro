import React, { useState, useEffect } from "react";

const TwoColumnComponent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/housequeries") // Adjust this URL if your backend isn't running on the same domain/port
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12 flex flex-wrap justify-center items-center min-h-screen">
      {/* Text Column */}
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 text-center md:text-left md:pr-12">
        <h2 className="text-2xl font-bold mb-20 tracking-wider">
          Working With Landlords, Tenants, Building Owners And Property
          Investors
        </h2>
        <a
          href="/your-link-path"
          className="text-2xl mb-8 font-semibold tracking-wide text-blue-500 hover:text-blue-700 underline transition duration-300"
        >
          Check out our property listings
        </a>
        <h4 className="text-xl mb-10 font-medium tracking-wide">
          Latest Property Listings
        </h4>
        <p className="text-lg mb-6 leading-relaxed">
          Find your ideal property in Auckland, around New Zealand and the
          world. We have lots of properties available to rent! You can find your
          dream rental home and have the opportunity to have the best property
          manager with us. Jump in quick, these properties are going fast.
        </p>
        <h4 className="text-xl mb-3 font-medium tracking-wide">
          Easily Change to Metro NZ Property Management
        </h4>
        <p className="text-lg leading-relaxed">
          Switching to Metro NZ Properties is seamless and free, even for
          multiple properties. Complete the contact form or call us for a smooth
          transition with minimal disruption. We simplify property management
          for owners and respect tenants, crucial for our clients' success.
        </p>
      </div>

      {/* Image Column with 10-degree rotation */}
      <div className="w-full md:w-2/3 px-4 grid grid-cols-2 gap-4 gap-y-4 pl-20 pr-20 sm:rotate-0 md:-rotate-8">
        {/* Left Column Images */}
        <div className="left-images-col mt-11 pl-10">
          {properties.slice(0, 3).map((property) => (
            <div
              key={property.id}
              className="bg-gray-200 rounded-lg mb-4 sm:w-64 sm:h-72 md:w-auto md:h-auto"
            >
              <img
                src={property.imageLg}
                alt={property.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Right Column Images */}
        <div className="right-images-col mt-3 pl-10">
          {properties.slice(3, 6).map((property) => (
            <div
              key={property.id}
              className="bg-gray-200 rounded-lg mb-4 sm:w-64 sm:h-72 md:w-auto md:h-auto"
            >
              <img
                src={property.imageLg}
                alt={property.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
