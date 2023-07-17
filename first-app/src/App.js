// import logo from './logo.svg';
import './App.css';
import Background from './background.js';
// import backGround from './background.js';
import Aboutpage from './about';
import profLogo from './account_circle_FILL0_wght400_GRAD0_opsz48.png'
import Login from './Login'



function App() {
  return (
    <div className="App">
      <div id="header">
      <header id="top-left">
        <h2>JAMES CONSULTING</h2>

      </header>
      <header id="top-right">
        <a href='./about.js'>About</a>
        <a href='b'>Projects</a>
        <a href='c'>Services</a>
        <a href='d'>Plans & Pricing</a>
        <a href='e'>Tools & Tips</a>
        <a href='f'>Contact</a>
        <a href='gj'><img src={profLogo} id='profLogo' alt='prof-Logo'/>Login</a>
      </header>
      </div>
      
      <Background/>
      <Aboutpage/>
      <Login/>
      
      
    </div>
  );
}

export default App;
