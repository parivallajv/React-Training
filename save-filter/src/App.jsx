import ProtectedPage from "./Components/ProtectedPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { HomePage } from "./Components/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import useAuth from "./useAuth";
import { Button } from "antd";

function App() {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <div className="App">
      <h2>Protected Route Task</h2>
      <Router>
        <nav>
          <h4>
            <Link to="/">Home Page</Link>
          </h4>
          <h4 >
            <Link class="filter-page-link" to="/filterPage">Filter Page</Link>
          </h4>
        </nav>
        {isAuth ? (
          <>
            <div>You are logged in..</div>
            <Button type="primary" className="ui button blue" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <div>You are logged out..</div>
            <Button type="primary" onClick={login}>
              Login
            </Button>
          </>
        )}
        <Routes>
          {/* <Route path="/" exact element={HomePage} /> */}
          <Route element={<ProtectedRoutes isAuth={isAuth} />}>
            <Route element={<ProtectedPage />} path="/filterPage" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
