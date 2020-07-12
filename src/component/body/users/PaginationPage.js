import React, { useEffect, useState } from "react";
import { PaginationItem, PaginationLink } from "reactstrap";
import { useHistory } from "react-router-dom";

function PaginationPage(props) {
  let history = useHistory();
  let handlePagination = (page) => (event) => {
    event.preventDefault();
    history.push(`/page/${page}`);
    window.location.reload();
  };
  return (
    <>
      <PaginationItem>
        <PaginationLink onClick={handlePagination(props.data)}>
          {props.data}
        </PaginationLink>
      </PaginationItem>
    </>
  );
}

export default PaginationPage;
