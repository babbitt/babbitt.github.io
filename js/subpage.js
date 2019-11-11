$(document).ready(() => {
    $('.inner-site-link').click(function () {
        window.location = $(this).attr('dest');
    })
})