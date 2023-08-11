import React from "react";
import Background from "./sunny-side/images/desktop/image-header.jpg";

import Navbar from "./sunny-side/Navbar";
import { MainContainer } from "./sunny-side/sunny-styles";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainContainer>
          <Navbar />
          <img src={Background} width="200px" height="200px" alt="rtrt" />
          <img src="./sunny-side/images/desktop/image-header.jpg" alt="rtrtr" />
        </MainContainer>
      </div>
    );
  }
}

export default App;
