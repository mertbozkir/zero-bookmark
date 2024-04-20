// common.js

// Function to render bookmarks
function renderBookmarks(bookmarks) {
    var bookmarksDiv = document.getElementById("bookmark-search-result");
    bookmarksDiv.innerHTML = ""; // Clear existing bookmarks

    // Iterate through bookmarks and render them
    for (var i = 0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.children) {
            renderBookmarkFolder(bookmark, bookmarksDiv);
        } else {
            renderBookmark(bookmark, bookmarksDiv);
        }
    }
}

// Function to render bookmark folder
function renderBookmarkFolder(bookmarkFolder, parentElement) {
    var folderDiv = document.createElement("div");
    folderDiv.classList.add("bookmark-folder");
    folderDiv.textContent = bookmarkFolder.title;

    var childrenDiv = document.createElement("div");
    childrenDiv.classList.add("bookmark-children");

    parentElement.appendChild(folderDiv);
    parentElement.appendChild(childrenDiv);

    if (bookmarkFolder.children) {
        for (var i = 0; i < bookmarkFolder.children.length; i++) {
            var child = bookmarkFolder.children[i];
            if (child.children) {
                renderBookmarkFolder(child, childrenDiv);
            } else {
                renderBookmark(child, childrenDiv);
            }
        }
    }
}

// Function to render single bookmark
function renderBookmark(bookmark, parentElement) {
    var bookmarkDiv = document.createElement("div");
    bookmarkDiv.classList.add("bookmark-item");
    bookmarkDiv.textContent = bookmark.title;

    parentElement.appendChild(bookmarkDiv);
}
