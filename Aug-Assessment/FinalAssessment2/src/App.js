import { FlexRowMain, MainContainer } from "./styles/ProfileStyles";
import ChartSection from "./components/ChartSection";
import ProfileSection from "./components/ProfileSection";
import RankComponent from "./components/RankComponent";
import ScoreSection from "./components/ScoreSection";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <ProfileSection />
        <ScoreSection />
        <FlexRowMain>
          <ChartSection />
          <RankComponent />
        </FlexRowMain>
      </MainContainer>
    </div>
  );
}

export default App;
