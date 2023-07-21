import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url} =this.props
    return (
      <div className="my3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://iansportalimages.s3.amazonaws.com/images/heart_2_nlfTgoU.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {description}
            </p>
            <a href={url} target="blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
