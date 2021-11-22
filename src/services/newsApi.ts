import axios from "axios";

const KEY = process.env.REACT_APP_KEY;
const URL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${KEY}`;

export default async  function  fetchNews (params: any) {
  const { data }:any =  await axios.get(URL, {
    params,
  });
  return data;
}
