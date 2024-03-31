import React from 'react'

function Ratings() {
  return (
    <>
     <div className="container-fluid" id="rating">
    <h1>ATOMStyles ~ WHERE EVERY ATOM SHOWS STYLE</h1>
    <div className="Image-gallery-1">
      <div className="col-md-3">
        <div className="card">
          <div className="card-body text-center">
            <a href="https://www.instagram.com/">
            <img src="./images/instagram.png" className="card-image"/></a>
            <div className="Star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body text-center">
            <a href="https://www.facebook.com/">
            <img src="./images/facebook.png" className="card-image"/>
          </a>
            <div className="Star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body text-center">
            <a href="https://twitter.com/">
            <img src="./images/twitter.png" className="card-image"/>
          </a>
            <div className="Star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>

          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body text-center">
            <a href="https://in.linkedin.com/">
            <img src="./images/linkedin.png" className="card-image"/></a>
            <div className="Star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>

          </div>
        </div>
      </div>
    </div><br/><br/>
    <span id="copyright">Copyright © 2024 By Mohammed Ghouse Mohiuddeen Hisham</span>
  </div>
    </>
  )
}

export default Ratings