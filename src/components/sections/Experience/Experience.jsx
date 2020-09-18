import React from 'react';

import Section from '../Section';

import Translate from '../../misc/Translate';

import './experience_desktop.scss';
import './experience_tablet.scss';
import './experience_phone.scss';

import backend from '../../../assets/img/experience/backend.png';
import truck from '../../../assets/img/experience/truck.png';
import tutor from '../../../assets/img/experience/tutor.png';

const TimelineItem = props => (
    <li className="timeline-item">
        <div className="hexagon">
            <div className="hexagon-content">
                <img src={props.image} alt="" className="hexagon-image"/>
            </div>
        </div>
        <h2><Translate selector={`experience:${props.id}:year`}>{props.id}</Translate></h2>
        <div className="box">
            <h1 className="box-heading"><Translate selector={`experience:${props.id}:name`}>{props.id}</Translate></h1>
            <h3>@ {props.where}</h3>
        </div>
    </li>
);

class Experience extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.experience = [
            {
                id: 'research',
                where: 'Politecnico di Bari',
                image: truck
            },
            {
                id: 'tutoring',
                where: 'Politecnico di Bari',
                image: tutor
            },
            {
                id: 'backend',
                where: 'AutoLogS',
                image: backend
            },
            {
                id: 'software',
                where: 'Code Architects',
                image: backend
            }
        ];

        this.ulClassName = this.ulClassName.bind(this);
    }

    ulClassName()
    {
        let className = 'timeline';
        if (this.experience.length % 2) {
            className += ' odd-nli';
        }
        else {
            className += ' even-nli';
        }
        return className;
    }

    render()
    { 
        return (
            <Section id="experience" defaultTitle="Esperienza">
                <ul className={this.ulClassName()}>
                {this.experience.map(value => (
                    <TimelineItem key={value.id} id={value.id} where={value.where} image={value.image}/>
                ))}
                </ul>
            </Section>
        );
    }
}
 
export default Experience;