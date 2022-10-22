var barBtn = document.querySelector(".nav-bar-icon");               // Lấy Id nav-bar-icon
var barBtns = barBtn.children;                                      // Lấy con của #nav-bar-icon
var navMobileTablet = document.querySelector(".nav-mobile-tablet")  // Lấy Id nav-mobile-tablet
var exitBtn = document.querySelector(".exit-bnt")                   // Lấy 1 class exit-btn
var answerBtns = document.querySelectorAll(".frequent-question-text-box")
var bodyDiv = document.querySelector("body")

/* Header stitcky top */
var header = document.querySelector("#header")
function isScroll() {
    if(window.pageYOffset > sticky) {
        header.classList.add("js-sticky-header")
    }
    else header.classList.remove("js-sticky-header")
}
var sticky = header.offsetTop + 200
window.addEventListener("scroll", isScroll)

/* Open nav  */
function openNav () {
    barBtn.classList.add("js-nav-bar-icon")
    navMobileTablet.style.right = "0"
}

barBtn.addEventListener("click", openNav)
/* Close nav mobile and tablet  */
function removeNavBar() {
    barBtn.classList.remove("js-nav-bar-icon")
    navMobileTablet.style.right = "-100%"
}

exitBtn.addEventListener("click", removeNavBar)
bodyDiv.addEventListener("click", removeNavBar,true)
