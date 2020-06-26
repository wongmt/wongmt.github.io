'use strict';

const c = React.createElement;
class Notice extends React.Component {

    render() {
		return (	        
		'Similar to many other websites, this site uses cookies in order to the performance of the website and provide better '+
		'web surfing experience for site visitors. If you continue to use this site, it will be assumed that you agree to the use of '+
		'cookies. You can read more details about the privacy policy in the navigation menu at the top if you are interested.');
	}
}

const myContainer = document.querySelector('#notice_container');
ReactDOM.render(c(Notice), myContainer);
