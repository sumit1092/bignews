import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,urlToImage,newsUrl,author,date,source} = this.props;
    return (
      <div className="container">
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />

          <div style={{position:'absolute', display:'flex', justifyContent:'flex-end',right:'0'}}>
  <span className="badge bg-primary" style={{left:'85%',zIndex:1}} >
    {source}
    <span className="visually-hidden">unread messages</span>
  </span></div>
  
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p style={{background:"white"}} class="card-text"><small class="text-muted">By {author?"author":"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-light btn-color">Read more..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem;
