import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

const Links = () => (
    <nav>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/about">About</Link></div>
    </nav>
);

const Header = () => (
    <div className="header">
        <Route path="/:page" render={({match}) => <h1>{match.params.page}</h1>} />
    </div>
)

const Content = () => (
    <div>
        <Route path="/:page" render={({match}) => <div>{match.params.page} content</div>}/>
    </div>
)

const App = () => (
    <Router>
        <div>
            <Links />
            <Header />
            <Content />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));