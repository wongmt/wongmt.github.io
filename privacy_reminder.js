document.getElementById('notice_container').innerHTML= '<div id="notice">'+
	'<p>Similar to many other websites, this site uses '+ 
	'cookies to improve the browsing experience of site visitors. '+ 
	'If you continue to use this site, it will be assumed you agree '+ 
	'to the use of cookies. Please click the "Agree" button to '+
	'continue browsing. ' +
	'<button onclick="agree()">Agree</button>'+
	'</p></div>';
	
function agree() {
	document.getElementById("notice").style.display = "none";
	document.cookie = "myagreebutton1=agree";
}
