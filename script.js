var overlayMenuBtn = document.getElementById("overlay-menu-btn");
var navBar = document.getElementsByTagName("nav")[0];
var navCancelBtn = document.getElementById("nav-cancel-btn")


overlayMenuBtn.addEventListener( "click", function() {
    navBar.classList.add( "p-7", "w-3/4", "lg:w-2/5" );
});

navCancelBtn.addEventListener( "click", function() {
    navBar.classList.remove( "p-7", "w-3/4", "lg:w-2/5" );
});