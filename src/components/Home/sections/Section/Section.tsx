import * as React from 'react';

import './section_desktop.scss';
import './section_tablet.scss';
import './section_phone.scss';

import Translate from '../../../common/Translate';


type PropsType = {
    id: string,
    defaultTitle: string
}


class Section extends React.Component<PropsType>
{
    render(): JSX.Element
    {
        return (
            <section id={this.props.id} className="section">
                <div className="container">
                    {this.props.children}
                </div>
                <h1 className="section-title noselect">
                    <Translate selector={`sections:${this.props.id}`}>{this.props.defaultTitle}</Translate>
                </h1>
            </section>
        );
    }
}

export default Section;