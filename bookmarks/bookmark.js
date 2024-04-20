// Function to reload search results
function reloadSearchResults() {
    var searchInput = document.getElementById("search").value.toLowerCase();
    getBookmarks(function(bookmarks) {
        var filteredBookmarks = filterBookmarks(bookmarks, searchInput);
        renderBookmarks(filteredBookmarks);
    });
}

// Function to filter bookmarks based on search input
function filterBookmarks(bookmarks, searchInput) {
    var filteredBookmarks = [];

    for (var i = 0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.children) {
            var filteredChildren = filterBookmarks(bookmark.children, searchInput);
            if (filteredChildren.length > 0) {
                bookmark.children = filteredChildren;
                filteredBookmarks.push(bookmark);
            }
        } else {
            if (bookmark.title.toLowerCase().includes(searchInput)) {
                filteredBookmarks.push(bookmark);
            }
        }
    }

    return filteredBookmarks;
}

// Event listener for search input
document.getElementById("search").addEventListener("input", function() {
    var searchReset = document.getElementById("searchReset");
    if (this.value !== "") {
        searchReset.classList.remove("searchResetHidden");
    } else {
        searchReset.classList.add("searchResetHidden");
    }
});

// Event listener for search reset
document.getElementById("searchReset").addEventListener("click", function() {
    document.getElementById("search").value = "";
    this.classList.add("searchResetHidden");
    reloadSearchResults();
});

// Event listener for search button click
document.getElementById("searchView").addEventListener("click", function() {
    reloadSearchResults();
});

// Initial loading of bookmarks
window.addEventListener("load", function() {
    getBookmarks(function(bookmarks) {
        renderBookmarks(bookmarks);
    });
});
