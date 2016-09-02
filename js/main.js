// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var search = $("#search")[0];
var searchbutton = $("#SearchButton")[0];
var resultsdiv = $("resultsDiv")[0];
// Register button listeners
searchbutton.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";
    resultsdiv.innerHTML = "Hello1";
    changeUI();
});
function changeUI() {
    pageheader.innerHTML = "Here is a result";
    resultsdiv.innerHTML = "Hello-2";
    searchbutton.style.display = "none";
}
