import React from 'react';
import './App.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
	<div className="App">
	
	<div>
	<Header />
	<br />	
	<nav className="Links">
	<Link to="/home">HOME</Link> | <Link to="/cv">CV</Link> | <Link to="/privacy">Privacy</Link>
	</nav>	
	<Route exact={true} path="/" component={Home} />
	<Route exact={true} path="/home" component={Home} />
	<Route exact={true} path="/cv" component={CV} />
	<Route exact={true} path="/privacy" component={Privacy} />
	</div>

    </div>	
  );
}

export default App;
