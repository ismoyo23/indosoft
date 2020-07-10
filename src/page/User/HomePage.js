import React, { useState, useEffect } from "react";
import style from "../../styles/Users/Navbar.module.css";
import Navbar from "../../component/theme/users/NavbarPage";
import HomePage from "../../component/body/users/HomePage";
import SlideCard from "../../component/body/users/SlideCard";
import SlideShow from "../../component/body/users/SlideShow";
import PaginationPage from "../../component/body/users/PaginationPage";
import axios from "axios";
import { Row, Container } from "reactstrap";
function HomeUsers(props) {
  // ==========================================================================
  // state
  let [allBooks, setAllBooks] = useState([]);
  let [Search, setSearch] = useState("");
  let [Genre, SetGenre] = useState("");
  let [sort, setSort] = useState("");

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
    }
  });
  // =============================================================================
  //funtion for call data books
  let getAllBooks = () => {
    let SearchBooks = Search === "" ? "" : `&search=${Search}&field=title`;
    let genre =
      Genre === "" ? "" : `&search=${Genre}&field=book_detail.id_genre`;
    let SortBooks = sort === "ASC" ? `/?sort=${sort}` : `/?sort=${sort}`;

    axios({
      method: "GET",
      url: `http://localhost:3000/books${SortBooks}${SearchBooks}${genre}`,
    }).then((response) => {
      setAllBooks(response.data.data);
    });
  };

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
        <header className={style.headerBooks}>List Books</header>
        <Row>
          {allBooks.map((allBooks) => {
            return <HomePage allBooks={allBooks} />;
          })}
        </Row>
      </Container>

      {/* =============================================================== */}
      {/* Pagination Component */}
      <Container style={{ marginTop: "30px" }}>
        <PaginationPage />
      </Container>
    </>
  );
}

export default HomeUsers;
