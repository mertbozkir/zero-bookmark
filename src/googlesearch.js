document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('google-search-button').addEventListener('click', function() {
        var query = document.getElementById('bookmark-search').value;
        if (query) {
            var googleUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
            chrome.tabs.create({ url: googleUrl });
        } else {
            alert('Please enter a search term.');
        }
    });

    document.getElementById('bookmark-search-reset').addEventListener('click', function() {
        document.getElementById('bookmark-search').value = '';
    });
});
