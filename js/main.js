// Get elements from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var searchbar = $("#searchbar")[0];
var searchbutton = $("#SearchButton")[0];
var search = $("#search")[0];
var resultsdiv = $("#resultsDiv")[0];
var searchCount = 5;
// Register button listeners
searchbutton.addEventListener("click", function () {
    pageheader.innerHTML = "Just a sec while we find";
    var div = resultsdiv;
    var s = document.getElementById("search").value;
    callBingRequest(s, function (searchResults) {
        changeUI();
        loadResults(div, searchResults);
    });
});
function changeUI() {
    pageheader.innerHTML = "Results";
    resultsdiv.style.display = "block";
}
function loadResults(div, searchResults) {
    var searchDisplay = [];
    //Define searchDIsplay
    for (var i = 0; i < searchCount; i++) {
        searchDisplay.push(new searchWebPages("", "", "", "", "", ""));
    }
    //Load data into searchDisplay
    for (var pageNo = 0; pageNo < searchCount; pageNo++) {
        //searchDisplay[pageNo].id = searchResults[pageNo].id;
        searchDisplay[pageNo].name = searchResults[pageNo].name;
        searchDisplay[pageNo].url = searchResults[pageNo].url;
        searchDisplay[pageNo].displayUrl = searchResults[pageNo].displayUrl;
        searchDisplay[pageNo].snippet = searchResults[pageNo].snippet;
    }
    //Collect html shapes for searchDisplay
    var str = "";
    for (var j = 0; j < searchCount; j++) {
        str = str + resultshape(searchDisplay[j]);
    }
    div.innerHTML = str;
}
function resultshape(searchDisplay) {
    var arr = [
        "<div class='webResult'>",
        "<body link='red'>",
        "<h2><a href=" + searchDisplay.url + ">" + searchDisplay.name + "</a></h2>",
        "<p>" + searchDisplay.snippet + "</p>",
        "<a href=" + searchDisplay.url + ">" + searchDisplay.displayUrl + "</a>",
        "</div>"
    ];
    return arr.join("");
}
function callBingRequest(s, callback) {
    var params = {
        // Request parameters
        "q": s,
        "count": searchCount,
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
        if (data.length != 0) {
            // Get the results
            var webpages = data.webPages.value;
            callback(webpages);
        }
        else {
            pageheader.innerHTML = "Hmm, we can't find any results. Try another?";
        }
    })
        .fail(function (error) {
        pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
        console.log(error.getAllResponseHeaders());
    });
}
var searchWebPages = (function () {
    function searchWebPages(inputId, inputName, inputUrl, inputDisplayUrl, inputSnippet, inputDataLastCrawled) {
        this.inputId = inputId;
        this.inputName = inputName;
        this.inputUrl = inputUrl;
        this.inputDisplayUrl = inputDisplayUrl;
        this.inputSnippet = inputSnippet;
        this.inputDataLastCrawled = inputDataLastCrawled;
        this.id = inputId;
        this.name = inputName;
        this.url = inputUrl;
        this.displayUrl = inputDisplayUrl;
        this.snippet = inputSnippet;
        this.dateLastCrawled = inputDataLastCrawled;
    }
    return searchWebPages;
}());
