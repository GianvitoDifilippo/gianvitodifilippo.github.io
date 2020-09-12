import React from 'react';

import SkillContent from './SkillContent';
import Translate from '../../../misc/Translate';

import './skillpreview.scss';

const SkillPreview = props => (
    <div id="skill-preview" className="box">
        <h1 className="box-heading">
            {props.currentSkill
            ?
            <Translate selector="skills:preview:details">Dettagli</Translate>
            :
            <Translate selector="skills:preview:message">Clicca su una skill per i dettagli</Translate>
            }
        </h1>
        <SkillContent currentSkill={props.currentSkill}/>
    </div>
);

export default SkillPreview;