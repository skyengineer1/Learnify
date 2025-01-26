let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");

sideNav.style.right = "-15em";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-15em") {
        sideNav.style.right = "0";
    }
    else {
        sideNav.style.right = "-15em";
    }
}