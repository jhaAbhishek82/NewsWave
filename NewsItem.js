import React from 'react'

 const NewsItem = (props) => {
  
    let {title  , description , imageUrl  , newsUrl , author , date} = props;
    return (
      <div className="my-3">
          
          
          

                <div className="card" >
                     <img src={!imageUrl?"https://thumbs.dreamstime.com/z/exciting-breaking-news-release-media-important-announcement-letterpress-note-paper-lined-magazine-newspaper-words-clipping-letters-162445977.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                         <h5 className="card-title">{title}</h5>
                         <p className="card-text">{description}</p>
                         <p className="card-text"><small className="text-muted">By {!author?"Unknow":author} on {new Date(date).toGMTString()} </small></p>
                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn bnt-sm btn-dark">Read More</a>
                    </div>
                </div>
      </div>
    )
  
}

export default NewsItem
