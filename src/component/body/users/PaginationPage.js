import React, { useEffect, useState } from "react";
import { PaginationItem, PaginationLink } from "reactstrap";

function PaginationPage(props) {
  return (
    <>
      <PaginationItem>
        <PaginationLink onClick={props.pageBooks}>
          {props.data}
        </PaginationLink>
      </PaginationItem>
    </>
  );
}

export default PaginationPage;
