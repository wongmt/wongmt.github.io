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
		
		<div className="Links">
        <p><a className="App-link"
          href="https://wongmt.github.io/mysite/cv.html" >My CV</a>&nbsp; | &nbsp; 
		  <a className="App-link"
          href="https://wongmt.github.io/mysite/privacy.html" >Privacy policy</a></p> 
		</div>
		
		<div className="Intro">
		<p>	Welcome to my personal website. I am a researcher in 
			computer vision and machine learning with Ph.D in 
			Computing, M.Sc & B.Sc(Hons.) in Electronic Engineering.
			I have experience in Python, Java, C++, PHP, Javascript and Kotlin.
			I also have strong interest in web app development using Python 
			and Javascript, and mobile app development using Java and Kotlin. 
			This site is built by using the React Javascript framework, Javascript,
			HTML and CSS. This site is hosted by GitHub Pages.</p>
			
			<h2>Experience and skills</h2>
			<ul><li>Programming languages: Python, Javascript, C++, Java, Kotlin, PHP</li>
			<li>Web frameworks: Django, Flask, ReactJS, VueJS and CodeIgniter</li>
			<li>Computer vision software libraries: OpenCV, scikit-image</li>
			<li>Machine learning software libraries: Tensorflow, Weka</li>
			<li>Mobile app development: Kotlin, Java, Android Studio</li></ul>
		</div>
		
		<p>This site might use cookies in order to improve the web browsing experience of users.
			If you continue to use this site, it will be assumed you agree to the use of cookies.</p>
      </header>
    </div>
  );
}
export default App;