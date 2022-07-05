import React from "react";
import styled from "styled-components";

const TableStyles = styled.div``;

const Table = ({ children }) => {
  return (
    <TableStyles>
      <table>{children}</table>
    </TableStyles>
  );
};

export default Table;
