import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Links = () => (
    <nav>
        <Link to="/?id=123">Inline</Link>
        <Link to={{pathname: '/', search: 'id=456&x=1'}}>Object</Link>
    </nav>
);

const App = () => (
    <Router>
        <div>
        React Advanced 실습 2
            <Links/>

            <Route path="/" 
                render={({match, location}) => (
                <div> 
                    <p>root</p>
                    <div>{JSON.stringify(match)}</div>
                    <div>{JSON.stringify(location)}</div>
                    <div>여기에 매치되는 쿼리 문자열의 id를 출력하세요.</div>
                </div>
            )}/>
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));