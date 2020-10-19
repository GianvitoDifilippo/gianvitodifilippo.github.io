import * as React from 'react';

import { skills } from '..';

import './skillcard.scss';


type PropsType = {
    id: string,
    onClick?(value: string): void
}


const SkillCard = React.memo((props: Readonly<PropsType>) => {
    
    let onClick = props.onClick ? () => props.onClick(props.id) : null;
    return (
        <div className="skill-card" onClick={onClick}>
            <div className={`skill-icon icon-${props.id}`}></div>
            <div className="skill-name noselect">{skills[props.id].name}</div>
        </div>
    )
});


export default SkillCard;