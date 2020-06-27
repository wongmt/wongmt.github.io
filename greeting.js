'use strict';

class Greeting extends React.Component {

    render() {
		return ('Welcome to my personal website. I am a researcher in computer vision & '+
			'machine learning with Ph.D in Computing, M.Sc & B.Sc(Hons.) in Electronic Engineering. '+
		        'I have experience in Python, Java, C++, PHP and Javascript. I also have stong interest ' +
		        'in web app development and I have experience in Django, Flask, React JS and CodeIgniter.');
	}
} 

const greetingContainer = document.querySelector('#greeting_container');
ReactDOM.render(React.createElement(Greeting), greetingContainer);
