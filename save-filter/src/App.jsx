import ProtectedPage from "./Components/ProtectedPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { HomePage } from "./Components/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import useAuth from "./useAuth";
import { Button, Card, Input } from "antd";
import HomePage from "./Components/HomePage";
import { Card2, RowDiv } from "./StyledComponents";

function App() {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <div className="App">
      <Router>
        <Card>
          <h2>Protected Route Task</h2>
          <RowDiv>
            <Link to="/home">Home Page</Link>

            <Link class="filter-page-link" to="/filterPage">
              Filter Page
            </Link>
          </RowDiv>
        </Card>

        {isAuth ? (
          <>
            <div>You are logged in..</div>

            <Button type="primary" className="ui button blue" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Card2>
              <div>You are logged out..</div>
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Password" />
              <Button type="primary" onClick={login}>
                Login
              </Button>
            </Card2>
          </>
        )}

        <Routes>
          {/* <Route path="/" exact element={HomePage} /> */}
          <Route element={<HomePage />} path="/home"></Route>
          <Route element={<ProtectedRoutes isAuth={isAuth} />}>
            <Route element={<ProtectedPage />} path="/filterPage" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
