// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var searchbar = $("#searchbar")[0];
var searchbutton = $("#SearchButton")[0];
var search = $("#search")[0];
var resultsdiv = $("#resultsDiv")[0];
// Register button listeners
searchbutton.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";
    var div = resultsdiv;
    var s = document.getElementById("search").value;
    changeUI();
    loadResults(div, s);
});
function changeUI() {
    pageheader.innerHTML = "Results";
    resultsdiv.style.display = "block";
}
function loadResults(div, s) {
    div.innerHTML = s;
}
