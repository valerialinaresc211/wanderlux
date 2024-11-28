// JavaScript for Sticky Header on Scroll
window.onscroll = function() {
    stickyHeader();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// JavaScript to toggle a menu (if needed)
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});