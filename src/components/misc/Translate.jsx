import React from 'react';

import { LocaleContext } from '../../context';

import it_json from '../../lang/it.json'
import en_json from '../../lang/en.json';
import es_json from '../../lang/es.json';

function translate(selector, locale, defaultValue = null)
{
    let text;
    switch (locale) {
        case 'it':
            text = it_json;
            break;
        case 'es':
            text = es_json;
            break;
        case 'en':
        default:
            text = en_json;
            break;
    }
    if (!text) return defaultValue;
    let selectors = selector.split(':');
    for (let i = 0; i < selectors.length; i++) {
        text = text[selectors[i]];
        if (!text) return defaultValue;
    }
    return text;
}

const Translate = React.memo(props =>
{
    // console.log('TRANSLATE being rendered');
    const { locale, setLocale } = React.useContext(LocaleContext);
    if (!locale || !props.selector) return <>{props.children}</>;
    let text = translate(props.selector, locale);
    if (text === null) return <>{props.children}</>;
    return props.transform ? <>{props.transform(text)}</> : <>{text}</>;
});

export { translate };
export default Translate;