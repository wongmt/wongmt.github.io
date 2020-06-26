'use strict';

class Experience extends React.Component {

    render() {
		return ('Experience/skills: Python, C/C++, Java, PHP, Javascript, '+
					'Django, Flask, React JS, CodeIgniter');
	}
} 

const expContainer = document.querySelector('#experience_container');
ReactDOM.render(React.createElement(Experience), expContainer);