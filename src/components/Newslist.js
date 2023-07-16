import React, { useContext, useEffect, useState } from 'react';
import News from './News';
import AppContext from '../context/AppContext';

import './global.css';

function Newslist() {
  let { search,pgcount,setpage,dark} = useContext(AppContext);
  const [newss, setnews] = useState([]);
  const[totalNews, settotalNews] = useState();
  const[loading,setLoading] = useState(true);


  useEffect(() => {
    

    const api = `https://newsapi.org/v2/everything?q=${search}&pageSize=20&page=${pgcount}&apiKey=98ccbea426f64760bfbe8255c46cdcce`;

    const fetchapi = async (url) => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
       settotalNews(data.totalResults);
        setnews(data.articles);
      } catch (error) {
        console.log(error);
      }
    };   
    fetchapi(api);
  }, [search,pgcount]);

  useEffect(()=>{
    (totalNews>100)?settotalNews(100):settotalNews(totalNews);
  },[totalNews])
  

  return (
    <>

    <div className="container" >
      {
      (!loading)?(
      (totalNews!==0) ? (
      <div className="row g-2">
        {newss.map((value) => (
          <div className="col g-4 responsive" key={value.url}>
            <News
              imglink={value.urlToImage}
              title={value.title}
              link={value.url}
            />
          </div>
        ))}
      </div>
      ):
      <div><p className='loading'>No news</p></div>
      )
      :
      <div className='loading'>Loading.....</div>
      }

    </div>
    <div>
    {
      (totalNews!==0)? (
      <div className="d-flex justify-content-around mt-5 mb-3">
      <button type="button" className={`btn btn-secondary  ${(dark)? 'Listcustom-btn':'dListcustom-btn'}`} disabled={(pgcount===1)?true:false} onClick={()=>{setpage(--pgcount);}}>Previous</button>
      <p className={`bolt ${(!dark)? 'number' : 'dnumber'}`}>{pgcount} / {Math.ceil(totalNews/20)}</p>
      <button type="button" className={`btn btn-secondary  ${(dark)? 'Listcustom-btn':'dListcustom-btn'}`} disabled={(pgcount+1>Math.ceil(totalNews/20))?true:false} onClick={()=>{setpage(++pgcount);}}>Next</button>
      </div>
          ): <div></div>}
    </div>
    </>
  );
}

export default Newslist;
