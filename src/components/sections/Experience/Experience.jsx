import React from 'react';

import Section from '../Section';

import './experience_desktop.scss';
import './experience_tablet.scss';
import './experience_phone.scss';

class Experience extends React.PureComponent
{
    render()
    { 
        return (
            <Section id="experience" defaultTitle="Esperienza">
                <ul>
                    <li className="timeline-item">
                        <div className="hexagon"></div>
                        <h2>2017-2018</h2>
                    </li>
                    <li className="timeline-item">
                        <div className="hexagon"></div>
                        <h2>2018-2019</h2>
                    </li>
                    <li className="timeline-item">
                        <div className="hexagon"></div>
                        <h2>2020</h2>
                    </li>
                    <li className="timeline-item">
                        <div className="hexagon"></div>
                        <h2>2020-Present</h2>
                    </li>
                </ul>
            </Section>
        );
    }
}
 
export default Experience;