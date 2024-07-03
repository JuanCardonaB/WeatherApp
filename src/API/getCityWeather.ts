export const getCityWeather = async (city: string) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`,
  );
  const data = await response.json();
  return data;
};
