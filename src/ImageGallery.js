import React, { useEffect } from 'react';


function ImageGallery() {
    

  return (
    <>
      <div className="Image-gallery">    
    <div className="img-gal-div1">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner sideing">
          <div className="carousel-item active">
            <img className="d-block w-100 img_9" src="./images/C1_0.jpg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block" id="slide-item">
              <h5>Polo Shirts</h5>
              <p>Elevate your style with our classNameic polo t-shirts! Choose from vibrant red, sunny yellow, or sleek
                black.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img_9" src="./images/B1_0.jpg" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block" id="slide-item">
              <h5>Long Sleeve T-Shirt</h5>
              <p>Long Sleeve T-Shirts made of Cotton, In Black, Coffee and White</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img_9" src="./images/A1_0.webp" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block" id="slide-item">
              <h5>Checkered Shirt</h5>
              <p>A Casual Look with Checkered Pattered Shirts in Red, Green and Blue</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>    
    <div className="img-gal-div2">
      <div className="Image-gallery-1">
        <div className="img_1">
          <img src="./images/A1_0.webp" id="gallery-img"/>
        </div>
        <div className="img_1">
          <img src="./images/A1_1.webp" id="gallery-img"/>
        </div>
        <div className="img_1">
          <img src="./images/A1_2.webp" id="gallery-img"/>
        </div>
      </div>
      <div className="Image-gallery-1">
        <div className="img_1">
          <img src="./images/C1_0.jpg" id="gallery-img"/>
        </div>
        <div className="img_1">
          <img src="./images/C1_3.webp" id="gallery-img"/>
        </div>
        <div className="img_1">
          <img src="./images/C1_1.webp" id="gallery-img"/>
        </div>
      </div>
      <div className="Image-gallery-1">
        <div className="img_1">
          <img src="./images/B1_0.jpg" id="gallery-img"/>
        </div>
        <div className="img_1">
          <img src="./images/B1_1.webp" id="gallery-img"/>
        </div>
        <div className="img_1">
          <img src="./images/B1_2.webp" id="gallery-img"/>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default ImageGallery