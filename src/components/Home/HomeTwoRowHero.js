import React from "react";

const TwoColumnComponent = () => {
  const imageUrlBase = "http://localhost:8080/image/";

  const imageIds = [
    "650a26ee56006f0926ea2bec",
    "650a26ee56006f0926ea2bef",
    "650a26ef56006f0926ea2bf1",
    "650a26ef56006f0926ea2bf3",
    "650a26ef56006f0926ea2bf5",
    "650a26ef56006f0926ea2bf7",
  ];

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
          className="text-xl mb-8 font-semibold tracking-wide text-red-500 hover:text-red-700 underline transition duration-300"
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
      <div className="w-full md:w-2/3 px-2 md:px-40 grid grid-cols-2 gap-12 gap-y-3 pl-25 -pr-10 sm:rotate-0 md:-rotate-8">
        {imageIds.slice(0, 4).map((id, index) => (
          <div
            key={id}
            className="bg-gray-200 rounded-lg mb-4 w-11/12 sm:w-64 sm:h-72 md:w-auto md:h-auto" // Adjusted the width here
          >
            <img
              src={`${imageUrlBase}${id}`}
              alt={`Hi rise ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
        {imageIds.slice(4, 6).map((id, index) => (
          <div
            key={id}
            className="hidden md:block bg-gray-200 rounded-lg mb-6 sm:w-4 sm:h-2 md:w-auto md:h-auto"
          >
            <img
              src={`${imageUrlBase}${id}`}
              alt={`Hi rise ${index + 5}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnComponent;
