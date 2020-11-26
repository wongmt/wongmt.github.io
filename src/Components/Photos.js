import React from 'react';

function Photos() {
  return (
    <div className="Photo">
	<h1>Photos</h1>
	<h3>UTS Haymarket Building 5, University of Technology Sydney</h3>
	
	<p>UTS Haymarket Building 5 of University of Technology Sydney, in city of 
	   Sydney, NSW, Australia.</p>
	<img src={require('./images/uts-bldg5r.jpg')} alt="Photo image" />
	<br /><br />
	
	<h3>Homebush Public School, Homebush, NSW, Australia</h3>
	<p>It is a primary school in Homebush, NSW, Australia.</p>
	<img src={require('./images/hps1.jpg')} alt="Photo image" />
	<br /><br />
	
	<h3>Australian Catholic University, Strathfield campus</h3>	
	<img src={require('./images/acupy.jpg')} alt="Photo image" />
	<br /><br />
	
	</div>
  );
}
export default Photos;	
