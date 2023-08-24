import logo from "./logo.svg";
import "./App.css";
import { useState, memo } from "react";

function Swatch({ color }) {
  console.log("swatch rendered", color);
  return (
    <div
      style={{ margin: 2, height: "70px", width: "70px", background: color }}
    ></div>
  );
}
const MemoedSwatch = memo(Swatch);

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  console.log("App rendered", appRenderIndex);

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Click Me
        </button>
      </div>
      <div>
        <MemoedSwatch color="red" />
        {/* <Swatch color="red" /> */}
      </div>
    </div>
  );
}

export default App;
