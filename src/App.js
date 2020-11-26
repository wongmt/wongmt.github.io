import React from 'react';
import './App.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import { Link, Route, Switch } from "react-router-dom";



/*
function App() {
  return (
	<div className="App">	
	<div>
	<Header name="M Wong" sub_title="My personal site" />
	<nav className="Links">
	<Link to="/">HOME</Link> | <Link to="/cv">CV</Link> | <Link to="/photos">Photos</Link> | <Link to="/privacy">Privacy</Link>
	</nav>
	<Route exact={true} path="/" component={Home} />
	<Route exact={true} path="/cv" component={CV} />
	<Route exact={true} path="/photos" component={Photos} />
	<Route exact={true} path="/privacy" component={Privacy} />
	</div>

    </div>	
  );
}*/

function App() {
    return (
	
	<div className="App">
	<div>
	<Header name="M Wong" sub_title="My personal site" />
	<nav className="Links">
	<Link to="/">HOME</Link> | <Link to="/cv">CV</Link> | <Link to="/photos">Photos</Link> | <Link to="/privacy">Privacy</Link>
	</nav>     
    <Route path="/" component={Home} exact />
    <Route path="/cv" component={CV} />
    <Route path="/photos" component={Photos} />
	<Route path="/privacy" component={Privacy} />		
    </div>
	</div>
    );
}

export default App;
