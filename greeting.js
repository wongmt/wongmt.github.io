'use strict';

class Greeting extends React.Component {

    render() {
		return (	        
		'Welcome to my homepage'
		);
	}
}

const greetingContainer = document.querySelector('#greeting_container');
ReactDOM.render(React.createElement(Greeting), greetingContainer);