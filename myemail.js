'use strict';

class MyEmail extends React.Component {

    render() {
		return('My contact email is mwong(at)mwongsite.com, replace (at) by @ ' + 
		       'If you contact the site author by email, your name, email address '+
		       'and other information you provide to the site author will be stored '+
		       'in email account of the site author.');
	}
} 

const emailContainer = document.querySelector('#myemail_container');
ReactDOM.render(React.createElement(MyEmail), emailContainer);
