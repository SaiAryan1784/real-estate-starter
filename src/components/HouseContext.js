import React from 'react';

import {useState, useEffect, createContext} from 'react';

//import data
import {housesData} from '../data';
import PropertyDetails from '../pages/PropertyDetails';

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any');
  const [loading, setLoading] = useState(false);

  //return all countries
  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    });
    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    // new Set(allCountries)

    //set countries state
    setCountries(uniqueCountries);
  }, []);

  //return all properties
  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;
    });
    // remove duplicates
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)]
    // new Set(allProperties)

    //set property state
    setProperties(uniqueProperties);
  }, []);

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
