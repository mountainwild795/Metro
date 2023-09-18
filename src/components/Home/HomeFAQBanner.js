import React, { useState } from "react";

const FAQBanner = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-primary_black p-6">
      <div className="container flex flex-wrap justify-center mx-auto w-3/4">
        <div className="w-full md:w-1/3 p-2 md:pr-6">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="mb-4 text-gray-300">
            Explore our frequently asked questions to get quick answers to
            common queries about our services.
          </p>
          <p className="mb-4 text-gray-300">
            If you don't find what you're looking for, don't hesitate to reach
            out to our friendly team for personalized assistance.
          </p>
          <a href="/contact-us">
            <button className="text-white px-8 py-2 rounded-lg transition duration-300 hover:opacity-60 bg-primary">
              Contact Us
            </button>
          </a>
        </div>

        <div className="w-full md:w-2/3 p-2 md:pl-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-2 text-gray-300 rounded flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <span className="font-bold">
                  {index === 0
                    ? "What services does Metro NZ offer?"
                    : index === 1
                    ? "How do I switch my property management to Metro NZ?"
                    : index === 2
                    ? "What areas does Metro NZ serve?"
                    : index === 3
                    ? "Do you handle tenant relations and rent collection?"
                    : index === 4
                    ? "What sets Metro NZ apart from other companies?"
                    : index === 5
                    ? "How can I request a property appraisal?"
                    : `Question ${index + 1}`}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                >
                  {">"}
                </span>
              </button>
              <div
                className="overflow-hidden transition-max-height duration-700 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? "100px" : "0",
                }}
              >
                <div className="mt-2 p-2 text-gray-300">
                  {index === 0
                    ? "Metro NZ Property Management provides a range of services including property appraisals, tenant management, property marketing, and maintenance oversight to simplify property ownership and maximize returns."
                    : index === 1
                    ? "Switching to Metro NZ is simple. Contact our team, and we'll guide you through the seamless transition process ensuring minimal disruption to your tenants."
                    : index === 2
                    ? "Metro NZ proudly serves various areas within New Zealand, including Auckland and its surrounding suburbs. We are continually expanding to cater to more regions."
                    : index === 3
                    ? "Absolutely! At Metro NZ, we prioritize establishing strong tenant relationships. We handle all aspects of tenant management, from ensuring timely rent collections to promptly addressing their concerns. Our goal is to provide peace of mind to property owners, knowing that their tenants are well taken care of."
                    : index === 4
                    ? "Metro NZ stands out due to our commitment to excellence and unparalleled customer service. Our team of professionals brings years of industry experience and ensures that every property we manage receives individualized care and attention. We embrace innovation, utilize the latest technology, and are dedicated to delivering results that exceed our clients' expectations."
                    : index === 5
                    ? "To request a property appraisal with Metro NZ, simply visit our website and navigate to the 'Services' section. Alternatively, you can contact our dedicated appraisal team directly via email or phone. We aim to process all appraisal requests promptly, providing you with a comprehensive report to guide your property decisions."
                    : `Answer for question ${index + 1}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQBanner;
