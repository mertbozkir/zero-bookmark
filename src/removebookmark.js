document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('remove-bookmark').addEventListener('click', function() {
        const bookmarkId = this.getAttribute('data-bookmark-id');
        
        if (bookmarkId) {
            chrome.bookmarks.remove(bookmarkId, function() {
                if (chrome.runtime.lastError) {
                    console.error('Error removing bookmark:', chrome.runtime.lastError);
                } else {
                    console.log('Bookmark removed successfully');
                    location.reload(); // Reload the page to update the bookmarks list.
                }
            });
        } else {
            console.error('Bookmark ID not found');
        }
    });
});
