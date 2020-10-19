import React from 'react';

function Photos() {
  return (
    <div className="Photo">
	<h1>Photos</h1>
	<h3>UTS Haymarket Building 5, University of Technology Sydney</h3>
	<p>Date: 19-10-2020</p>
	<p>UTS Haymarket Building 5 of University of Technology Sydney, in city of 
	   Sydney, NSW, Australia.</p>
	<img src={require('./images/uts-bldg5r.jpg')} alt="Photo image" />
	<br /><br />
	
	</div>
  );
}
export default Photos;	
