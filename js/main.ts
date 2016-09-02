// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var inputsearch= $("#InputSearch")[0];
var refreshbtn = $("#refreshbtn")[0];

// Register button listeners
refreshbtn.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";

});