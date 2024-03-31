import Nav from "./Nav"
import Booking from "./Booking"
import "./ImagesCSS.css"
import Product from "./Product"
import Services from "./Services"
import AboutUs from "./AboutUs"
import ImageGallery from "./ImageGallery"
import Ratings from "./Ratings"

function App() {
  return (
    <div className="App">
      <Nav />
      <Booking />
      <Product/>
      <Services/>
      <AboutUs/>
      <ImageGallery/>
      <Ratings/>
    </div>
  );
}

export default App;
