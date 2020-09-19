import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<div className="MyHeader">
        <h1>M. Wong</h1>
        <h3>My Personal Site</h3>
		</div>
		<br />
        <a className="App-link"
          href="https://wongmt.github.io/mysite/cv.html" >My CV</a>
		<a className="App-link"
          href="https://wongmt.github.io/mysite/privacy.html" >Privacy policy</a>  
		<br />
		<p>This site might use cookies in order to improve the web browsing experience of users.
			If you continue to use this site, it will be assumed you agree to the use of cookies.</p>
      </header>
    </div>
  );
}
export default App;