// import logo from './logo.svg';
import "./App.css";
// import Button from './Button/Button.styles';
// import styled from "styled-components";
// import StyledButton from 'Button'
import { FancyButton,StyledButton,SubmitButton} from "./Button";



function App() {
  return (
    <div className="App">
      <StyledButton type="submit">SUBMIT</StyledButton>
      <br />
      <br />
      <StyledButton vari="outline">LOGIN</StyledButton>
      <br />
      <br />
      <FancyButton>Fancy Button</FancyButton>
      <br />
      <br />
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}
export default App;
