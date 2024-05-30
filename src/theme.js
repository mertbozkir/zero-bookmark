document.addEventListener('DOMContentLoaded', (event) => {
    const themeSelector = document.getElementById('theme');

    // Sayfa yüklendiğinde, saklanan temayı uygula
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    } else {
        // Eğer kayıtlı bir tema yoksa, varsayılan olarak 'dark' temasını uygula
        applyTheme('dark');
    }

    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        applyTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme); // Temayı kaydet
    });

    function applyTheme(theme) {
        if (theme === 'dark') {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    function setDarkTheme() {
        document.body.style.backgroundColor = '#202124';
        document.body.style.color = '#ffffff';
        document.getElementById('theme-selector').style.backgroundColor = '#303134';
        document.getElementById('theme-selector').style.color = '#ffffff';
        document.getElementById('bookmark-search-input-area').style.backgroundColor = '#303134';
        document.getElementById('bookmark-search-input-area').style.color = '#ffffff';
        document.getElementById('bookmark-search').style.backgroundColor = '#303134';
        document.getElementById('bookmark-search').style.color = '#ffffff';
        document.getElementById('youtube-search-button').style.backgroundColor = '#303134';
        document.getElementById('google-search-button').style.backgroundColor = '#303134';
        document.getElementById('bookmark-search-reset').style.backgroundColor = '#303134';

        var style = document.createElement('style');
        style.innerHTML = `
        .bookmark-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #303134;
            width: 250px; /* Sabit genişlik */
            height: 250px; /* Sabit yükseklik */
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            position: relative;
        }

        .bookmark-title {
            font-size: 14px;
            color: #ffffff;
            text-decoration: none;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* İki satırda kes */
            -webkit-box-orient: vertical;
          }
        `;
        document.head.appendChild(style);

    }

    function setLightTheme() {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        document.getElementById('theme-selector').style.backgroundColor = '#ECEFF7';
        document.getElementById('theme-selector').style.color = '#000000';
        document.getElementById('bookmark-search-input-area').style.backgroundColor = '#ECEFF7';
        document.getElementById('bookmark-search-input-area').style.color = '#000000';
        document.getElementById('bookmark-search').style.backgroundColor = '#ECEFF7';
        document.getElementById('bookmark-search').style.color = '#757575';
        document.getElementById('youtube-search-button').style.backgroundColor = '#ECEFF7';
        document.getElementById('google-search-button').style.backgroundColor = '#ECEFF7';
        document.getElementById('bookmark-search-reset').style.backgroundColor = '#ECEFF7';

        var style = document.createElement('style');
        style.innerHTML = `
        .bookmark-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #ffffff;
            width: 250px; /* Sabit genişlik */
            height: 250px; /* Sabit yükseklik */
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
            text-align: center;
            position: relative;
        }

        .bookmark-title {
            font-size: 14px;
            color: #000000;
            text-decoration: none;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* İki satırda kes */
            -webkit-box-orient: vertical;
          }
        `;
        document.head.appendChild(style);
    }
});
