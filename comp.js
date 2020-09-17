Vue.component('navcomponent', {
		template: '<div id="nav"><a href="index.html">Home</a> | <a href="privacy.html">Privacy</a></div>'
})

var vm = new Vue({
   el: '#mynav'
})
