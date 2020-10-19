import * as React from 'react';

import { LocaleContext } from '../../shared/context';

import it_json from '../../lang/it.json';
import en_json from '../../lang/en.json';

function translate(selector: string, locale: string): string
{
    let text: any;
    switch (locale) {
        case 'it':
            text = it_json;
            break;
        case 'en':
        default:
            text = en_json;
            break;
    }
    if (!text) return null;
    let selectors = selector.split(':');
    for (let i = 0; i < selectors.length; i++) {
        text = text[selectors[i]];
        if (!text) return null;
    }
    return text as string;
}

type PropsType = {
    selector: string,
    transform?: (text: string) => string | JSX.Element,
    children?: React.ReactNode
};

const Translate = (props: Readonly<PropsType>) => {
    const { locale, setLocale } = React.useContext(LocaleContext);
    if (!locale || !props.selector) return <>{props.children}</>;
    let text = translate(props.selector, locale);
    if (text === null) return <>{props.children}</>;
    return props.transform ? <>{props.transform(text)}</> : <>{text}</>;
};

export { translate };
export default Translate;