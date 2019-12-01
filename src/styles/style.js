const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector(".head-nav");
    burger.addEventListener("click", () => {
        navList.classList.toggle("active");
        burger.classList.toggle("toggler");
    });
}
navSlide();

// CLIENT SECTION
$('.clients').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});

// TO TOP
var myButton = document.getElementById("myBtn");
var myNavigation = document.getElementById("myNav");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        myButton.style.opacity = "1";
    } else {
        myButton.style.opacity = "0";
    }
}

function topFunction(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}