import * as React from 'react';
import CSSTransitionReplace from 'react-css-transition-replace';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Section from '../Section';

import Translate from '../../../common/Translate';

import { DeviceContext } from '../../../../shared/context';

import experience from './data';

import './experience_desktop.scss';
import './experience_tablet_big.scss';
import './experience_tablet_small.scss';
import './experience_phone.scss';


type TimelineItemPropsType = {
    id: string
    currentExperience: string,
    onClick(value: string): void,
    where: string,
    image: string,
    index: number
}


const TimelineItem = (props: Readonly<TimelineItemPropsType>) => {
    const device = React.useContext(DeviceContext);
    let isActive = props.currentExperience === props.id;

    const icon = isActive === (!(props.index % 2) || ['tablet_small', 'phone'].includes(device)) ? faAngleUp : faAngleDown;

    return (
        <li className={`timeline-item${isActive ? ' active' : ''}`}>
            <div className="experience-container box">
                <FontAwesomeIcon fixedWidth icon={icon} className="fa-icon" onClick={() => props.onClick(props.id)}/>
                <h1 className="box-heading">
                    <Translate selector={`experience:${props.id}:name`}/>
                </h1>
                <h3>
                    @ {props.where}{' '}
                    <span>
                        {'| '}<Translate selector={`experience:${props.id}:yearfull`}/>
                    </span>
                </h3>
                <CSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
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
                </CSSTransitionReplace>
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


type StateType = {
    currentExperience: string
}


class Experience extends React.PureComponent<{}, StateType>
{
    constructor(props: Readonly<{}>)
    {
        super(props);

        this.state = {
            currentExperience: null
        };

        this.setExperience = this.setExperience.bind(this);
    }

    ulClassName(): string
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

    setExperience(experience: string): void
    {
        this.setState({ currentExperience: this.state.currentExperience === experience ? null : experience });
    }

    render()
    { 
        return (
            <Section id="experience" defaultTitle="Esperienza">
                <ul className={this.ulClassName()}>
                {experience.map((value, index) => (
                    <TimelineItem
                    key={value.id} currentExperience={this.state.currentExperience} onClick={this.setExperience}
                    id={value.id} where={value.where} image={value.image} index={index}/>
                ))}
                </ul>
            </Section>
        );
    }
}
 
export default Experience;