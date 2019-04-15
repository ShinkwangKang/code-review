import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

const Links = () => (
    <nav>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/menu">Menu</Link></div>
    </nav>
);

const Home = () => <h1>Home</h1>;
const Food = () => <div>food</div>;
const Drinks = () => <div>drinks</div>;
const Sides = () => <div>sides</div>;
const Menu = () => (
    <div>
        <div><h1>Menu</h1></div>
        <div>
            <nav>
                <div><Link to="/menu/food">food</Link></div>
                <div><Link to="/menu/drinks">drinks</Link></div>
                <div><Link to="/menu/sides">sides</Link></div>
            </nav>
        </div>
    </div>
)

const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/menu/food" component={Food} />
            <Route path="/menu/drinks" component={Drinks} />
            <Route path="/menu/sides" component={Sides} />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));