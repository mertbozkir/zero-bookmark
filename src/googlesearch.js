function googleSearch() {
    var searchTerm = document.getElementById("bookmark-search").value;
        if (searchTerm.trim() !== "") {
            var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
            window.open(googleSearchUrl, "_blank");
        }
}

