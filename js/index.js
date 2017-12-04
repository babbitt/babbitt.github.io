//download video stuff
var stream1,stream2,stream3;
var vid1 = new XMLHttpRequest();
var vid2 = new XMLHttpRequest();
var vid3 = new XMLHttpRequest();

vid1.open('GET', 'vid/BTHS.mp4', true);
vid2.open('GET', 'vid/enjoyments.mp4', true);
vid3.open('GET', 'vid/tikenting.mp4', true);

vid1.responseType = 'blob';
vid2.responseType = 'blob';
vid3.responseType = 'blob';

vid1.onload = function() {
   if (this.status === 200) {
      var videoBlob1 = this.response;
       stream1 = URL.createObjectURL(videoBlob1);
   }
}
vid2.onload = function() {
   if (this.status === 200) {
      var videoBlob2 = this.response;
       stream2 = URL.createObjectURL(videoBlob2);
   }
}
vid3.onload = function() {
   if (this.status === 200) {
      var videoBlob3 = this.response;
       stream3 = URL.createObjectURL(videoBlob3);
   }
}

vid1.onerror = function() {
   console.log('whoops')
}
vid2.onerror = function() {
   console.log('whoops')
}
vid3.onerror = function() {
   console.log('whoops')
}

vid1.send();
vid2.send();
vid3.send();

