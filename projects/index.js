import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';

const Links = () => (
    <nav>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/old">Old</Link></div>
        <div><Link to="/new">New</Link></div>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Switch>
                <Route exact path="/" render={() => <h1>Home</h1>}/>
                <Route path="/new" render={() => <h1>New</h1>}/>
                <Route path="/old" render={() => <Redirect to="/new" />}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));