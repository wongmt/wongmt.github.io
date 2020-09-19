Vue.component('myheadercom', {
		template: '<div><div id="header"><h1>M Wong</h1></div>'+
					'<div id="nav"><a href="index.html">Home</a> | '+
					'<a href="cv.html">Privacy</a>' +
					'<a href="privacy.html">Resume</a></div></div>'
})

var vm = new Vue({
   el: '#myheader'
})
