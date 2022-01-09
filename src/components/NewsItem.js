import React from 'react'

const NewsItem = ({ title, description, newsUrl, imageUrl, author, date, source}) => {
    
    return (
        <div>
            <div className="card my-1" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                    {source}
                </span>
                <img src={imageUrl ? imageUrl : "https://www.boerneisd.net//cms/lib/TX50000022/Centricity/Domain/76/business-news-thumbnail.jpg"} className="card-img-top" alt="This is ImageOrError" />
                <div className="card-body">
                    <h5 className="card-title">{title ? title: "..."}</h5>
                    <p className="card-text">{description ? description.slice(0, 45) : ""}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "Null"}</small></p>
                    <a href={newsUrl} className="btn btn-sm btn-dark">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
