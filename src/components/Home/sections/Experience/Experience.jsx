import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Section from '../Section';

import Translate from '../../../Translate';

import { DeviceContext } from '../../../../context';

import experience from './data.js';

import './experience_desktop.scss';
import './experience_tablet_big.scss';
import './experience_tablet_small.scss';
import './experience_phone.scss';

const TimelineItem = props => {
    const { device } = React.useContext(DeviceContext);
    let isActive = props.currentExperience === props.id;
    return (
        <li className={`timeline-item${isActive ? ' active' : ''}`}>
            <div className="box" onClick={() => props.onClick(props.id)}>
                <h1 className="box-heading"><Translate selector={`experience:${props.id}:name`}/></h1>
                <h3>
                    @ {props.where}{' '}
                    <span>
                        {'| '}<Translate selector={`experience:${props.id}:yearfull`}/>
                    </span>
                </h3>
                <ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
                    {isActive
                    ?
                    <div key="descr">
                        <p><Translate selector={`experience:${props.id}:yearfull`}/></p>
                        <p className="descr">
                            <Translate selector={`experience:${props.id}:descr`}/>
                        </p>
                    </div>
                    :
                    <div key="null"></div>}
                </ReactCSSTransitionReplace>
            </div>
            <h2 className="noselect">
                <Translate selector={`experience:${props.id}:year`} transform={device === 'tablet_small' || device === 'phone' ? text => {
                    let years = text.split(' ');
                    if (years.length === 1) return text;
                    return <>{years[0]}<br/>{years[1]}<br/>{years[2]}</>
                } : null}/>
            </h2>
            <div className="hexagon noselect" onClick={() => props.onClick(props.id)}>
                <div className="hexagon-content">
                    <img src={props.image} alt="" className="hexagon-image"/>
                </div>
            </div>
        </li>
    );
}

class Experience extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentExperience: null
        };

        this.setExperience = this.setExperience.bind(this);
    }

    ulClassName()
    {
        let className = 'timeline';
        if (experience.length % 2) {
            className += ' odd-nli';
        }
        else {
            className += ' even-nli';
        }
        return className;
    }

    setExperience(experience)
    {
        this.setState({
            currentExperience: this.state.currentExperience === experience ? null : experience
        });
    }

    render()
    { 
        return (
            <Section id="experience" defaultTitle="Esperienza">
                <ul className={this.ulClassName()}>
                {experience.map(value => (
                    <TimelineItem
                    key={value.id} currentExperience={this.state.currentExperience} onClick={this.setExperience}
                    id={value.id} where={value.where} image={value.image}/>
                ))}
                </ul>
            </Section>
        );
    }
}
 
export default Experience;