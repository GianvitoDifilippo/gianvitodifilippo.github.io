import * as React from 'react';

import { LocaleContext } from '../../shared/context';
import Translate, { translate } from '../common/Translate';
import CodeRenderer from '../common/CodeRenderer';

import { errLines, errSpecialWords } from './data';

import './error_desktop.scss';
import './error_tablet.scss';
import './error_phone.scss';


const Error = (props: { activeIndex: number }) => {
    const { locale, setLocale } = React.useContext(LocaleContext);

    const localeLines = [...errLines];
    [ 'badrequest', 'notfound', 'append' ].forEach((selector) => {
        for (let i = 0; i < localeLines.length; i++) {
            localeLines[i] = localeLines[i].replace(selector, translate(`error:${selector}`, locale))
        }
    });

    return (
        <div id="error">
            <div className="container">
                <h1><Translate selector="error:breakpoint"/></h1>
                <CodeRenderer lines={localeLines} specialWords={errSpecialWords} activeIndex={props.activeIndex}/>
            </div>
        </div>
    );
}

export default Error;