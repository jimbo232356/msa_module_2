// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var inputsearch = $("#InputSearch")[0];
var searchbutton = $("#SearchButton")[0];
var result = $("resultsDiv")[0];
// Register button listeners
searchbutton.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";
    changeUI(inputsearch);
});
function changeUI(r) {
    pageheader.innerHTML = "Here is a result";
    result.innerHTML = inputsearch.textContent;
    pageheader.innerHTML = "Change?";
}
