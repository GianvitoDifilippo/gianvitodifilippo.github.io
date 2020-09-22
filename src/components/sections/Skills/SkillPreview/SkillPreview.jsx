import React from 'react';

import SkillContent from './SkillContent';
import Translate from '../../../misc/Translate';
import Modal from '../../../misc/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { DeviceContext } from '../../../../context';

import './skillpreview_desktop.scss';
import './skillpreview_tablet.scss';
import './skillpreview_phone.scss';

const SkillPreviewDesktop = props => (
    <div id="skill-preview" className="box">
        <h1 className="box-heading">
            {props.currentSkill
            ?
            <Translate selector="skills:preview:details"/>
            :
            <Translate selector="skills:preview:message"/>
            }
        </h1>
        <SkillContent currentSkill={props.currentSkill}/>
    </div>
);

const SkillPreviewMobile = props => (
    <Modal isOpen={props.currentSkill !== null} id="skill-preview-modal">
        <div className="skill-preview-container">
            <SkillPreviewDesktop {...props}/>
        </div>
        <FontAwesomeIcon className="fa-icon" icon={faAngleDoubleLeft} onClick={() => props.setSkill(null)}/>
    </Modal>
);

const SkillPreview = props => {
    const { device } = React.useContext(DeviceContext);

    return (
        device === 'desktop'
        ?
        <SkillPreviewDesktop {...props}/>
        :
        <SkillPreviewMobile {...props}/>
    );
};

export default SkillPreview;