
export const getNews = async () => {
  const apiUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";
  
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
}