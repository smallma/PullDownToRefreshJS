function _listenHealthPullDownToRefresh() {
    document.body.addEventListener('touchstart', function(e) {
        window.touchY = e.touches[0].screenY;
        // console.log('start: ' + e.touches[0].screenY);
    });

    document.body.addEventListener('touchmove', function(e) {
        var screenY = e.touches[0].screenY;

        // console.log('e.changedTouches[0]: ' + screenY);

        if ($('#loadingIcon').hasClass('loading')) {
            return;
        }

        if (window.touchY < screenY) {
            var moveRange = screenY - window.touchY;

            if (moveRange > 120 && $(window).scrollTop() < 50) {
                var loadingIcon = $('#loadingIcon');
                loadingIcon.addClass('loading');
                // if (typeof callback === 'function') {
                //     callback(function () {
                //         loadingIcon.removeClass('loading');
                //     });
                // }
                setTimeout(function () {
                    loadingIcon.removeClass('loading');
                }, 2000);
            }
        }
    });

    document.body.addEventListener('touchend', function() {
        if (!$('#loadingIcon').hasClass('loading')) {
            $('#loadingIcon').css('top', '-100px');
        }
    });
}

$( document ).ready(function() {
    _listenHealthPullDownToRefresh();
});