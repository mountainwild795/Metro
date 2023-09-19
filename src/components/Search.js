import React, { useRef, useContext } from "react";
import { HouseContext } from "../contexts/HouseContext";

const Search = () => {
  const nameRef = useRef();
  const countryRef = useRef();
  const addressRef = useRef();
  const { searchedHouses } = useContext(HouseContext);
  const handleSearch = () => {
    const params = {
      name: nameRef.current.value,
      country: countryRef.current.value,
      address: addressRef.current.value,
    };
    searchedHouses(params);
  };
  return (
    <div className="bg-primary_black text-white px-20 py-16 flex flex-col justify-center">
      <div className="flex flex-col gap-6 mb-12">
        <p>Let's find your next home</p>
        <p className="text-xl">Search and refine your listing results</p>
      </div>
      <div className="flex flex-col gap-16 mb-6 sm:flex-row sm:mb-20 sm:justify-around sm:gap-6">
        <input ref={nameRef} className="flex-1 h-10  rounded-md text-primary_black" placeholder="" type="text" />
        <input ref={countryRef} className="flex-1 h-10 rounded-md text-primary_black" placeholder="" type="text" />
        <input ref={addressRef} className="flex-1 h-10 rounded-md text-primary_black" placeholder="" type="text" />
      </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2">
          <label htmlFor="toggle" className="text-sm text-white">
            Pets
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>
          </div>
        </div>
        <button onClick={handleSearch} className="bg-primary text-white py-3 px-8 rounded-lg max-sm:mx-auto max-w-[220px]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
