import React from "react";
import style from "../../../styles/Users/Navbar.module.css";
import "font-awesome/css/font-awesome.min.css";
import img1 from "../../../image/img1.jpg";
import img2 from "../../../image/img2.jpg";
import img3 from "../../../image/img3.jpg";
import img4 from "../../../image/img4.jpg";
import img6 from "../../../image/img6.jpg";
import iconbuku from "../../../image/icon_buku1.png";
import iconbuku2 from "../../../image/icon_buku2.png";
import iconbuku3 from "../../../image/icon_buku3.png";
import iconbuku4 from "../../../image/icon_buku4.png";
import iconbuku5 from "../../../image/icon_buku5.png";

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

function SlideCard(props) {
  console.log(props);
  let params = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
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
        <Row className={style.IconBooks}>
          <Col md="3" xs="6">
            <img src={iconbuku} />
          </Col>

          <Col md="3" xs="6">
            <img src={iconbuku2} />
          </Col>
          <Col md="3" xs="6">
            <img src={iconbuku3} />
          </Col>

          <Col md="3" xs="6">
            <img src={iconbuku5} />
          </Col>
        </Row>

        {/* slide books */}
        <header className={style.headerBooks}>New Books</header>

        <Swiper {...bookSlide}>
          <div class="swiper-slide">
            <div className={style.SwiperWraper}>
              <img style={{ width: "300px" }} src={img1} />
              <div className={style.overlay}>
                <div className={style.CardText}>
                  <Card style={{ height: "400px" }}>
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make{" "}
                      </CardText>
                      <Button color="info">Detail</Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div className={style.SwiperWraper}>
              <img style={{ width: "300px" }} src={img2} />
              <div className={style.overlay}>
                <div className={style.CardText}>
                  <Card style={{ height: "400px" }}>
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make{" "}
                      </CardText>
                      <Button color="info">Detail</Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div className={style.SwiperWraper}>
              <img style={{ width: "300px" }} src={img3} />
              <div className={style.overlay}>
                <div className={style.CardText}>
                  <Card style={{ height: "400px" }}>
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make{" "}
                      </CardText>
                      <Button color="info">Detail</Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div className={style.SwiperWraper}>
              <img style={{ width: "300px" }} src={img4} />
              <div className={style.overlay}>
                <div className={style.CardText}>
                  <Card style={{ height: "400px" }}>
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make{" "}
                      </CardText>
                      <Button color="info">Detail</Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div className={style.SwiperWraper}>
              <img style={{ width: "300px" }} src={img6} />
              <div className={style.overlay}>
                <div className={style.CardText}>
                  <Card style={{ height: "400px" }}>
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make{" "}
                      </CardText>
                      <Button color="info">Detail</Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div className={style.SwiperWraper}>
              <img style={{ width: "300px" }} src={img6} />
              <div className={style.overlay}>
                <div className={style.CardText}>
                  <Card style={{ height: "400px" }}>
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make{" "}
                      </CardText>
                      <Button color="info">Detail</Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </Container>
    </>
  );
}

export default SlideCard;
