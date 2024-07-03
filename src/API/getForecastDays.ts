export const getForecastDays = async (city: string) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=6&aqi=no&alerts=no`,
  );
  const data = await response.json();
  return data;
};
