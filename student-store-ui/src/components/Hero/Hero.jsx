import React from "react";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";

function Hero(props) {
  return (
    <div className="hero">
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img_container"
            src="https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img_container"
            src="https://www.wordstream.com/wp-content/uploads/2021/07/google-shopping-feed-ecommerce-final.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
