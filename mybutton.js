'use strict';

const e = React.createElement;


class MyButton extends React.Component {

  constructor(props) {

    super(props);
    this.state = { accepted: false };
  }

  render() {
    if (this.state.accepted) {
		document.getElementById("notice").style.display="none";
		document.cookie="myacceptbutton1=yes";
		return("");
    }

    return e(
	    
      'button',
      { onClick: () => this.setState({ accepted: true }) },
      'Similar to many other websites, this site uses cookies in order to provide better web surfing experience for visitors. If you continue to use this site, it will be assumed that you agree to the use of cookies. Please click HERE if you accept the use of cookies and continue browsing in this site. You can read more details about the privacy information in the navigation menu at the top if interested.'
    );
  }
}

const domContainer = document.querySelector('#mybutton_container');
ReactDOM.render(e(MyButton), domContainer);
