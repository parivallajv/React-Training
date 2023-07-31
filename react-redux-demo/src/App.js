import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCream from "./components/HooksIceCream";
import IceCreamContainer from "./components/IceCreamContainer";
import  store  from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer/>
      {/* <CakeContainer></CakeContainer> */}
      {/* <IceCreamContainer/> */}
      <HooksIceCream/>
    </Provider>
  );
}

export default App;
