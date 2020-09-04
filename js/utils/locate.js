var languageJson;

async function loadLanguageJson(code) {
    return (await fetch(`../lang/${code}.json`)).json();
}

function translateText(selector) {
    let selectors = selector.split(':');
    if (!languageJson) return selectors[selectors.length - 1];
    let text = languageJson[selectors[0]];
    if (text === undefined) return null;
    for (let i = 1; i < selectors.length; i++) {
        text = text[selectors[i]];
        if (text === undefined) return null;
    }
    return text;
}

async function translatePage(code) {
    languageJson = await loadLanguageJson(code);
    if (!languageJson) languageJson = await loadLanguageJson('en');
    if (!languageJson) return;
    window.sessionStorage.setItem('lang', code);
    let fields = document.querySelectorAll('[data-lang]');
    fields.forEach(field => {
        let translatedText = translateText(field.getAttribute('data-lang'));
        if (translatedText !== null) field.textContent = translatedText;
    });
}