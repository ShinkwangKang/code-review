import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";

const isLoggedIn = false;

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/protected">인증된 사람만..</Link>
  </nav>
);

const SignIn = () => (
  <div>
    <input placeholder="ID" type="text" />
    <input placeholder="PW" type="password" />
  </div>
);

const ProtectedPage = () => <h2>인증된 페이지</h2>;

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route
        path="/signin"
        render={() => (isLoggedIn ? <Redirect to="protected" /> : <SignIn />)}
      />
      <Route
        path="/protected"
        render={() =>
          isLoggedIn ? <ProtectedPage /> : <Redirect to="/signin" />
        }
      />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
