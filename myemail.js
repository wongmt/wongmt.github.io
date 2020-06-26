'use strict';

class MyEmail extends React.Component {

    render() {
		return 'My contact email: mwong(at)mwongsite.com, replace (at) by @';
	}
} 

const emailContainer = document.querySelector('#myemail_container');
ReactDOM.render(React.createElement(MyEmail), emailContainer);