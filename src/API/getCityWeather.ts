export const getCityWeather = async (city: string) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=cbc8fe2f1fc04d18aa6220654242306&q=${city}`,
  );
  const data = await response.json();
  return data;
};
