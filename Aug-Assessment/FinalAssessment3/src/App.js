import ReduxComponent from "./components/ReduxComponent";
import ReduxComponent2 from "./components/ReduxComponent2";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ReduxComponent2 />
        <ReduxComponent />
      </Provider>
    </div>
  );
}

export default App;
