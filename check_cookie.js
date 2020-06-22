	var check=document.cookie.indexOf('myacceptbutton1');
	if (check != -1) {
		var a= document.getElementsByClassName("notice");
		for (i=0; i< a.length; i++)
			a[i].style.display= "none";
	}
