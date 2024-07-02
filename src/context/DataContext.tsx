import React, {createContext, useState, ReactNode, useEffect} from 'react';
import {getCityWeather} from '../API/getCityWeather';

interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface WeatherData {
  location: Location;
  current: CurrentWeather;
}

interface DataContextProps {
  data: WeatherData | null;
  setData: React.Dispatch<React.SetStateAction<null>>;
}

export const DataContext = createContext({} as DataContextProps);

export const DataProvider = ({children}: {children: ReactNode}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const info = await getCityWeather('Oslo');
      setData(info);
    };
    fetchWeather();
  }, []);

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
};
