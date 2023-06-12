//  When the menu hamburger is clicked, update the mobile-nav from none to flex.
document
    .querySelector(".nav-bar__hamburger")
    .addEventListener("click", function () {
        document.getElementById("mobile-nav").style.display = "flex";
    });

// When inside the mobile-nav, clicking the close button OR any of the links removes the mobile-nav
document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("mobile-nav").style.display = "none";
});

// Select all the links inside #mobile-nav and add a click event listener to each
document.querySelectorAll("#mobile-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.getElementById("mobile-nav").style.display = "none";
    });
});
