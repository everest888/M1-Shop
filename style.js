$(document).ready(function () {

    $(function () {
        $(document).click((e) => {
            const {
                target
            } = e;
            if (target.nodeName === 'A' && target.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    var Popup = {
        init: function () {
            $('.popup__button_close').on('click', function (e) {
                e.preventDefault();
                Popup.close();
            })
            $('.popup__button_open').on('click', Popup.open);
            
            
        },
        open: function () {

            $('.popup').removeClass('popup_hide');
            $('body').addClass('body_hidden');
            

            setTimeout(function () {
                $('.popup__body').addClass('popup__body_visible');
            }, 100);
            

        },
        close: function () {

            $('.popup__body').removeClass('popup__body_visible');
            

            setTimeout(function () {
                $('.popup').addClass('popup_hide');
                $('body').removeClass('body_hidden');
            }, 150);
        }
    }

    Popup.init();

   
});

