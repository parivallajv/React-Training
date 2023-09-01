import { Provider } from "react-redux";
import store from "./redux/store";
import ProfileSummary from "./components/ProfileSummary";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProfileSummary />
        <UserData />
      </Provider>
    </div>
  );
}

export default App;
