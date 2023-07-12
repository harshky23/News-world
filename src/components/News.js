import React from "react"

function News(props) {
  const { imglink, title, desc } = props;

  // Check if imglink prop is undefined or empty then will pass default props
  const imageSrc = imglink || News.defaultProps.imglink;

  return (
    <div className="card" style={{width:'18rem'}}>
      <img src={imageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  )
}

News.defaultProps = {
  imglink: "https://techdator.net/wp-content/uploads/2022/09/Best-News-Apps-for-iPhone-iPad-and-iOS.jpg",
  title: "Sorry, news couldn't reload",
  desc: "Please reload"
}

export default News;
