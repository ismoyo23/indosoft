import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Input,
  Table,
  Row,
  Col,
  Card,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import style from "../../../styles/Admin/Body.module.css";
import { connect } from "react-redux";
import { borrowGet, borrowAction } from "../../../redux/actions/borrow";
import { login } from "../../../redux/actions/auth";
import Swal from "sweetalert2";
import QrReader from "react-qr-reader";
function Home(props) {
  useEffect(() => {
    getBorrowed();
  }, []);

  let [result, setResult] = useState("no result");
  let [titleButton, setTitleButton] = useState("Turn On");

  let getBorrowed = () => {
    props.borrowGet(process.env.REACT_API_URL).catch((error) => {
      console.log(error);
    });
  };

  let handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = (err) => {
    console.log(err);
  };

  let HandleReturn = (id) => (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You want return this books!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        let data = {
          ConUrl: process.env.REACT_APP_URL,
          id: id,
        };

        props
          .borrowAction(data)
          .then(() => {
            Swal.fire({
              title: "Success",
              text: "You won't be able to revert this!",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Yes",
            }).then((result) => {
              if (result.value) {
                window.location.reload();
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      {/* modal */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Scanning QR</ModalHeader>
        <ModalBody>
          <div>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
            <p>{result}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>
            Turn Of
          </Button>
        </ModalFooter>
      </Modal>
      {/* body */}
      <Row style={{ marginTop: "30px", marginRight: 12 }} noGutters>
        <Col md="3" xs="10" className={style.Card}>
          <Card body>
            <i className="fa fa-user" aria-hidden="true">
              <span className={style.writer}>Users</span>
            </i>
            <p className={style.writer}>120</p>
          </Card>
        </Col>
        <Col md="3" xs="10" className={style.Card}>
          <Card body>
            <i class="fa fa-bookmark" aria-hidden="true">
              <span className={style.writer}>Borrowed</span>
            </i>
            <p className={style.writer}>120</p>
          </Card>
        </Col>

        <Col
          md="3"
          xs="10"
          style={{ cursor: "pointer" }}
          className={style.Card}
        >
          <Card body>
            <i class="fa fa-address-card-o" aria-hidden="true">
              <span className={style.writer}>Absence</span>
            </i>
            <p className={style.writer}>120</p>
          </Card>
        </Col>

        <Col md="7" xs="12">
          <Card body className={style.CardTable}>
            <Row>
              <Col md="6">
                <header style={{ fontSize: "20px" }}>
                  <b>Table Borrow</b>
                </header>
              </Col>

              <Col md="6">
                <Input
                  className={style.Search}
                  type="text"
                  placeholder="Search"
                />
              </Col>
            </Row>
            <Table hover className={style.Table}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nisn</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Majors</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.borrowCrud.data.map((borrow, key) => {
                  return (
                    <tr>
                      <td>{key + 1}</td>
                      <td>{borrow.nik}</td>
                      <td>{borrow.name_user}</td>
                      <td>{borrow.class}</td>
                      <td>{borrow.majors}</td>
                      <td>
                        <Button
                          onClick={HandleReturn(borrow.id_borrower)}
                          color="info"
                        >
                          Process
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col md="5" xs="12">
          <Card body className={style.CardTable}>
            <Row>
              <header style={{ fontSize: "20px", marginLeft: 12 }}>
                <b>Absence Today</b>
              </header>
              {modal == true ? (
                <Button
                  onClick={toggle}
                  style={{ height: 34, marginLeft: 12, marginBottom: 14 }}
                  color="info"
                >
                  Scanning Active
                </Button>
              ) : (
                <Button
                  onClick={toggle}
                  style={{ height: 34, marginLeft: 12, marginBottom: 14 }}
                  color="danger"
                >
                  Turn On
                </Button>
              )}
            </Row>
            <Table hover className={style.Table}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Username</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {props.borrowCrud.data.map((borrow, key) => {
                  return (
                    <tr>
                      <td>{key + 1}</td>
                      <td>{borrow.name_user}</td>

                      <td>{borrow.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  );
}

let mapStateToProps = (state) => ({
  borrowCrud: state.borrowGet,
  auth: state.auth,
});
const mapDispatchToProp = { borrowGet, login, borrowAction };

export default connect(mapStateToProps, mapDispatchToProp)(Home);
