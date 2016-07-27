$(document).ready(function(){
		console.log('Oh hey there, welcome to the console. Try typing- Commands()');
        $("#name").typed({
            strings: ["Joe Babbitt"],
            typeSpeed: 100,
            showCursor: false,
        });
        $('.fa-snapchat-ghost').click(snapcode)
        $('.fa-times').click(unsnapcode);
    });
function snapcode(){
	$('#dropdown').animate({
		top: '20%',
	});
	droppeddown = true;
}
function unsnapcode(){
		$('#dropdown').animate({
		top: '-100%',
		});
}
function Commands(){
	console.log('List of commands:\nplay: plays music (random song from list of 5);\nstop: stops music;\nbgcolor("color"): defines background color (use any css color);\ntype("name"): types out any name in addition to mine;')
}
function bgcolor(color){
	$('body').css('background-color', color);
}
function type(name){
	$("#name").typed({
            strings: ["Joe Babbitt", name],
            typeSpeed: 100,
            showCursor: false,
    });
}
function play(){
	var songs = {
		0: {
			title: 'Goodbye Sadness',
			artist: 'future james',
			link: 'https://theartistunion.com/tracks/173dfe',
			yt: 'UfqBrpScwCM',
		},
		1: {
			title: 'Velvet Cake',
			artist: 'qole',
			link: 'https://soundcloud.com/qole/velvetcake',
			yt: 'PSQsYZiqF7U',
		},
		2: {
			title: 'Spark [extended version]',
			artist: 'Maxwell Young',
			link: 'https://soundcloud.com/maxwell_young/spark-extended',
			yt: 'Fd2eEmzpbBo',
		},
		3: {
			title: 'Frisbee',
			artist: 'Andrew Applebee',
			link: 'https://soundcloud.com/andrewapplepie/frisbee',
			yt: 'UT3edR1-D0U',
		},
		4: {
			title: 'MMHHMM',
			artist: 'LiamLRY',
			link: 'https://soundcloud.com/liamlry/mmhhmm',
			yt: 'dtlniwdXjlU',
		},
	}
	var num = Math.floor((Math.random() * 4));
	$('.song').append('<iframe id="ytplayer" type="text/html" style="display: none;" src="https://www.youtube.com/embed/'+songs[num].yt+'?autoplay=1&origin=http://joebabbitt.com"frameborder="0"></iframe>');
	console.log('Playing: '+songs[num].title+' by '+songs[num].artist+'\nbe sure to go and support the artist by giving a listen and buying the song :)\nlink to this song:'+songs[num].link);
}
function stop(){
	$('.song').html(' ');
}