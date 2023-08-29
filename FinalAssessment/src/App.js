/* eslint-disable no-sequences */
import Banner from "./components/Banner";
import PersonalInfo from "./components/PersonalInfo";
import { MainContainer, RightBanner } from "./styles";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <PersonalInfo />
        <Banner />
      </MainContainer>
    </div>
  );
}

export default App;
