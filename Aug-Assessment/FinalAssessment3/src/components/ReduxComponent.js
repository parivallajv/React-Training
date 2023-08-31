import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchData } from "../redux/asyncActions";
import {
  MainDiv,
  StyledTable,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "../styles";

const ReduxComponent = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    const authorizationToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6MTg5NzAwOTIzNX0.Ieqeccqd4e0E6w1zhuq52AafV3vR6OHPb79-OsCvuHI";
    fetchData(authorizationToken);
  }, []);

  const userData = useSelector((state) => state.data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <MainDiv>
        <h3>Redux Component - Api 2</h3>
      </MainDiv>
      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name Of User</TableHeaderCell>
            <TableHeaderCell>Tier Id</TableHeaderCell>
            <TableHeaderCell>slug</TableHeaderCell>
            <TableHeaderCell>Account Id</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.tier_category_id}</TableCell>
              <TableCell>{item.slug}</TableCell>
              <TableCell>{item.account_id}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
