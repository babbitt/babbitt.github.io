MicroModal.init();
setTimeout(function () {
    TweenMax.to(".BingMinutes", 10, {
        rotation: 360,
        transformOrigin: "bottom",
        repeat: -1,
        ease: "linear"
    });
    TweenMax.to(".BingHours", 120, {
        rotation: 360,
        transformOrigin: "bottom",
        repeat: -1,
        ease: "linear"
    });
}, 1500);

setTimeout(function () {
    $('html').css("overflow", "scroll")
}, 2500)



$(document).ready(() => {
    if (getQueryVariable("noanimate")) {
        document.querySelector('nav').classList.add('override');
        document.querySelector('#content').classList.add('override');
    }
    $('nav').click(() => {
        history.back()
        $('.active').removeClass('active');
        $('html').removeClass('open')
    })

    openPage = (screenName) => {
        console.log(screenName);
        $('html').addClass('open')
        $('.active').removeClass('active');
        $(`#${screenName}`).addClass('active')
    }


    $('.item > .container').click((e) => {
        $('.inner-site-link').click(function () {
            window.document.title = `Joe Babbitt -` +$(this).attr('dest').replace(/\//g, '-').substring(1);
            openPage($(this).attr('dest').replace(/\//g, '-').substring(1));
            // history.pushState({
            //     moveTo: $(this).attr('dest').substring(1)
            // }, "", $(this).attr('dest').substring(1));
        })
        let screenName = String($(e.currentTarget).parent().attr('id')).replace(/-/g, "/");
        let screenNameclean = String($(e.currentTarget).parent().attr('id'));
        console.log(screenName, screenNameclean);
        if (window.location.pathname.substring(1) != screenName) {
            window.document.title = `Joe Babbitt - ${screenNameclean}`;
            history.pushState({
                moveTo: screenName
            }, "", screenName);
            openPage(screenNameclean);
        }
    })


});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}