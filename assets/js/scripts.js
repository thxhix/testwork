$(document).ready(function () {
    var mobileMenu = $(".mobile-dropdown");

    $(".mobile-dropdown-content__close a").on("click", function (e) {
        e.preventDefault();
        mobileMenu.removeClass("mobile-dropdown--active");
    });
    $(mobileMenu).on("click", function (e) {
        e.preventDefault();
        mobileMenu.removeClass("mobile-dropdown--active");
    });

    $(".resume-sidebar-header-action-button__button__link").on("click", function (e) {
        e.preventDefault();
        mobileMenu.addClass("mobile-dropdown--active");
    });

    $(".resume-sidebar-header-action-button-dropdown-list__item a").on("click", function (e) {
        e.preventDefault();
        var button = $(".resume-sidebar-header-action-button__button__link");
        var buttonText = $(".resume-sidebar-header-action-button__button__link__text");

        mobileMenu.removeClass("mobile-dropdown--active");

        button.addClass("resume-sidebar-header-action-button__button__link--success");
        buttonText.html("Приглашение отправлено");
    });
});

$(document).ready(function () {
    var $header = $(".mobile-header-content");
    var $footer = $(".mobile-footer");

    let counter = 0;

    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + $(window).height();

        if (scroll >= 1050 && counter == 0) {
            $header.addClass("mobile-header-content--sticked");
            $footer.addClass("mobile-footer--fixed");

            counter = 1;
        } else if (scroll <= 1050) {
            counter = 0;
            $header.removeClass("mobile-header-content--sticked");
            $footer.removeClass("mobile-footer--fixed");
        }
    });
});

$(document).ready(function () {
    // Text Dropdown
    let dropdownButton = document.querySelectorAll(".resume-main-about-item-body__dropdown__button__link");
    let dropdownText = document.querySelectorAll(".resume-main-about-item-body__dropdown__list");

    for (let i = 0; i < dropdownButton.length; i++) {
        if (dropdownText[i].classList.contains("resume-main-about-item-body__dropdown__list--active")) {
            dropdownButton[i].innerHTML = "Скрыть";
        } else {
            dropdownButton[i].innerHTML = "Показать полностью..";
        }
        dropdownButton[i].addEventListener("click", (e) => {
            if (dropdownText[i].classList.contains("resume-main-about-item-body__dropdown__list--active")) {
                dropdownButton[i].innerHTML = "Показать полностью..";
            } else {
                dropdownButton[i].innerHTML = "Скрыть";
            }
            e.preventDefault();
            dropdownText[i].classList.toggle("resume-main-about-item-body__dropdown__list--active");
        });
    }

    $("#historyDrop").on("click", function () {
        $(".resume-sidebar-history-block-bottom").toggle(250);
        $(".resume-sidebar-history-block-top__arrow").toggleClass("resume-sidebar-history-block-top__arrow--down");
    });
});

$(document).ready(function () {
    // FavButton
    var favAdd = $(".resume-sidebar-header-action-button__button__favorite__link");

    $(favAdd).on("click", function () {
        favAdd.toggleClass("resume-sidebar-header-action-button__button__favorite__link--active");
    });
});

$(document).ready(function () {
    $(".slide-one").owlCarousel({
        // stagePadding: 0,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoWidth: true,

        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2.5,
                nav: false,
            },
            // breakpoint from 480 up
            480: {
                items: 4.25,
                nav: true,
            },
        },
    });
});

$(document).ready(function () {
    var owl;
    $(".slide-two").owlCarousel({
        items: 1,
        // animateOut: "fadeOut",
        smartSpeed: 100,
        nav: true,
        dots: false,
        loop: false,
        center: true,
        margin: 0,
        URLhashListener: true,
        onTranslated: pickNumber,
        onInitialized: init,
    });

    function init(e) {
        var count = e.item.count;
        var spanAll = $("#slideTwoCounterAll");
        spanAll.html(count);
    }

    function pickNumber(e) {
        var element = e.target;
        var count = e.item.count;

        var spanCount = $("#slideTwoCounter");
        var spanAll = $("#slideTwoCounterAll");

        var i = $(element).find(".active").find(".popup__slider__item").attr("data-index");

        spanCount.html(i);
        spanAll.html(count);
    }

    var slideTwoHash = $(".resume-main-about-portfolio__slider__item__link");
    var slideTwoPopup = $("#popup-slider");

    $(slideTwoHash).on("click", function (e) {
        // e.preventDefault();

        slideTwoPopup.removeClass("popup--hidden");
    });
    $(slideTwoPopup).on("click", function (event) {
        e = event || window.event;
        if (e.target == this) {
            slideTwoPopup.addClass("popup--hidden");
        }
    });

    $(".popup-close").on("click", function (event) {
        event.preventDefault();
        slideTwoPopup.addClass("popup--hidden");
    });
});

var popup = $("#popup-notice");
var btn = $(".notice-btn");
var close = $(".popup__close");

$(btn).on("click", function (event) {
    event.preventDefault();
    popup.removeClass("popup--hidden");
});

$(popup).on("click", function (event) {
    e = event || window.event;
    if (e.target == this) {
        popup.addClass("popup--hidden");
    }
});

$(close).on("click", function (event) {
    event.preventDefault();
    popup.addClass("popup--hidden");
});