$(document).ready(function(){
	//Stop Videos on hover
	$('.button').hover(function(){
		if(document.getElementById("bgvid").src){
			$('#bgvid').animate({"opacity":0},250,function(){
				document.getElementById("bgvid").pause()
			})
		}
	},function(){
		if(document.getElementById("bgvid").src){
			document.getElementById("bgvid").play()
			$('#bgvid').animate({"opacity":1},250)
		}
	});

	//On page-load
	setTimeout(function(){
		$('.item-row').css('opacity','1');
		loaded = setInterval(function(){
			if(stream1 && stream2 && stream3){
				$('#loading').html('')
				clearInterval(loaded);
			}
		},1000)
	},1500)
	//Go home
	$('#signature').click(function(){
		$('.button').animate({"opacity": 1},200,function(){
			$(this).css('display','block');
		});
		$('.name-svg').animate({"width": "100%"},500,function(){
			$('#bgvid').animate({'opacity':0},1000,function(){
				document.getElementById("bgvid").src="";
			});
		});
		$('.subtext').animate({'opacity':0},100, function(){
			$('.subtext').animate({'opacity':1},100);
		});
		$('.subtext').html("I make stuff.<br>Check out some stuff I do. (I also have a <a href=\"docs/resume.pdf\" target=\"_blank\">resume</a>)")
	})

	// School "page"
	$('#school').click(function(){
		$(this).animate({"opacity": 0,},200,function(){
			$(this).css('display','none');
		});
		$('.name-svg').animate({"width":'20vw'},500,function(){
			$('#bgvid').animate({'opacity':1},1000);
			document.getElementById("bgvid").src=stream1;
		});
		$('.subtext').animate({'opacity':1},100,function(){
			$(this).html('<img src="img/bthslogo.png" style="height:5em"/><b><p>I am a Junior currently attending Brooklyn Technical High School.<br>Brooklyn Tech is the largest high school in America with over 5,900 students and taking up the real estate of one whole city block.<br>I am currently on track to graduate with a Advanced Regents Diploma, CTE Certification, and Brooklyn Tech Diploma with accreditations from the National Honor Society.<br><br>Here are some of the more challenging classes I\'ve taken thus far:<br> <ul> <li>AP World History</li> <li>AP Computer Science Principles</li> <li>AP Capstone Seminar</li>  <li>AP United States History</li> <li>AP English Language</li> <li>AP Physics 1</li></p></b>');
			$(this).animate({'opacity':1},200);
			$('.button').css({"display": 'block'},100);
			$('.button').animate({"opacity": 1},100);
		})
	});
	$('#enjoyments').click(function(){
		$(this).animate({"opacity": 0,},200,function(){
			$(this).css('display','none');
		});
		$('.name-svg').animate({"width":'20vw'},500,function(){
			$('#bgvid').animate({'opacity':1},1000);
			document.getElementById("bgvid").src=stream2;
		});
		$('.subtext').animate({'opacity':0},100,function(){
			$(this).html('<p>In my free time I have been lucky enough to do the following:<br><br></p><b><img src="img/robotics.png" style="height:5em"/><p>I am an active member of my school\'s robotics team. <a href="http://bthsrobotics.com" target="_blank">FRC 334, the Techknights</a>. We work tirelessly both on and off season to design, program, and build robots that handle a multitude of tasks. I have been able to expand my engineering skills through this experience especially in programming, which is my division on the team.</p><br><img src="img/bsalogo.png" style="height:5em"/><img src="img/eagle.png" style="height:5em"/><p>When I\'m not in the lab (which I\'m convinced I might live in at this point) I am most likely helping out at my Boy Scout troop (Troop 662). I have been an active scout for 7 years to date. Recently (Nov. 2017) I obtained the rank of <i>Eagle Scout</i>. I am the Senior Patrol Leader of the troop and manage over 50 boys. We are a boy run troop and along with my Assistant and Patrol Leaders I aim to guide boys on the path to eagle and in doing so create the future leaders of tomorrow.</p><br><img src="img/earth.png" style="height:5em"><p>With my limited spare time I love to explore and travel. I was lucky enough to grow up with a family that was always up for adventure and had travel in their DNA. I\'ve become interested in intercultural interaction as I have traveled around the world and met so many new types of people. One of my favorite destinations was Berlin, Germany in no small part due to the fact that I was there for three weeks as part of the <a href="https://www.ciee.org/go-abroad/high-school-study-abroad/summer/germany/berlin/global-entrepreneurship" target="_blank">CIEE Summer Entrepreneurship Global Navigators program</a>. It was a great opportunity to study business and get to know a totally different culture in a setting of my fellow peers. This summer provided me with autonomy and experiences that have changed my viewpoints on life and approaching new ideas.</p></b>');
			$(this).animate({'opacity':1},200);
			$('.button').css({"display": 'block'},100);
			$('.button').animate({"opacity": 1},100);
		})
	});
	$('#tinkenting').click(function(){
		$(this).animate({"opacity": 0,},200,function(){
			$(this).css('display','none');
		});
		$('.name-svg').animate({"width":'20vw'},500,function(){
			$('#bgvid').animate({'opacity':1},1000);
			document.getElementById("bgvid").src=stream3;
		});
		$('.subtext').animate({'opacity':0},100,function(){
			$(this).html('<p><h5>Tinkenting<br>/\'t&#x026A;&#x014B;k&#x026A;n\'v&#x025B;nt&#x014B;/<br><i>verb</i><br>When the act of tinkering leads to an invention.</h5><br></p><b><img src="img/codelogo.png" style="height:5em"/><p>In my spare time I am an avid programmer. The highest compliment I\'ve been paid thus far was to be told that I program \'religiously\'. I have dabbled in Web Dev(JS & Node) Python, C#, and Java. My <a href="http://github.com/babbitt" target="_blank">Github</a> page is a little sparse but I\'m working on getting more content up there.</p><br><h5>Job Experience</h5><img src="img/bterminal.png" style="height:5em"/><p>In the summer of 2017 I was the youngest of 5 High School Engineering Interns at <a href="http://bloomberg.com" target="_blank">Bloomberg L.P.</a> I was integrated within a team of employees and given a project to oversee. The experience was meant to mimic that of a real employee, with deadlines, events, and of course countless code reviews. I learned an incredible amount about both programming and it\'s place in the corporate world. The main product of Bloomberg L.P. is the Bloomberg Terminal, software used in the financial industry. My project related to internal development tools and is in daily use. </p><br><i class="fa fa-lightbulb-o" style="font-size:5em" aria-hidden="true"></i><i class="fa fa-cogs" style="font-size:5em" aria-hidden="true"></i><p>Have an idea and looking for a programmer? I\'d love to help, I\'m always looking for new opportunities and ways to learn more. Even if your idea requires technologies I\'m not familiar with I\'m always looking for new things to learn. Reach out to me using the links below and we\'ll see what we can do together!</p></b>');
			$(this).animate({'opacity':1},200);
			$('.button').css({"display": 'block'},100);
			$('.button').animate({"opacity": 1},100);
		})
	});
});
