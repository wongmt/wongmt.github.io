var app = new Vue({
  el: '#content_container',
  data: {
	content: 	'Welcome to my personal website. I am a researcher in ' +
				'computer vision and machine learning with Ph.D in ' +
				'Computing, M.Sc & B.Sc(Hons.) in Electronic Engineering. ' +
				'I have experience in Python, Java, C++, PHP, Javascript and Kotlin. ' +
				'I also have strong interest in web app development using Python ' +
				'and Javascript, and mobile app development using Java and Kotlin. ' +
				'There are two purposes of this site. ' +
				'One purpose is to show breifly my personal information in '+
				'this site and the other purpose is to use this site to learn '+
				'Javascript framework. This site is built by using the Vue '+
				'Javascript framework, Javascript, HTML and CSS.',
	skills_title: 'Experience and skills',
    skills:[		
		{text: 'Programming languages: Python, Javascript, C++, Java, Kotlin, PHP'},
		{text: 'Web frameworks: Django, Flask, React JS, Vue JS and CodeIgniter'},
		{text: 'Computer vision software libraries: OpenCV, scikit-image'},
		{text: 'Machine learning software libraries: Tensorflow, Weka'},
		{text: 'Mobile app development: Android Studio'}]
		}
})
		