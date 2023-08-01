import { styled } from "styled-components";

export const RowDiv = styled.div`
  text-decoration: none;
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  margin-bottom: 10px;
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
  width:70px;
  text-align:center;
  background-color: #24a0ed;
  margin-right: 20px;
  color: white;
  border: none;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 2%;
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
  border:1px solid grey;
  

`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
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

export const ListItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 20px;

  .user-avatar {
    flex: 0 0 80px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-details {
    flex: 1;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 24px;
      margin: 0;
      color: #333;
    }

    p {
      font-size: 16px;
      color: #666;
      margin: 5px 0;
    }
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const h6=styled.h6`
color:red`