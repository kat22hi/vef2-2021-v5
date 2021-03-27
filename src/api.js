
export const getNews = async () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
}