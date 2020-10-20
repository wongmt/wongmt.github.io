check_cookie();
function agree_privacy() {
	//document.getElementById('notice').style.visibility='hidden';
	document.getElementById("notice").style.display = "none";
	document.cookie = "myagreebutton1=agree";
}

function check_cookie() {
	var check=document.cookie.indexOf('myagreebutton1');
	if (check != -1) {
		document.getElementById("notice").style.display = "none";
	}
}

