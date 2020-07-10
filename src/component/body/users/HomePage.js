import React from "react";
import style from "../../../styles/Users/Navbar.module.css";
import "font-awesome/css/font-awesome.min.css";
import img6 from "../../../image/image.jpg";
import "swiper/css/swiper.css";
import { Link } from "react-router-dom";
import {
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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

function HomePage(props) {
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
      {/* list books */}
      <Col md="2" xs="6">
        <div className={style.cardBody}>
          <Card>
            <div className={style.front}>
              <img
                className={style.imgCard}
                src={`http://localhost:3000/${props.allBooks.image}`}
                alt="Image None"
              />
            </div>

            <div className={style.back}>
              <Card
                className={style.text}
                style={{ height: "270px", width: "100%" }}
              >
                <CardBody>
                  <CardTitle>{props.allBooks.title}</CardTitle>
                  <CardText>
                    {props.allBooks.discription.substr(0, 70)}
                  </CardText>
                  <Link to={`/detailbooks/${props.allBooks.id}`}>
                    <Button color="info">Detail</Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          </Card>
        </div>
      </Col>
    </>
  );
}

export default HomePage;
