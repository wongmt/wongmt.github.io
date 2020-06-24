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
    }

    return e(
      'button',
      { onClick: () => this.setState({ accepted: true }) },
      'Agree'
    );
  }
}

const domContainer = document.querySelector('#mybutton_container');
ReactDOM.render(e(MyButton), domContainer);
