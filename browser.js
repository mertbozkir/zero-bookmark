// Function to get bookmarks from the browser
function getBookmarks(callback) {
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
        callback(bookmarkTreeNodes);
    });
}



