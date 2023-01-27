import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import offer from "../image/habesha1.jpg";
import hat from "../image/hat.jpg";
import arrival from "../image/habesha2.jpg";

const ProductCarousel = () => {
  
  return (
    <Carousel pause="hover"  className="bg-success" 
    style={{border:"1px solid green" ,borderRadius:"50%",margin:"10%"}}>
      <Carousel.Item>
        <img src={offer} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={arrival} alt="second slide" />

        <Carousel.Caption>
          <h3 style={{color:"white"}}>New Arrival</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={hat} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
