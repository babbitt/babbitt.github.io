$(document).ready(function(){
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
		top: '30%',
	});
	droppeddown = true;
}
function unsnapcode(){
	console.log('test');
		$('#dropdown').animate({
		top: '-100%',
		});
}