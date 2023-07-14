import React from "react"
import './global.css';

function News(props) {
  const { imglink, title, link} = props;


  return (
    <a target="_blank" href={(link)? link : News.defaultProps.link}>
    <div className="card" style={{width:'18rem', height:'20rem'}}>
      <img src={(imglink)? imglink : News.defaultProps.imglink} style={{width:'18rem', height:'12rem'}}className="card-img-top" alt="..." />
      <div className="card-body">
        <h7 className="card-title">{(title)? title : News.defaultProps.title}</h7>
      </div>
    </div>
    </a>
  )
}

News.defaultProps = {
  imglink: "https://techdator.net/wp-content/uploads/2022/09/Best-News-Apps-for-iPhone-iPad-and-iOS.jpg",
  title: "Sorry, news couldn't reload",
  link : "../pages/MainPage"
}

export default News;
