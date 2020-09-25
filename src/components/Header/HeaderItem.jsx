import React from 'react';

import Translate from '../Translate';

const HeaderItem = props => (
    <a href={props.href} className="neon_activator neon1">
        <Translate selector={props.selector}/>
    </a>
);

export default HeaderItem;