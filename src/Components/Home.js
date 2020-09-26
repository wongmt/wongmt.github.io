import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import CV from '../Components/CV';
import Privacy from '../Components/Privacy';

import { Link, Route, Switch } from "react-router-dom";

function Home() {
  return (

	<div className="Home">
		
		<h1>Home</h1>
		<div className="Intro">
		<p>	Welcome to my personal website. I am a researcher in 
			computer vision and machine learning with Ph.D in 
			Computer Scence, M.Sc & B.Sc(Hons.) in Electronic Engineering.
			I also have experience in web app and mobile app development.
			This site is built by using the React Javascript framework, Javascript,
			HTML and CSS. This site is hosted by GitHub Pages.</p>					
		</div>
		<p>This site might use cookies in order to improve the web browsing 
		experience of users. If you continue to use this site, it will be assumed 
		you agree to the use of cookies.</p>
    </div>	
  );
}

export default Home;