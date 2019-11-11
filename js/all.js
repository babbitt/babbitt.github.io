$(document).ready(() => {
    window.addEventListener('popstate', (event) => {
        if (event.state) {
            if (event.state.moveTo == "/") {
                $('.active').removeClass('active');
                $('html').removeClass('open')
                window.document.title = `Joe Babbitt`;
            } else {
                openPage((event.state.moveTo).replace(/\//g, "-"));
            }
        } else {
            $('.active').removeClass('active');
            $('html').removeClass('open')
        }
    });
    //Main Logo
    var url = "/logo.svg?rnd=" + Math.random();
    $('.mainLoader').attr("src", url);

    //Load background image
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    SetBackgroundImage = (imgNumber) => {
        $('html').css("background",
            `url('/img/backgrounds/${imgNumber}.jpg') no-repeat center center fixed`);
        $('html').css("background-size", "cover");
    }
    var imageNum = getRandomInt(0, 29);
    SetBackgroundImage(imageNum);
    setInterval(() => {
        imageNum = (imageNum + 1 != 30) ? imageNum + 1 : 0;
        SetBackgroundImage(imageNum);
    }, 60000 * 3)

    $('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr(
                    'width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
    setTimeout(() => {
        $('img.latesvg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr(
                        'width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');
        });
    }, 1000);
});