import React from "react";
import style from "../../../styles/Users/Navbar.module.css";
import "font-awesome/css/font-awesome.min.css";

import img3 from "../../../image/slide3.png";
import img4 from "../../../image/slide4.png";

import img6 from "../../../image/image.jpg";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Input,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function SlideShow(props) {
  console.log(props);
  let params = {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  let bookSlide = {
    slidesPerView: 5,
    spaceBetween: 11,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <>
      <Container>
        <Row>
          <Col md="12" xs="12">
            <Swiper {...params}>
              <div class="swiper-slide">
                <img className={style.ImgSlide} src={img3} />
              </div>
              <div class="swiper-slide">
                <img className={style.ImgSlide} src={img4} />
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SlideShow;
