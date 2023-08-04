import "./App.css";
import InputForm from "./redux/FormContainer/InputForm";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InputForm />
      </Provider>
    </div>
  );
}

export default App;
