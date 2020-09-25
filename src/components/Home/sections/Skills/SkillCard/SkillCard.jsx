import React from 'react';

import { skills } from '..';

import './skillcard.scss';

const SkillCard = React.memo(props => {
    const { id, onClick } = props;
    return (
        <div className="skill-card" onClick={() => onClick(id)}>
            <div className={`skill-icon icon-${id}`}></div>
            <div className="skill-name noselect">{skills[id].name}</div>
        </div>
    )
});

export default SkillCard;