import React from 'react';

function Photos() {
  return (
    <div className="Photo">
	<h1>Photos</h1>
	<h3>UTS Haymarket Building 5, University of Technology Sydney</h3>
	<p>Date: 9-10-2020</p>
	<p>UTS Haymarket Building 5 of University of Technology Sydney, in city of 
	   Sydney, NSW, Australia.</p>
	<img src={require('./images/uts-bldg5.jpg')} alt="Photo image" />
	<br /><br />
	
	<h3>Homebush Public School, Homebush, NSW, Australia</h3>
	<p>Date: 7-10-2020</p>
	<p>The photo was taken in 2018 and it was uploaded to this site in 7-10-2020.</p>
	<p>It is a primary school in Homebush, NSW, Australia.</p>
	<img src={require('./images/hps1.jpg')} alt="Photo image" />
	<br /><br />
	<h3>Australian Catholic University, Strathfield campus, NSW, Australia</h3>
	<p>Date: 6-10-2020</p>
	<p>The photo was taken in 2018 and it was uploaded to this site in 6-10-2020.</p>
	<img src={require('./images/acujs.jpg')} alt="Photo image" />
	</div>
  );
}
export default Photos;	
