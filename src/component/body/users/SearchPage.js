import React, { useEffect, useState } from "react";
import style from "../../../styles/Users/Navbar.module.css";
import Swal from "sweetalert2";
import {
  Card,
  Button,
  Col,
  CardText,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import { booksGet } from "../../../redux/actions/books";
import { useHistory, Link } from "react-router-dom";
function SearchPage(props) {
  let history = useHistory();
  useEffect(() => {
    getSearch();
  }, []);

  let getSearch = () => {
    let data = {
      SearchBooks:
        props.paramName === null ? "" : `?field=title&search=${props.name}`,
      ConUrl: process.env.REACT_APP_URL,
    };
    props.booksGet(data).then((props) => {
      if (props.action.payload.data.data[0] == undefined) {
        Swal.fire({
          title: "Im Sorry",
          text: `Data not found`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          history.push("/");
        });
      }
    });
  };
  return (
    <>
      <Container>
        {props.SearchBooks.data.map((allBooks) => {
          return (
            <Col md="2" xs="6">
              <div className={style.cardBody}>
                <Card>
                  <div className={style.front}>
                    <img
                      className={style.imgCard}
                      src={`${process.env.REACT_APP_URL}${allBooks.image}`}
                      alt="Image None"
                    />
                  </div>

                  <div className={style.back}>
                    <Card
                      className={style.text}
                      style={{ height: "270px", width: "100%" }}
                    >
                      <CardBody>
                        <CardTitle>{allBooks.title}</CardTitle>
                        <CardText>
                          {allBooks.discription.substr(0, 70)}
                        </CardText>
                        <Link to={`/detailbooks/${allBooks.id}`}>
                          <Button color="info">Detail</Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  SearchBooks: state.booksGet,
});
const mapDispatchToProp = {
  booksGet,
};

export default connect(mapStateToProps, mapDispatchToProp)(SearchPage);
