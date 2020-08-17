import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
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
} from "reactstrap";
import { useHistory } from "react-router-dom";
function BorrowerPage(props) {
  let history = useHistory();

  return (
    <>
      <Col md="2" xs="6">
        <Card
          data-aos="fade-up"
          style={{ width: 180, height: 500, marginTop: 90 }}
          className={styles.card}
        >
          <CardImg
            top
            width="100%"
            style={{ height: 300 }}
            src={`${process.env.REACT_APP_URL}${props.borrow.image}`}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>
              {props.borrow.title}
            </CardTitle>
            <CardSubtitle style={{ fontSize: 15, color: "gray" }}>
              Rak: {props.borrow.rak}
            </CardSubtitle>
            <CardSubtitle
              style={{
                fontSize: 15,
                color: "gray",
                marginTop: 1,
                height: 50,
              }}
            >
              Author: {props.borrow.name_author}
            </CardSubtitle>

            <Button
              onClick={() => history.push(`/DetailBooks/${props.borrow.id}`)}
              style={{
                marginTop: 20,
                width: "100%",
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "black",
                color: "black",
              }}
            >
              View
            </Button>
          </CardBody>
        </Card>
      </Col>
      {/* list books
      <Col md="2" xs="6">
        <div className={style.cardBody}>
          <Card>
            <div className={style.front}>
              <img
                className={style.imgCard}
                src={`${process.env.REACT_APP_URL}${props.borrow.image}`}
                alt="Image None"
              />
            </div>

            <div className={style.back}>
              <Card
                className={style.text}
                style={{ height: "270px", width: "100%" }}
              >
                <CardBody>
                  <CardTitle>{props.borrow.title}</CardTitle>
                  <CardText>{Date(props.borrow.create_at)}</CardText>
                  <Button color="danger">Borrowed</Button>
                </CardBody>
              </Card>
            </div>
          </Card>
        </div>
      </Col> */}
    </>
  );
}

export default BorrowerPage;
