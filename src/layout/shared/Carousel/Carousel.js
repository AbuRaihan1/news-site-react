import Carousel from "react-bootstrap/Carousel";
import logo from "../../../logo.svg";
function BrandCarousel() {
  return (
    <Carousel className="border">
      <Carousel.Item>
        <img className="d-block w-100" src={logo} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={logo} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarousel;
