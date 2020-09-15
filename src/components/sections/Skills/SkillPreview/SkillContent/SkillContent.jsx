import React from 'react';

import SkillItem from '../../SkillItem';
import { skills } from '../../';
import Translate from '../../../../misc/Translate';
import ProjectThumbnail from '../../../../misc/ProjectThumbnail';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import './skillcontent_desktop.scss';
import './skillcontent_tablet.scss';
import './skillcontent_phone.scss';

const ProjectList = props => (
    <ul className="skill-projects-list">
        {props.projects.map(value => (
            <li key={value}>
                <ProjectThumbnail id={value}/>
            </li>
        ))}
    </ul>
);

const SkillContent = props => {
    const skill = skills[props.currentSkill];
    return (
        <ReactCSSTransitionReplace transitionName="fade-wait" transitionEnterTimeout={1000} transitionLeaveTimeout={400}>
            <div id="skill-content" key={props.currentSkill !== null}>
            {props.currentSkill
            ?
            <>
                <div className="skill-details-content">
                    <SkillItem id={props.currentSkill}/>
                    <div className="skill-brief">
                        <h2>{skill.name}</h2>
                        <h3>
                            <span className="bold">
                                <Translate selector="skills:preview:experience:key">Esperienza</Translate>
                                {': '}
                            </span>
                            {skill.experience.map((value, index) => (
                                <span className="value" key={value}>
                                    {index ? ', ' : ''}<Translate selector={`skills:preview:experience:values:${value}`}></Translate>
                                </span>
                            ))}
                        </h3>
                        <h3>
                            <span className="bold">
                                <Translate selector="skills:preview:since">Programmo dal</Translate>
                                {': '}
                            </span>
                            <span>{skill.since}</span>
                        </h3>
                    </div>
                    <p className="skill-descr">
                        <Translate selector={`skills:preview:descr:${props.currentSkill}`}></Translate>
                    </p>
                </div>
                <h1 className="box-heading"><Translate selector="skills:preview:projects">Progetti</Translate></h1>
                <ReactCSSTransitionReplace className="skill-projects-content"
                transitionName="cross-fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                    {
                        skill.projects.length !== 0
                        ?
                        <ProjectList key={props.currentSkill} projects={skill.projects}/>
                        :
                        <p key="null" className="skill-projects-none">
                            <Translate selector="skills:preview:noprojects">
                                Non ci sono progetti per questa skill al momento, ma possiamo avviare il primo insieme.
                            </Translate>
                            {' '}
                            <a href="mailto:gianvito.difilippo@gmail.com" className="neon_activator neon">
                                <Translate selector="skills:preview:contactme">Contattami!</Translate>
                            </a>
                        </p>
                    }
                </ReactCSSTransitionReplace>
            </>
            :
            null}
            </div>
        </ReactCSSTransitionReplace>
    );
}

export default SkillContent;