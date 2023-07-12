import React, { useEffect, useState } from 'react';
import News from './News';

function Newslist() {
  const [newss, setnews] = useState([]);

  let api = "https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=98ccbea426f64760bfbe8255c46cdcce";

  const fetchapi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setnews(data.articles); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchapi(api);
  }, []);

  return (
    <div className="allnew container">
      <div className="row g-2">
        {newss.map((value) => ( 
        <div className="col"> 
            <News imglink={value.urlToImage} title={value.title.slice(0,65)} /> 
        </div>
            ))}
      </div>
      </div>
  );
}

export default Newslist;
