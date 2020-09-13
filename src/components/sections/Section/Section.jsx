import React from 'react';

import './section_desktop.scss';
import './section_tablet.scss';
import './section_phone.scss';

import Translate from '../../misc/Translate';

class Section extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.id = props.id;
        this.defaultTitle = props.defaultTitle;
    }

    render()
    {
        return (
            <section id={this.id} className="section">
                <div className="container">
                    {this.props.children}
                </div>
                <h1 className="section-title noselect">
                    <Translate selector={`sections:${this.id}`}>{this.defaultTitle}</Translate>
                </h1>
            </section>
        );
    }
}

export default Section;