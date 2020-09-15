Vue.component('headercomponent',{
   template : '<div><div id="header"><h1>M Wong</h1></div>	
				<div id ="nav">
				<a href="index.html">Home</a> |
				<a href="privacy.html">Privacy</a>
				</div></div>'
});
var vm = new Vue({
   el: '#head'
});
var vm1 = new Vue({
   el: '#head1'
});