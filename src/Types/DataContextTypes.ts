import {CityType} from './CityTypes';
import {WeatherData} from './WeatherTypes';

export interface DataContextProps {
  data: WeatherData | null;
  setData: React.Dispatch<React.SetStateAction<null>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  searchedCities: CityType[];
  setSearchedCities: React.Dispatch<React.SetStateAction<CityType[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  VIEWS: {
    HOME: string;
    SEARCH: string;
  };
  forecastData: any;
}
