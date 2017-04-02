var scplayer;
$(document).ready(function(){
				$("#name").typed({
						strings: ["Joe Babbitt"],
						typeSpeed: 100,
						showCursor: false,
				});
				$("#privacypolicy").hide();
        $('#privacybutton').click(privacy);
        $('.unprivacy').click(unprivacy);
				$('.robotics').mouseenter(function(){
					$("#aboutstuff").typed({
							strings: ["FRC Team 334 is our school's robotics team. I have been a programmer on the team for two years I and am also the Web Designer for the team. We program primally in Java and write computer vision code in Python. "],
							typeSpeed: .5,
							showCursor: false,
					});
				})
				$('.scistorm').mouseenter(function(){
					$("#aboutstuff").typed({
							strings: ["A storm is brewing."],
							typeSpeed: .5,
							showCursor: false,
					});
				})
				$('.me').mouseenter(function(){
					$("#aboutstuff").typed({
							strings: ["I'm Joseph, a programmer in 10th grade at Brooklyn Technical High School. Get to know me better on <a href='https://www.instagram.com/joseph.babbitt' target='_blank_'><i class='fa fa-instagram' aria-hidden='true'></i></a>or<a href='img/snapcode.png' target='_blank_'><i class='fa fa-snapchat-ghost' aria-hidden='true'></i></a>"],
							typeSpeed: .5,
							showCursor: false,
					});
				})
			});
function privacy(){
	$("#privacypolicy").show();
	$('#privacypolicy').animate({
		bottom: '0%',
	});
}
function unprivacy(){
	$('#privacypolicy').animate({
		bottom: '-100%',
	});
	$("#privacypolicy").hide();
}
