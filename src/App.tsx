// import React from 'react';
import Home from "./pages/Home";
import "./App.css";
import { useEffect, useState } from "react";
import fetchNews from "./services/newsApi";
import { INews } from "./schemas/Type";

function App() {
  const [newsData, setnewsData] = useState<INews[]>([]);
  const [otherNews, setOtherNews] = useState(null);
  const [shortNews, setShortNews] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [language, setLanguage] = useState("en");
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const data: any = getNews("", "");
  }, []);

  function getNews(searchText: any, language: any) {
    setLoading(true);
    fetchNews({
      q: searchText && searchText.length > 0 ? searchText : "technology",
      max: 10,
      lang: language ? language : "en",
    }).then((res: any) => {
      console.log("data xxx", res);
      setnewsData(res.articles);
    });
  }
  return (
    <div className="App">
      <Home newsData={newsData} />
    </div>
  );
}

export default App;
