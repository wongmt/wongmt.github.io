import React from 'react';
import '../App.css';

function Photos() {
  return (
    <div className="Photo">
	<h1>Photos</h1>
	<h3>Australian Catholic University, Strathfield campus, NSW, Australia</h3>
	<p>Date: 6-10-2020</p>
	<p>The photo was taken in 2018 and it was uploaded to this site in 6-10-2020.</p>
	<img src={require('./images/acujs.jpg')} alt="Photo image" />
	</div>
  );
}
export default Photos;	
