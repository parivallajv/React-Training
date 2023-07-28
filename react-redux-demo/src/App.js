import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './Redux/cake/Store'
import CakeContainer from './Components/cakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer></CakeContainer>
    </div>
    </Provider>
  );
}

export default App;
