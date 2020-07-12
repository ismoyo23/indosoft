import React, { useState, useEffect } from "react";
import style from "../../styles/Users/Navbar.module.css";
import Navbar from "../../component/theme/users/NavbarPage";
import HomePage from "../../component/body/users/HomePage";
import SlideCard from "../../component/body/users/SlideCard";
import SlideShow from "../../component/body/users/SlideShow";
import PaginationPage from "../../component/body/users/PaginationPage";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Row,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
function HomeUsers(props) {
  let history = useHistory();
  // ==========================================================================
  // state
  let [allBooks, setAllBooks] = useState([]);
  let [Search, setSearch] = useState("");
  let [Genre, SetGenre] = useState("");
  let [sort, setSort] = useState("");
  let [page, setPage] = useState("");
  // ==========================================================================
  // Componenet did Mount Hooks version
  useEffect(() => {
    getAllBooks();
  }, []);

  // ===========================================================================
  // component did update for update data after search
  useEffect(() => {
    if (Search != "") {
      getAllBooks();
    } else if (Genre != "") {
      getAllBooks();
    } else if (sort == "DESC") {
      getAllBooks();
    } else if (page != "") {
      getAllBooks();
    }
  });
  // =============================================================================
  // funtion for push param pagination
  let paginationBooks = (event) => {
    event.preventDefault();
    setPage("2");
    console.log("ok");
  };
  // =============================================================================
  //funtion for call data books
  let getAllBooks = async () => {
    let SearchBooks = Search === "" ? "" : `&search=${Search}&field=title`;
    let genre =
      props.match.params.category == undefined
        ? ""
        : `&search=${props.match.params.category}&field=genre.name_genre`;
    let SortBooks =
      props.match.params.sort == undefined ? `/?sort=ASC` : `/?sort=DESC`;
    let pageBooks = page === "" ? `&page=1` : `&page=1${page}`;
    await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}books${SortBooks}${pageBooks}${SearchBooks}${genre}`,
    }).then((response) => {
      setAllBooks(response.data.data);
    });
  };

  // ================================================================================
  // for value pagination
  let pagination = [];
  for (let i = 1; i <= allBooks.length / 6; i++) {
    pagination.push([i]);
  }

  return (
    <>
      {/* =============================================================== */}
      {/* Navbar Component */}
      <Navbar
        sort={setSort}
        valSort={sort}
        valGenre={Genre}
        genre={SetGenre}
        value={Search}
        Search={(e) => setSearch(e.target.value)}
      />

      {/* =============================================================== */}
      {/* Component Slide Show */}
      <SlideShow />
      {/* =============================================================== */}
      {/*  Component Slide Card */}
      <SlideCard />
      {/* =============================================================== */}
      {/* List Books */}
      <Container>
        <header className={style.headerBooks}>
          List Books {props.match.params.category}
        </header>
        <Row>
          {allBooks.map((allBooks) => {
            return <HomePage allBooks={allBooks} />;
          })}
        </Row>
      </Container>

      {/* =============================================================== */}
      {/* Pagination Component */}
      <Container style={{ marginTop: "30px" }}>
        <Pagination
          className="d-flex justify-content-center"
          aria-label="Page navigation example"
        >
          <PaginationItem>
            <PaginationLink />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          {pagination.map((page) => {
            return <PaginationPage pageBooks={paginationBooks} data={page} />;
          })}
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </Container>
    </>
  );
}

export default HomeUsers;
