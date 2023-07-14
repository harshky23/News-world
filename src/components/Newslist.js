import React, { useContext, useEffect, useState } from 'react';
import News from './News';
import AppContext from '../context/AppContext';
import './global.css';

function Newslist() {
  let { search,pgcount,setpage } = useContext(AppContext);
  const [newss, setnews] = useState([]);
  const[totalNews, settotalNews] = useState();
  const[loading,setLoading] = useState(true);


  useEffect(() => {
    

    const api = `https://newsapi.org/v2/everything?q=${search}&pageSize=20&page=${pgcount}&apiKey=33170996c436435d9439388713794ae3`;

    const fetchapi = async (url) => {
      try {
        console.log(search);
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
       console.log(data); 
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

    <div className=" container" style={{ margin: '100px'}}>
      {
      (!loading)?(
      (totalNews!==0) ? (
      <div className="row g-2">
        {newss.map((value) => (
          <div className="col g-4" key={value.url}>
            <News
              imglink={value.urlToImage}
              title={value.title}
              link={value.url}
            />
          </div>
        ))}
      </div>
      ):
      <div><p>No news</p></div>
      )
      :
      <div>loading.....</div>
      }{
      (totalNews!==0)? (
      <div className="d-flex justify-content-between mt-5">
      <button type="button" className="btn btn-secondary" disabled={(pgcount===1)?true:false} onClick={()=>{setpage(--pgcount);}}>Previous</button>
      <p>{pgcount}/{Math.ceil(totalNews/20)}</p>
      <button type="button" className="btn btn-secondary" disabled={(pgcount+1>Math.ceil(totalNews/20))?true:false} onClick={()=>{setpage(++pgcount);}}>Next</button>
      </div>
          ): <div></div>}
    </div>
    </>
  );
}

export default Newslist;
