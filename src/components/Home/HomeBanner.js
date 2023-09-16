const HomeBanner = () => {
  return (
    <div className="bg-primary_black text-white px-8 py-16 flex flex-col justify-center items-center space-y-12 relative -mb-16 z-20">
      <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full max-w-screen-xl justify-center items-center">
        <div className="flex flex-col gap-6 text-justify">
          <p className="text-2xl">How we can help</p>
          <p className="text-5xl">Our Services</p>
        </div>
        <div className="ml-auto sm:block ml-10 max-w-xl text-justify leading-relaxed">
          <p>
            Welcome to Metro NZ – your one-stop solution for property
            management. Explore our offerings tailored to your needs, from
            appraisals to rental property listings.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 w-full justify-center items-center">
        <div className="bg-white w-80 h-80 p-8 rounded-md flex flex-col items-center justify-center">
          <p className="text-4xl text-red-500 font-semibold">
            Comprehensive Property Appraisal
          </p>
          <p className="text-xl text-black mt-4">
            Accurate property assessments for smarter rent decisions.
          </p>
        </div>

        <div className="bg-white w-80 h-80 p-8 rounded-md flex flex-col items-center justify-center">
          <p className="text-4xl text-red-500 font-semibold">
            Our Property Listings
          </p>
          <p className="text-xl text-black mt-4">
            Discover our top-notch properties across Auckland. Find your next
            home with Metro NZ.
          </p>
        </div>

        <div className="bg-white w-80 h-80 p-8 rounded-md flex flex-col items-center justify-center">
          <p className="text-4xl text-red-500 font-semibold">
            Tailored Services
          </p>
          <p className="text-xl text-black mt-4">
            We offer specialized services for discounted tenanted property sales
            and expert renovation management.
          </p>
        </div>

        <div className="bg-white w-80 h-80 p-8 rounded-md flex flex-col items-center justify-center">
          <p className="text-4xl text-red-500 font-semibold">
            Switch to Metro NZ
          </p>
          <p className="text-xl text-black mt-4">
            Enjoy the benefits of our people-focused approach and our strong
            reputation in property management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
