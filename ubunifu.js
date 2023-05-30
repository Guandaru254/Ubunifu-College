window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var navlinks = navbar.querySelectorAll("a");

    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
        navlinks.forEach(function(link) {
            link.style.color = "#000";
        });
    }
    else {
        navbar.classList.remove("scrolled");
        navlinks.forEach(function(link) {
            link.style.color = "#fff";
        });
    }
}); 