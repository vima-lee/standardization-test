import Navbar from "../Navbar/navbar";
import Slider from "../Slider/Slider";
import Feature from "../Product/feature";
import Post from "../Product/post";
import Testimonial from "../Product/testimonial";
import CartBackground from "../Product/productBackground";
import Footer from "../Footer/footer";
import ProductContainer from "../Product/productContainer";

function Main() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductContainer />
      <Feature />
      <Post />
      <Testimonial />
      <CartBackground />
      <Footer />
    </>
  );
}

export default Main;
