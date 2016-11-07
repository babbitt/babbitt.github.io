var scplayer;
$(document).ready(function(){
		console.log('Oh hey there, welcome to the console. Try typing- Commands()');
        $("#name").typed({
            strings: ["Joe Babbitt"],
            typeSpeed: 100,
            showCursor: false,
        });
        $('.fa-snapchat-ghost').click(snapcode);
        $('#bio').click(bio);
        $('.unsnap').click(unsnapcode);
        $('.unbio').click(unbio);
        $('#privacybutton').click(privacy);
        $('.unprivacy').click(unprivacy);
    });
function privacy(){
	$('#privacypolicy').animate({
		bottom: '0%',
	});
}
function unprivacy(){
	$('#privacypolicy').animate({
		bottom: '-100%',
	});
}
function bio(){
	$('#biodropdown').animate({
		top: '0%',
	});
}
function unbio(){
	$('#biodropdown').animate({
		top: '-100%',
		});
}
function snapcode(){
	$('#dropdown').animate({
		top: '20%',
	});
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
			id: '231547410',
		},
		1: {
			title: 'Velvet Cake',
			artist: 'qole',
			link: 'https://soundcloud.com/qole/velvetcake',
			id: '234183211',
		},
		2: {
			title: 'Spark [extended version]',
			artist: 'Maxwell Young',
			link: 'https://soundcloud.com/maxwell_young/spark-extended',
			id: '225760351',
		},
		3: {
			title: 'Frisbee',
			artist: 'Andrew Applebee',
			link: 'https://soundcloud.com/andrewapplepie/frisbee',
			id: '252594565',
		},
		4: {
			title: 'MMHHMM',
			artist: 'LiamLRY',
			link: 'https://soundcloud.com/liamlry/mmhhmm',
			id: '199862040',
		},
	}
	var num = Math.floor((Math.random() * 4));

	//Soundcloud player
	SC.initialize({
	  client_id: 'a048fa40abbe2f38469223411588dcfc'
	});

	// stream track id 293
	SC.stream('/tracks/'+songs[num].id).then(function(player){
	  scplayer = player;
	  player.play();
	});

	console.log('Playing: '+songs[num].title+' by '+songs[num].artist+'\nbe sure to go and support the artist by giving a listen and buying the song :)\nlink to this song:'+songs[num].link+'\nUses soundcloud api at http://soundcloud.com');
}
function stop(){
	scplayer.pause();
}