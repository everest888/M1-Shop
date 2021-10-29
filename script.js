$(document).ready(function () {
    $('#main-but-one').click(function () {
        $('.catalog_up').show();
        $('.catalog_down').hide();
    });

    $('#main-but-two').click(function () {
        $('.catalog_down').show();
        $('.catalog_up').hide();
    });

    $(document).mouseup(function (e) {
        var elem = $(".catalog");
        if (!elem.is(e.target)
            && elem.has(e.target).length === 0) {
            $('.catalog').show();
        }
    });

    $('a.myLinkModal').click(function (event) {
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function () {
            $('#myModal')
                .css('display', 'grid')
                .animate({ opacity: 1 }, 198);
        });
    });

    $('#myModal__close, #myOverlay').click(function () {
        $('#myModal').animate({ opacity: 0 }, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay').fadeOut(297);
            });
    });
});