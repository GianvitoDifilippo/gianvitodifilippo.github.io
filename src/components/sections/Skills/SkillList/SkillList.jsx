import React from 'react';

import SkillItem from '../SkillItem';
import Translate from '../../../misc/Translate';

import './skilllist_desktop.scss';
import './skilllist_tablet.scss';
import './skilllist_phone.scss';

const SkillSection = React.memo(props =>
(
    <li className={`box ${props.id}`}>
        <h1 className="box-heading"><Translate selector={`skills:list:${props.id}`}>{props.defaultName}</Translate></h1>
        <ul className="icons">
            {props.children}
        </ul>
    </li>
));

class SkillList extends React.PureComponent
{
    render()
    {
        // console.log('SKILLLIST being rendered');
        return (
            <ul id="skill-list">
                <SkillSection id="languages" defaultName="Linguaggi">
                    <li><SkillItem id="cplusplus" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="csharp" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="python" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="java" onClick={this.props.setSkill}/></li>
                </SkillSection>
                <SkillSection id="tools" defaultName="Strumenti">
                    <li><SkillItem id="matlab" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="labview" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="docker" onClick={this.props.setSkill}/></li>
                </SkillSection>
                <SkillSection id="backend" defaultName="Back-end">
                    <li><SkillItem id="dotnet" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="postgresql" onClick={this.props.setSkill}/></li>
                </SkillSection>
                <SkillSection id="webdev" defaultName="Sviluppo web">
                    <li><SkillItem id="html" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="css" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="javascript" onClick={this.props.setSkill}/></li>
                    <li><SkillItem id="react" onClick={this.props.setSkill}/></li>
                </SkillSection>
            </ul>
        );
    }
}

export default SkillList;