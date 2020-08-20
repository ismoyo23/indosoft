import React, { useState, useEffect } from "react";
import style from "../../../styles/Admin/Body.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
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
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import FormData from "form-data";
// ====================================================================================
// import action redux
import { connect } from "react-redux";
import { login } from "../../../redux/actions/auth";
import {
  booksGet,
  addData,
  deleteBooks,
  showBooks,
} from "../../../redux/actions/books";
import { authorGet } from "../../../redux/actions/author";
import { genreGet } from "../../../redux/actions/genre";
function BooksCrud(props) {
  useEffect(() => {
    getAllAuthor();
    getAllGenre();
    getAllBooks();
  }, []);

  // Component dit Update
  useEffect(() => {
    if (search != "") {
      getAllBooks();
    }
  });

  //==============================================================================
  // state
  let [id, setId] = useState("");
  let [title, setTitle] = useState("");
  let [discription, setDiscrption] = useState("");
  let [images, setImage] = useState("");
  let [idGenre, setIdGenre] = useState("");
  let [idAuthor, setIdAuthor] = useState("");
  let [stok, setStok] = useState("");
  let [Action, setAction] = useState("");
  let [modalTitle, setModalTitle] = useState("Add Books");
  let [search, setSearch] = useState("");
  let [modal, setModal] = useState(false);
  let toggle = () => setModal(!modal);

  // ==============================================================================
  // get data All Books
  let getAllBooks = () => {
    let data = {
      SearchBooks: search === "" ? "" : `?search=${search}&field=title`,
      ConUrl: process.env.REACT_APP_URL,
    };
    props.booksGet(data);
  };

  // ==============================================================================
  // get data All Author from combobox
  let getAllAuthor = () => {
    props.authorGet(process.env.REACT_APP_URL).catch((error) => {
      console.log(error);
    });
  };

  // ==============================================================================
  // get data All Author for combobox

  let getAllGenre = () => {
    let data = {
      ConUrl: process.env.REACT_APP_URL,
      Search: "",
    };
    props.genreGet(data);
  };

  // ==============================================================================
  // Action Delete Books by id
  let DeleteBooks = (id) => (event) => {
    event.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        let data = {
          ConUrl: process.env.REACT_APP_URL,
          id: id,
        };
        props
          .deleteBooks(data)
          .then(() => {
            Swal.fire({
              title: "Success",
              text: `Delete success`,
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
      }
    });
  };

  // ==============================================================================
  // Show Books by Id
  let ShowBooks = (id) => (event) => {
    event.preventDefault();
    let data = {
      ConUrl: process.env.REACT_APP_URL,
      id: id,
    };
    props
      .showBooks(data)
      .then((props) => {
        let data = props.action.payload.data.data[0];

        setModal(true);
        setId(id);
        setTitle(data.title);
        setDiscrption(data.discription);
        setIdAuthor(data.id_author);
        setStok(data.stok);
        setIdGenre(data.id_genre);
        setModalTitle("Edit Data");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ==============================================================================
  // Action Add Books
  let ActionBooks = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("discription", discription);
    formData.append("image", images);
    formData.append("stok", stok);
    formData.append("id_genre", idGenre);
    formData.append("id_author", idAuthor);
    // =============================================//
    // set method and url
    let data = {
      ConUrl:
        modalTitle === "Add Books"
          ? `${process.env.REACT_APP_URL}books`
          : `${process.env.REACT_APP_URL}books/${id}`,
      Method: modalTitle === "Add Books" ? `POST` : `PUT`,
    };
    // =============================================//
    // action add data and update data
    props
      .addData(data, formData)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: `${modalTitle} success`,
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

  // ==============================================================================
  // function for set state to default
  let CloseModal = () => {
    setModal(false);
    setTitle("");
    setDiscrption("");
    setIdAuthor("");
    setStok("");
    setIdGenre("");
    setModalTitle("Add Books");
    setAction("AddBooks");
  };

  const { buttonLabel, className } = props;

  return (
    <>
      {/* ============================================================================== */}
      {/* modal */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <form onSubmit={ActionBooks}>
          <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="exampleEmail"
                  placeholder="Title Books"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Author</Label>
                <Input
                  value={idAuthor}
                  onChange={(e) => setIdAuthor(e.target.value)}
                  type="select"
                  name="select"
                  id="exampleSelect"
                >
                  {props.authorCrud.data.map((allAuthor) => {
                    return (
                      <option value={allAuthor.id_author}>
                        {allAuthor.name_author}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Genre</Label>
                <Input
                  value={idGenre}
                  onChange={(e) => setIdGenre(e.target.value)}
                  type="select"
                  name="select"
                  id="exampleSelect"
                >
                  {props.genreCrud.data.map((allGenre) => {
                    return (
                      <option value={allGenre.id_genre}>
                        {allGenre.name_genre}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Upload Image</Label>
                <Input
                  onChange={(e) => setImage(e.target.files[0])}
                  color="warning"
                  type="file"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Desciption</Label>
                <Input
                  value={discription}
                  onChange={(e) => setDiscrption(e.target.value)}
                  value={discription}
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Stok</Label>
                <Input
                  onChange={(e) => setStok(e.target.value)}
                  value={stok}
                  type="text"
                  id="exampleEmail"
                  placeholder="Stok"
                />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">{modalTitle}</Button>
            <Button color="secondary" onClick={CloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>

      {/* =================================================================== */}
      {/* table */}

      <Row style={{ marginLeft: 80 }} noGutters>
        <Col md="12" xs="12">
          <Card body className={style.CardTable}>
            <Row>
              <Col md="6">
                <Button onClick={toggle} color="primary">
                  <i class="fa fa-plus" aria-hidden="true"></i> Add Books
                </Button>
              </Col>

              <Col md="6">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={style.Search}
                  type="text"
                  placeholder="Search"
                />
              </Col>
            </Row>
            <Table hover className={style.Table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Rak Books</th>
                  <th>Stok</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.booksCrud.data.map((allBooks) => {
                  return (
                    <tr>
                      <td>{allBooks.title}</td>
                      <td>{allBooks.name_author}</td>
                      <td>{allBooks.rak}</td>
                      <td>{allBooks.stok}</td>
                      <td>
                        <Button
                          onClick={ShowBooks(allBooks.id)}
                          color="primary"
                        >
                          <i
                            class="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </Button>
                        <Button
                          onClick={DeleteBooks(allBooks.id)}
                          color="danger"
                        >
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </Button>
                      </td>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  booksCrud: state.booksGet,
  authorCrud: state.authorGet,
  genreCrud: state.genreGet,
});
const mapDispatchToProp = {
  //=================================
  login,
  // ================================
  booksGet,
  addData,
  deleteBooks,
  // ================================
  showBooks,
  // ================================
  authorGet,
  // ================================
  genreGet,
};

export default connect(mapStateToProps, mapDispatchToProp)(BooksCrud);
