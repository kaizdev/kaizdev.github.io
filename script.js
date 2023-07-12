//  When the menu hamburger is clicked, update the mobile-nav from none to flex.
document
    .querySelector(".nav-bar__hamburger")
    .addEventListener("click", function () {
        document.getElementById("mobileNav").style.display = "flex";
    });

// When inside the mobile-nav, clicking the close button OR any of the links removes the mobile-nav
document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("mobileNav").style.display = "none";
});

// Select all the links inside #mobile-nav and add a click event listener to each
document.querySelectorAll("#mobileNav a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.getElementById("mobileNav").style.display = "none";
    });
});
