import React from 'react';
import './srtles/index.scss';
// import { Provider } from 'react-redux';
// import store from './reduxProject/redux/Store';
import SampleImage from 'assets/SampleImage.js';
import { StyledDiv } from './components/Components';
// import FormDataDisplayer from './reduxProject/DataDisplayer';
// import MyForm from './reduxProject/FormContainer';
function App() {
  return (
    <div id='maindiv' >
      <h1>Hello React App</h1>
      <SampleImage></SampleImage>
      
    </div>

      // <Provider store={store} >
      //     <MyForm></MyForm>
      //     <FormDataDisplayer></FormDataDisplayer>
      //     <StyledDiv></StyledDiv>
      // </Provider>
  );
}

export default App;
