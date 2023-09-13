import React, { useContext, useState, useEffect, createContext } from "react";

export const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const [houses, setHouses] = useState([]);
  const [house, setHouse] = useState({});

  const getHouses = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000");
      const houses = await res.json();
      console.log(houses);
      setHouses(houses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);

  return <HouseContext.Provider value={houses}>{children}</HouseContext.Provider>;
}

export default HouseContextProvider;
