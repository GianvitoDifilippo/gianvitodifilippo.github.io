import React from 'react';

import Translate from '../Translate';

import './blogpage_desktop.scss';
import './blogpage_tablet.scss';
import './blogpage_phone.scss';


type PropsType = {
    id: string,
    children?: React.ReactNode
};


const BlogPage = (props: PropsType) => (
    <div className="blogpage">
        <div id="hero">
            <h1><Translate selector={`${props.id}:heading`}/></h1>
        </div>
        {props.children}
    </div>
);

export default BlogPage;