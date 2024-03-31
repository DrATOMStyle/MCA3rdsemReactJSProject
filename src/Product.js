import { useState, useEffect } from "react";
import ProductApi from "./ProductAPI"

function Product() {
    let [productlist, setProductList] = useState(ProductApi);
    console.log(productlist);
    useEffect(() => {
        const imagePathsArray = [
            ['./images/C1_1.webp', './images/C1_2.webp', './images/C1_3.webp', './images/C1_0.jpg'],
            ['./images/C2_1_1.jpg', './images/C2_2_2.jpg', './images/C2_3_3.jpg', './images/C2_0_0.jpg'],
            ['./images/C3_1_1.webp', './images/C3_2_2.webp', './images/C3_3_3.webp', './images/C3_0_0.webp'],
            ['./images/A1_1.webp', './images/A1_2.webp', './images/A1_3.webp', './images/A1_0.webp'],
            ['./images/A2_1_1.jpg', './images/A2_2_2.jpg', './images/A2_3_3.jpg', './images/A2_0_0.jpg'],
            ['./images/A3_1_1.jpg', './images/A3_2_2.jpg', './images/A3_3_3.jpg', './images/A3_0_0.jpg'],
            ['./images/B1_1.webp', './images/B1_2.webp', './images/B1_3.webp', './images/B1_0.jpg'],
            ['./images/B2_1_1.jpg', './images/B2_2_2.jpg', './images/B2_3_3.jpg', './images/B2_0_0.jpg'],
            ['./images/B3_1_1.jpg', './images/B3_2_2.jpg', './images/B3_3_3.jpg', './images/B3_0_0.jpg']
        ];

        const interval = setInterval(() => {
            setProductList(prevList => {
                return prevList.map((product, index) => {
                    const imagePathIndex = (product.id - 1) % imagePathsArray.length;
                    const currentImageIndex = (product.imageIndex || 0) % imagePathsArray[imagePathIndex].length;
                    return { ...product, images: imagePathsArray[imagePathIndex][currentImageIndex], imageIndex: currentImageIndex + 1 };
                });
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

function Booking_btn(){
    alert('Booking Successful');
}
    return (
        <>
            <div className="container-fluid mt-5" id="product">
                <h1 align="center" className="product-title">Packages</h1>
                <div className="row">

                    {
                        productlist.map((item) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div className="Product-card">
                                            <div className="Product-card-body"><br />
                                                <img src={item.images} id="image-container" />
                                                <h2 align="center" className="product-headers">{item.product_name}</h2>
                                                <p>{item.product_desc}</p>
                                                <div className="Star">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                    <div className="overlay">
                                                        <img src="./images/eye.png" />
                                                        <img src="./images/heart.png" />
                                                        <img src="./images/cart.png" />
                                                    </div>
                                                </div>
                                                <br />
                                                <h4>Price:<span id="productprice">{item.product_price}</span><span id="add-button"><button className="btn btn-primary Book-btn"
                                                    type="submit" onClick={Booking_btn}>Book Now</button></span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }




                </div>
            </div>
        </>
    )
}

export default Product