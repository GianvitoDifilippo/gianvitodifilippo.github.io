import React from 'react';

import Translate from '../Translate';

import './blogpage.scss';

const BlogPage = props => (
    <div class="blogpage" id={props.id}>
        <div id="hero">
            <h1><Translate selector={`${props.id}:heading`}/></h1>
        </div>
        {props.children}
    </div>
);

export default BlogPage;