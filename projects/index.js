import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import "./App.css";

const Home = () => <h1>Home</h1>;

class Form extends React.Component {
  state = { dirty: false };
  setDirty = () => this.setState({ dirth: true });
  render() {
    return (
      <div>
        <h1>Form {this.state.dirty ? "작성중" : ""}</h1>
        <input type="text" onInput={this.setDirty} />
        <Prompt
          when={this.state.dirty}
          message={"저장되지 않는 데이터가 있습니다. 이동 하시겠습니까?"}
        />
      </div>
    );
  }
}

const App = () => (
  <div>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Route exact path="/" Component={Home} />
      <Route path="/form" Component={Form} />
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
