try {
    var stylesheet = document.querySelector('[id="dark-ua-mode"]');
    stylesheet.parentNode.removeChild(stylesheet);
} catch (error) { }