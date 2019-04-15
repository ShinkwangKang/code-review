import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

const App = () => (
    <Router>
        <div>
        {/* <Route path="/:page(\d{2}):subpage(\d{2})?" render={({match}) => ( */}
            React Advanced 실습 1
        <Route path="/:date(\d{4}\-\d{2}\-\d{2}):ext(\.[a-z]+)" 
            render={({match}) => (
            <div> 
                <h1>
                    Yes matched
                </h1>
                <div>date: {match.params.date}</div>
                <div>ext: {match.params.ext}</div>
            </div>
        )}/>
        
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));