import React from 'react';

import { skills } from '../';

import './skillitem.scss';

const SkillItem = React.memo(props => {
    const { id, onClick } = props;
    return (
        <li className="skill-item" onClick={() => onClick(id)}>
            <div className={`skill-icon icon-${id}`}></div>
            <div className="skill-name noselect">{skills[id].name}</div>
        </li>
    )
});

export default SkillItem;