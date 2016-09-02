// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var inputsearch = $("#search")[0];
var searchbutton = $("#SearchButton")[0];
var result = $("resultsDiv")[0];

// Register button listeners
searchbutton.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";
    result.innerHTML = "Hello1";
    changeUI();
});

function changeUI() : void {
    pageheader.innerHTML = "Here is a result";
    result.innerHTML = "Hello-2";
    searchbutton.style.display = "none";
}