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
  FormGroup,
  Label,
} from "reactstrap";
import style from "../../../styles/Admin/Body.module.css";
import { connect } from "react-redux";
import { borrowGet, borrowAction } from "../../../redux/actions/borrow";
import { login } from "../../../redux/actions/auth";
import { absenceGet, absencePost } from "../../../redux/actions/absence";
import Swal from "sweetalert2";
import QrReader from "react-qr-reader";
import Moment from "moment";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Home(props) {
  let history = useHistory();
  useEffect(() => {
    getBorrowed();
    GetAbsence();
  }, []);

  let { buttonLabel, className } = props;
  let [modal, setModal] = useState(false);
  let toggle = () => setModal(!modal);
  let [modalProcess, setModalProcess] = useState(false);
  let toggleProcess = () => setModalProcess(!modalProcess);
  let [idBorrowed, setIdBorrowed] = useState("");
  let [date, setDate] = useState(new Date());
  let [startDate, setStartDate] = useState(new Date());
  let [count, setCount] = useState("");
  let [idUser, setIdUser] = useState("");
  let [idBooks, setIdBooks] = useState("");
  let getBorrowed = () => {
    props.borrowGet(process.env.REACT_API_URL).catch((error) => {
      console.log(error);
    });
  };

  let GetAbsence = () => {
    let data = {
      Search:
        props.filter == undefined
          ? ""
          : `/?field=absence.created_at&search=${props.filter}`,
      ConUrl: process.env.REACT_APP_URL,
    };
    props.absenceGet(data);
  };

  let handleScan = (data) => {
    if (data) {
      let validateData = {
        ConUrl: process.env.REACT_APP_URL,
        Search: `/?field=absence.nik&search=${data}&field2=absence.created_at&search2=${Moment(
          Date()
        ).format("y-MM-DD")}`,
      };
      axios({
        method: "GET",
        url: `${validateData.ConUrl}books/absence/get${validateData.Search}`,
      }).then((res) => {
        // =============================================//
        if (res.data.data[0] == null) {
          let setData = {
            ConUrl: process.env.REACT_APP_URL,
            nis: data,
          };
          props.absencePost(setData).then((data) => {
            Swal.fire("Success!", "Check Log Success.", "success");
          });
        }
        // ==============================================
        else {
          if (data == res.data.data[0].nik) {
            Swal.fire("warning", "You have checked the log today", "warning");
          }
          // =========================================
          else {
            let setData = {
              ConUrl: process.env.REACT_APP_URL,
              nis: data,
            };
            props.absencePost(setData).then((data) => {
              Swal.fire("Success!", "Check Log Success.", "success");
            });
          }
        }
      });
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

  let handleDate = (event) => {
    event.preventDefault();
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_URL}books/borrower/${idBorrowed}`,
      data: {
        id_books: idBooks,
        status: "Borrowed",
        updated_at: date,
        id_user: idUser,
        count: count,
      },
    });
  };

  let filterAbsence = (filter) => {
    if (filter == "") {
      history.push(`/admin/`);
      window.location.reload();
    } else {
      history.push(`/filterAbsence/${filter}`);
      window.location.reload();
    }
  };

  let processModals = (created_at, id_borrower, id_book, count, id_user) => (
    event
  ) => {
    event.preventDefault();
    setModalProcess(!modalProcess);
    setStartDate(Moment(created_at).format("DD/MM/YYYY"));
    setIdBorrowed(id_borrower);
    setIdUser(id_user);
    setCount(count);
    setIdBooks(id_book);
  };

  let handleChange = (data) => {
    setDate(data);
  };

  return (
    <>
      {/* modal proccess */}
      <Modal isOpen={modalProcess} toggle={toggleProcess} className={className}>
        <ModalHeader toggle={toggleProcess}>Set Date Return Books</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="6">
              <Input
                value={startDate}
                disabled
                style={{
                  height: 31,
                }}
              />
            </Col>
            <Col md="6">
              <DatePicker selected={date} onChange={handleChange} />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDate}>
            Save
          </Button>
          <Button color="secondary" onClick={toggleProcess}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* modal scanning */}
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
                        {borrow.status == "Borrowed" ? (
                          <Button
                            onClick={HandleReturn(borrow.id_borrower)}
                            color="danger"
                          >
                            Return
                          </Button>
                        ) : (
                          <Button
                            onClick={processModals(
                              borrow.create_at,
                              borrow.id_borrower,
                              borrow.id_book,
                              borrow.count,
                              borrow.id_user
                            )}
                            color="info"
                          >
                            {borrow.status}
                          </Button>
                        )}
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
                <b>Absence</b>
              </header>
              {modal == true ? (
                <Button
                  onClick={toggle}
                  style={{ height: 34, marginLeft: 12, marginBottom: 14 }}
                  color="info"
                >
                  On
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

              <FormGroup style={{ marginLeft: 12, marginTop: -2 }} row>
                <Input
                  onChange={(e) => filterAbsence(e.target.value)}
                  type="select"
                  name="select"
                  id="exampleSelect"
                >
                  {props.filter == undefined ? (
                    <>
                      <option value={Moment(Date()).format("y-MM-DD")}>
                        Today
                      </option>
                      <option selected value="">
                        All Day
                      </option>
                    </>
                  ) : (
                    <>
                      <option selected value={Moment(Date()).format("Y-m-d")}>
                        Today
                      </option>
                      <option value="">All Day</option>
                    </>
                  )}
                </Input>
              </FormGroup>
            </Row>
            <Table hover className={style.Table}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Majors</th>
                </tr>
              </thead>
              <tbody>
                {props.absenceData.data.map((borrow, key) => {
                  return (
                    <tr>
                      <td>{key + 1}</td>
                      <td style={{ width: 120 }}>{borrow.name_user}</td>

                      <td>{borrow.class}</td>
                      <td>{borrow.majors}</td>
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
  absenceData: state.absenceGet,
});
const mapDispatchToProp = {
  borrowGet,
  login,
  borrowAction,
  absenceGet,
  absencePost,
};

export default connect(mapStateToProps, mapDispatchToProp)(Home);
