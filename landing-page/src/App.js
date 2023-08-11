import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Brand from "./components/Brand";
import Audience from "./components/Audience";
import Fruits from "./components/Fruits";
import Testimonal from "./components/Testimonal";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Caveat&family=DM+Sans:opsz,wght@9..40,800&family=Fraunces:opsz,wght@9..144,900&family=Jost:wght@800;900&family=Lato:wght@900&family=Poppins:wght@700&display=swap');
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Brand />
      <Audience />
      <Fruits />
      <Testimonal />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
