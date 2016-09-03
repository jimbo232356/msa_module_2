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
        loadResults(div, searchResults);
    });
});

function changeUI() : void {
    pageheader.innerHTML = "Results";
    resultsdiv.style.display = "block";
}

function loadResults(div, searchResults) : void {
    var searchDisplay : searchWebPages;
    var pageNo = 0;
    div.innerHTML = searchResults[0].id;
}

function findId(list) {
    return list.id === "https://api.cognitive.microsoft.com/api/v5/#WebPages.0"
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
                var webpages = data.webPages.value;
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

class searchWebPages {
    id: string;
    name: string;
    url: string;
    displayUrl: string;
    snippet: string;
    dateLastCrawled: string;
    constructor(public inputId, public inputName, public inputUrl, public inputDisplayUrl, public inputSnippet, public inputDataLastCrawled) {
        this.id = inputId;
        this.name = inputName;
        this.url = inputUrl;
        this.displayUrl = inputDisplayUrl;
        this.snippet = inputSnippet;
        this.dateLastCrawled = inputDataLastCrawled;
    }
}