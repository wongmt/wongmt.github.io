import React from 'react';
import './App.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';

import { Link, Route, Switch } from "react-router-dom";

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

function App() {
  return (

	<div className="App">
	
	<div>
	<Header />
	<br />
	
	<nav>
	<Link to="/home">HOME</Link> | <Link to="/cv">CV</Link> | <Link to="/privacy">Privacy</Link>
	</nav>
		
	<Route path="/home" component={Home} />
	<Route path="/cv" component={CV} />
	<Route path="/privacy" component={Privacy} />
	</div>
	
	<p>This site might use cookies in order to improve the web browsing experience of users.
	If you continue to use this site, it will be assumed you agree to the use of cookies.</p>
    </div>
	
  );
}

export default App;