import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
		<div id="header">
        <h1> M. Wong</h1>
		<h3> My personal site </h3>
		</div>
		<p>	Welcome to my personal website. I am a researcher in computer vision 
			and machine learning with Ph.D in Computing, M.Sc & B.Sc(Hons.) in 
			Electronic Engineering. I have experience in Python, Java, Kotlin, C++, 
			PHP and Javascript. I also have strong interest in web app 
			development using Python and Javascript. This site is built by using the 
			React Javascript framework, Javascript, HTML and CSS.</p>
		<h2>Experience and skills</h2>
		<p>Programming languages: Python, Javascript, C++, Java, Kotlin, PHP</p>
		<p>Web frameworks: Django, Flask, React JS, Vue JS and CodeIgniter</p>
		<p>Computer vision software libraries: OpenCV, scikit-image</p>
		<p>Machine learning software libraries: Tensorflow, Weka</p>
      
		<h2>About this site</h2>
		<p>This is my personal site to show some brief informaton about myself 
		including my brief CV. This site is built by using React JS 
		framework, HTML and CSS.</p>
		<h2>Contact email:</h2> mwong[at]mwongsite.com, replace [at] by @
		<p>	If you contact the site author by email, your email address and any	
			information you supplied to the site author will be kept in the email 
			account of the site author.</p>
		<p>	This site might use cookies to improve the browsing experience of the site 
			visitors. If you continue to use the site, it will be assumed you agree to 
			the use of cookies</p>
		
		<p>	This site is under construction.</p>
		
		</div>
		)
}
}
ReactDOM.render(<App />, document.getElementById('root'))