import React from 'react';

import Section from '../Section';

import './experience_desktop.scss';
import './experience_tablet.scss';
import './experience_phone.scss';

import backend from '../../../assets/img/experience/backend.png';
import truck from '../../../assets/img/experience/truck.png';
import tutor from '../../../assets/img/experience/tutor.png';

class Experience extends React.PureComponent
{
    render()
    { 
        return (
            <Section id="experience" defaultTitle="Esperienza">
                <ul className="timeline">
                    <li className="timeline-item">
                        <div className="hexagon">
                            <div className="hexagon-content">
                                <img src={truck} alt="" className="hexagon-image"/>
                            </div>
                        </div>
                        <h2>2017-2018</h2>
                        <div className="box">
                            <h1 className="box-heading">Research Assistant</h1>
                            <h3>@ Politecnico di Bari</h3>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="hexagon">
                            <div className="hexagon-content">
                                <img src={tutor} alt="" className="hexagon-image"/>
                            </div>
                        </div>
                        <h2>2018-2019</h2>
                        <div className="box">
                            <h1 className="box-heading">Student's Tutor</h1>
                            <h3>@ Politecnico di Bari</h3>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="hexagon">
                            <div className="hexagon-content">
                                <img src={backend} alt="" className="hexagon-image"/>
                            </div>
                        </div>
                        <h2>2020</h2>
                        <div className="box">
                            <h1 className="box-heading">.NET Developer</h1>
                            <h3>@ Autologs</h3>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="hexagon">
                            <div className="hexagon-content">
                                <img src={backend} alt="" className="hexagon-image"/>
                            </div>
                        </div>
                        <h2>2020-Present</h2>
                        <div className="box">
                            <h1 className="box-heading">Software Developer</h1>
                            <h3>@ Code Architects</h3>
                        </div>
                    </li>
                </ul>
            </Section>
        );
    }
}
 
export default Experience;