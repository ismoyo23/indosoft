import React, { useState, useEffect } from "react";
import style from "../../styles/Users/Navbar.module.css";
import Navbar from "../../component/theme/users/NavbarPage/index.js";
import HomePage from "../../component/body/users/HomeComponent";

import footerComponent from "../../component/body/users/FooterComponent";
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
import FooterComponent from "../../component/body/users/FooterComponent";
function HomeUsers(props) {
  console.log("data");

  console.log(props, "params");
  // ==========================================================================
  // state
  let [allBooks, setAllBooks] = useState([]);
  let [Search, setSearch] = useState("");
  let [Genre, SetGenre] = useState("");
  let [sort, setSort] = useState("");
  let [page, setPage] = useState("");
  // ==========================================================================

  // =============================================================================
  // funtion for push param pagination
  let paginationBooks = (event) => {
    event.preventDefault();
    setPage("2");
    console.log("ok");
  };

  // ================================================================================
  // for value pagination
  let pageSum = allBooks.length <= 12 ? 12 / 6 : allBooks.length;
  let pagination = [];
  for (let i = 1; i <= pageSum; i++) {
    pagination.push([i]);
  }

  return (
    <>
      {/* =============================================================== */}
      {/* Navbar Component */}
      <Navbar sort={props.match.params.sort} />

      {/* =============================================================== */}
      {/* List Books */}
      <HomePage
        searchData={props.match.params.name}
        category={props.match.params.category}
        sort={props.match.params.sort}
      />
      <FooterComponent />
      {/* =============================================================== */}
      {/* Pagination Component */}
      <Container style={{ marginTop: "30px" }}>
        {/* <Pagination
          className="d-flex justify-content-center"
          aria-label="Page navigation example"
        >
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          {pagination.map((page) => {
            return <PaginationPage pageBooks={paginationBooks} data={page} />;
          })}
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination> */}
      </Container>
    </>
  );
}

export default HomeUsers;
