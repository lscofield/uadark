loadTheme('css/dark.css');

function loadTheme(filename) {
    try {
        var stylesheet = document.querySelector('[id="dark-ua-mode"]');
        stylesheet.parentNode.removeChild(stylesheet);
    } catch (error) {}
    const url = chrome.runtime.getURL(filename);

    fetch(url)
        .then((response) => response.text())
        .then((css) => setTheme(css));
}

function setTheme(css) {
    var style = document.createElement('style');
    style.id = 'dark-ua-mode';
    style.innerHTML = css;
    document.head.appendChild(style);
}