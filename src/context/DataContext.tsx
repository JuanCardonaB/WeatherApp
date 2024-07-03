import React, {createContext, useState, ReactNode, useEffect} from 'react';
import {getCityWeather} from '../API/getCityWeather';
import {getLocations} from '../API/getLocations';
import {CityType} from '../Types/CityTypes';
import {DataContextProps} from '../Types/DataContextTypes';

const VIEWS = {
  HOME: 'HOME',
  SEARCH: 'SEARCH',
};

export const DataContext = createContext({} as DataContextProps);

export const DataProvider = ({children}: {children: ReactNode}) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Medellin');
  const [searchedCities, setSearchedCities] = useState<CityType[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      const info = await getCityWeather(city);
      setData(info);
    };
    fetchWeather();
  }, [city]);

  useEffect(() => {
    const fetchWeather = async () => {
      const info = await getLocations(searchValue);
      setSearchedCities(info);
    };
    if (searchValue.length > 2) {
      fetchWeather();
    }
  }, [searchValue]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        setCity,
        searchedCities,
        setSearchedCities,
        searchValue,
        setSearchValue,
        VIEWS,
      }}>
      {children}
    </DataContext.Provider>
  );
};
