const TestimonialBanner = () => {
  const testimonials = [
    "Top-notch service and communication!",
    "The most easy-going property experience.",
    "Always friendly and prompt service.",
    "Reliable and trustworthy always.",
    "They're always there for you.",
    "Helped me find the best property.",
    "Efficient, friendly, and professional!",
    "They truly go the extra mile.",
    "The process was smooth start to finish.",
    "Can't recommend them enough.",
    "Unparalleled knowledge of the property market.",
    "Transparent dealings, no hidden fees.",
    "Always available to provide advice.",
    "They truly care about client needs.",
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        What people say about us
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-reviewsquarecolour m-2 p-6 rounded-md inline-block min-w-64"
          >
            "{testimonial}"
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialBanner;
