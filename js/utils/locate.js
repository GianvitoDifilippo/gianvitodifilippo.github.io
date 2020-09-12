var languageJson;

async function loadLanguageJson(code) {
    try {
        return await (await fetch(`../lang/${code}.json`)).json();
    } catch {
        return await (await fetch('../lang/en.json')).json();
    }
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
    console.log(code);
    languageJson = await loadLanguageJson(code);
    if (!languageJson) return;
    window.sessionStorage.setItem('lang', code);
    let fields = document.querySelectorAll('[data-lang]');
    fields.forEach(field => {
        let translatedText = translateText(field.getAttribute('data-lang'));
        if (translatedText !== null) field.textContent = translatedText;
    });
}