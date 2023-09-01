import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const MainDiv = styled.div`
  margin-left: 50px;
`;

export const ErrorMessage = styled.p`
  font-family: sans-serif;
  color: red;
`;
