var button_app = new Vue({
  el: '#button_container',
  data: {
		seen: true,
		notice:	'<div id="notice"><p>Similar to many other websites, this site uses '+
				'cookies to improve the browsing experience of site visitors. '+
				'If you continue to use this site, it will be assumed you agree '+
				'to the use of cookies. Please click the "Agree" button to '+
				'continue browsing.</p></div>'
		},
  methods: {
				agree: function() { 
					this.seen= false
					document.cookie="myacceptbutton1=yes"
				},
		
				check_cookie: function() {
					var check=document.cookie.indexOf('myacceptbutton1');
					if (check != -1) {
						//document.getElementById("notice").style.display = "none";
						this.seen= false
					}
				}
			}
})

		

