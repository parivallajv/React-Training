import { styled } from "styled-components";

export const Div = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  text-decoration: none;
  width: 320px;
  // &:hover {
  // box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
  // }
`;

export const H2 = styled.h2`
  font-size: 22px;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #f1356d;
`;

export const H4 = styled.h2`
  font-size: 15px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: blue;
`;

export const H1 = styled.h1`
  font-size: 18px;
  align-items: center;
  text-align: left;
  color: black;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #24a0ed;
  margin-right: 20px;
  color: white;
  border: none;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5%;
`;

export const FileInput = styled.input`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-column: auto auto auto auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: center;
  margin: 0 auto;
`;

export const GridItem = styled.div`
  display: flex;
  // width:350px;
  justify-content: center;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;
