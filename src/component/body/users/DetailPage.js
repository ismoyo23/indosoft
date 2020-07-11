import React, { useState, useEffect } from "react";
import style from "../../../styles/Users/Detail.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import { login, logout } from "../../../redux/actions/auth";
function ButtonMin(props) {
  if (props.count <= 1) {
    return (
      <Button outline color="danger" className={style.ButtonPlus}>
        limit
      </Button>
    );
  } else {
    return (
      <Button
        onClick={props.countMin}
        outline
        color="danger"
        className={style.ButtonPlus}
      >
        -
      </Button>
    );
  }
}

function ButtonPlus(props) {
  if (props.count >= props.stok) {
    return (
      <Button outline color="success" className={style.ButtonPlus}>
        limit
      </Button>
    );
  } else {
    return (
      <Button
        onClick={props.countPlus}
        outline
        color="success"
        className={style.ButtonPlus}
      >
        +
      </Button>
    );
  }
}
function DetailPage(props) {
  console.log(props);

  let history = useHistory();
  let [count, setCount] = useState(1);
  let [modal, setModal] = useState(false);
  let toggle = () => setModal(!modal);
  let [id, setId] = useState(props.paramId);
  let [status, setStatus] = useState("borrower");

  let handleBorrowed = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/books/borrower",
      data: {
        id_books: id,
        id_user: props.auth.data.id_user,
        status: status,
        count: count,
      },
    })
      .then((response) => {
        Swal.fire({
          title: "Success",
          text: "Books is borrowed",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.value) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <CardGroup>
        <Card>
          <CardImg
            className={style.CardImg}
            src={`${process.env.REACT_APP_URL}${props.idBooks.image}`}
            alt="Card image cap"
          />
          <CardBody>
            <Container>
              <Row>
                <Col md="9">
                  <Row>
                    <CardTitle className={style.CardTitle}>
                      {props.idBooks.title}
                    </CardTitle>
                    <Col md="7"></Col>
                    <Col md="2">
                      <span class="badge badge-info">
                        Stok: {props.idBooks.stok}
                      </span>
                    </Col>
                  </Row>
                  <CardText>{props.idBooks.discription}</CardText>
                </Col>
                <Col md="3">
                  <CardImg
                    className={style.CardChild}
                    src={`${process.env.REACT_APP_URL}${props.idBooks.image}`}
                    alt="Card image cap"
                  />
                  <br />
                  <ButtonPlus
                    count={count}
                    countPlus={() => setCount(count + 1)}
                    stok={props.idBooks.stok}
                  />
                  <Button color="info" className={style.ButtonPlus}>
                    {count}
                  </Button>
                  <ButtonMin
                    count={count}
                    countMin={() => setCount(count - 1)}
                  />
                  <Button
                    onClick={handleBorrowed}
                    color="warning"
                    className={style.Button}
                  >
                    Borrow
                  </Button>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProp = { login, logout };

export default connect(mapStateToProps, mapDispatchToProp)(DetailPage);
