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
    var div = resultsdiv;
    var s = (<HTMLInputElement>document.getElementById("search")).value;
    callBingRequest(s, function(searchResults) {
        changeUI();
        loadResults(div, s);
    });
});

function changeUI() : void {
    pageheader.innerHTML = "Results";
    resultsdiv.style.display = "block";
}

function loadResults(div, s) : void {
    div.innerHTML = s;
}

function callBingRequest(s, callback) : void {
    var params = {
        // Request parameters
        "q": s,
        "count": "5",
    };
    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/search?" + $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "ca65418759df4eb1a8826f23cd72c483");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
        .done(function (data) {
            if (data.length != 0) { // if a results are detected
                // Get the results
                var webpages = data.value[0];
                callback(webpages);
            } else {
                pageheader.innerHTML = "Hmm, we can't find any results. Try another?";
            }
        })
        .fail(function (error) {
            pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
            console.log(error.getAllResponseHeaders());
        });
}