export const getLocations = async (search: string) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${process.env.API_KEY}&q=${search}`,
  );
  const data = await response.json();
  return data;
};
