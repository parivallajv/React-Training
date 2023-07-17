import styled, { CSS } from "styled-components";

const Button = styled.button`
  background-color: pink;
  color: white;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 20px;
`;

function Login() {
  return (
    <div id="loginPage">
      <form>
        <input type="text" placeholder="Email address" id="mail" /> <br />
        <input type="password" placeholder="Enter Password" id="pass" /> <br />
        <Button>SUBMIT</Button>
      </form>
    </div>
  );
}

export default Login;
