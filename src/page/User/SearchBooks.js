import React from "react";
import SearchPage from "../../component/body/users/SearchPage";
import Navbar from "../../component/theme/users/NavbarPage";
function SearchBooks(props) {
  return (
    <>
      <Navbar />
      <SearchPage name={props.match.params.name} />
    </>
  );
}

export default SearchBooks;
