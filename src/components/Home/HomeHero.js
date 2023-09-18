const HeroComponent = () => {
  return (
    <div className="container mx-auto px-6 md:px-64 py-16 text-center">
      <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
        Property Management Auckland
      </h1>

      <p className="text-xl md:text-2xl mb-4 md:mb-8">
        Helping clients to achieve harmony through our expertise and skill.
      </p>

      <a
        href="/properties"
        className="text-white px-6 md:px-16 py-2 md:py-4 mt-2 rounded-lg transition duration-300 hover:opacity-60"
        style={{ backgroundColor: "#E3353B" }}
      >
        Check out our Properties listings
      </a>
    </div>
  );
};

export default HeroComponent;
