const lang_list = ['it', 'en', 'es'];
const flags = document.querySelectorAll('#lang ul li');
const flag_imgs = document.querySelectorAll('#lang ul li div');

var langs = {};

async function loadLangs() {
    async function loadLang(lang) {
        let result = await fetch(`../lang/${lang}.json`);
        return result.json();
    }

    for (let i = 0; i < lang_list.length; i++) {
        let lang = lang_list[i];
        langs[lang] = await loadLang(lang);
    }
};

function sortFlags(lang) {
    flag_imgs[0].style.backgroundImage = `url('/assets/img/flag_${lang}.png')`;
    let j = 0;
    for (let i = 1; i < flags.length; i++) {
        let next_lang = lang_list[j];
        if (next_lang == lang) {
            j++;
            next_lang = lang_list[j];
        }
        flags[i].setAttribute('onclick', `translatePage('${lang_list[j]}')`);
        flag_imgs[i].style.backgroundImage = `url('/assets/img/flag_${lang_list[j]}.png')`;
        j++;
    }
}

function translatePage(lang) {
    language = langs[lang];
    if (!language) language = langs['en'];
    if (!language) return;
    sortFlags(lang);
    let fields = document.querySelectorAll('[data-lang]');
    fields.forEach(field => {
        let selectors = field.getAttribute('data-lang').split(':');
        let text = language[selectors[0]];
        for (let i = 1; i < selectors.length; i++) {
            text = text[selectors[i]];
        }
        field.textContent = text;
    });
}