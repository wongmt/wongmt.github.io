Vue.component('myheader', {
		template: '<div><div id="header"><h1>M Wong</h1><h3>My personal site</h3></div>'+
					'<div id="nav"><a href="index.html">Home</a> | '+
					'<a href="cv.html">Resume</a> | ' +
					'<a href="photos.html">Photos</a> | ' +
					'<a href="privacy.html">Privacy</a></div></div>'
})

var vm = new Vue({
   el: '#siteheader'
})
