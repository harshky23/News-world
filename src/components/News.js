import React, { useContext } from "react"
import './global.css';
import AppContext from "../context/AppContext";

function News(props) {
  const { imglink, title, link} = props;
  const{dark} = useContext(AppContext);


  return (
    <a className="aTag" target="_blank" href={(link)? link : News.defaultProps.link}>
    <div className={`card ${(dark)?'cusCard':'dcusCard'}`}>
      <img src={(imglink)? imglink : News.defaultProps.imglink} style={{width:'18rem', height:'12rem'}}className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className={`${(dark)?'card-title':'dcard-title'}`}>{(title)? title : News.defaultProps.title}</h6>
      </div>
    </div>
    </a>
  )
}

News.defaultProps = {
  imglink: "https://techdator.net/wp-content/uploads/2022/09/Best-News-Apps-for-iPhone-iPad-and-iOS.jpg",
  title: "Sorry, news couldn't load",
  link : "../pages/MainPage"
}

export default News;
