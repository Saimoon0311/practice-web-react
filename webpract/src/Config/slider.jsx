import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~bootstrap/scss/bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Logo from "../images/logo.jpg"
import imgone from "../images/download.jpg"
import imgtwo from "../images/download2.jpg"
import imgthree from "../images/download4.jpg"
import "./slider.css"

function Slider() {
  return (
    <div>

      <div className='container-fluid'>

        <Carousel>

          <Carousel.Item>

            <img

              className="d-block w-100"

              src={imgone} />

            <Carousel.Caption>

              {/* <h3>First Demo </h3> */}

            </Carousel.Caption>

          </Carousel.Item  >

          <Carousel.Item>

            <img

              className="d-block w-100"

              src={imgtwo} />

            <Carousel.Caption>

              {/* <h3>Second Demo</h3> */}

            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item>

            <img

              className="d-block w-100"

              src={imgthree} />

            <Carousel.Caption>

              {/* <h3>Third Demo</h3> */}

            </Carousel.Caption>

          </Carousel.Item>

        </Carousel>

      </div>

    </div>


  );
}
export default Slider;