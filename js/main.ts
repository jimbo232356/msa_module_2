// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var searchbar = $("#searchbar")[0];
var searchbutton = $("#SearchButton")[0];
var search : HTMLInputElement = <HTMLInputElement> $("#search")[0];
var resultsdiv = $("#resultsDiv")[0];

// Register button listeners
searchbutton.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";
    changeUI();
});

function changeUI() : void {
    pageheader.innerHTML = "Results";
    resultsdiv.style.display = "block";
    var div = resultsdiv;
    var s = (<HTMLInputElement>document.getElementById("search")).value;
    loadResults(div, s);
}

function loadResults(div, s) : void {
    div.innerHTML = s;
}