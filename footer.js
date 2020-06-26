'use strict';

class Footer extends React.Component {

    render() {
		return (	        
		'Updated on 26-6-2020'
		);
	}
}

const footerContainer = document.querySelector('#footer_container');
ReactDOM.render(React.createElement(Footer), footerContainer);