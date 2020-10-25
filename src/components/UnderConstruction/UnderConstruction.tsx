import * as React from 'react';

import CodeRenderer from '../common/CodeRenderer';
import Translate from '../common/Translate';

import { ucLines, ucSpecialWords } from './data';

import './underconstruction_desktop.scss';
import './underconstruction_tablet.scss';
import './underconstruction_phone.scss';


const UnderConstruction = () => {
    return (
        <div id="underconstruction">
            <div className="container">
                <h1><Translate selector="underconstruction:h1"/></h1>
                <h2><Translate selector="underconstruction:h2"/></h2>
                <CodeRenderer lines={ucLines} specialWords={ucSpecialWords}/>
            </div>
        </div>
    );
}

export default UnderConstruction;