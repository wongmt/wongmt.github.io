function button_response() {
	var a= document.getElementsByClassName("notice");
	for (i=0; i< a.length; i++)
		a[i].style.display= "none";
	document.cookie="myacceptbutton1=yes";
}