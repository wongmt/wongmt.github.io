var button_app = new Vue({
  el: '#button_container',
  data: {
			seen: true		
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

		

