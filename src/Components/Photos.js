import React from 'react';
import '../App.css';

function Photos() {
  return (
    <div className="Photo">
	<h1>Photos</h1>
	<h3>Australian Catholic University, Strathfield campus, NSW, Australia</h3>
	<img src={require('../acu5.jpg')} alt="Photo image" />
	</div>
  );
}
export default Photos;	
