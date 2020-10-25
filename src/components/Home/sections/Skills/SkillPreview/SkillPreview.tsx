import * as React from 'react';

import SkillContent from './SkillContent';
import Translate from '../../../../common/Translate';
import Modal from '../../../../common/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { DeviceContext } from '../../../../../shared/context';

import './skillpreview_desktop.scss';
import './skillpreview_tablet.scss';
import './skillpreview_phone.scss';


type PropsType = {
    currentSkill: string,
    setSkill(value: string): void
};


const SkillPreviewDesktop = (props: Readonly<PropsType>) => (
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

const SkillPreviewMobile = (props: Readonly<PropsType>) => {
    const [ body, setBody ] = React.useState<Element>(null);
    if (body === null) {
        if (typeof document !== 'undefined') setBody(document.body);
        return null;
    }
    
    return (
        <Modal parent={body} isOpen={props.currentSkill !== null} id="skill-preview-modal" onClose={() => props.setSkill(null)}>
            <SkillPreviewDesktop {...props}/>
        </Modal>
    );
};

const SkillPreview = (props: Readonly<PropsType>) => {
    const device = React.useContext(DeviceContext);

    return (
        device === 'desktop'
        ?
        <SkillPreviewDesktop {...props}/>
        :
        <SkillPreviewMobile {...props}/>
    );
};

export default SkillPreview;