// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var searchbar = $("#searchbar")[0];
var searchbutton = $("#SearchButton")[0];

// Register button listeners
searchbutton.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";
    changeUI();
});

function changeUI() : void {
    pageheader.innerHTML = "Results";
    searchbar.style.display = "none";
    $("resultsDiv")[0].style.display = "block";
    var div = $("#musicplayer")[0]; 
    div.innerHTML = "Hello";
}