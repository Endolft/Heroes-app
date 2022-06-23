import React from 'react'
import { Link } from 'react-router-dom'

export const UniversesCard = ({srcurl,alt,url,name}) => {
    
return (<>
    <div className="card" >
  <img src={srcurl} className="card-img-top" alt={alt}/>
  <div className="card-body">
    <div className="card-text text-center">
    <Link to={url} className="link-dark">
                <h3>
                  <b>{name}</b>
                </h3>
              </Link>
            </div>

    </div>
  </div>
</>
    
  )
}


