import React from 'react';

import SkillItem from '../SkillItem';
import Translate from '../../../misc/Translate';

import './skilllist.scss';

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
        console.log('SKILLLIST being rendered');
        return (
            <ul id="skill-list">
                <SkillSection id="languages" defaultName="Linguaggi">
                    <SkillItem id="cplusplus" onClick={this.props.setSkill}/>
                    <SkillItem id="csharp" onClick={this.props.setSkill}/>
                    <SkillItem id="python" onClick={this.props.setSkill}/>
                    <SkillItem id="java" onClick={this.props.setSkill}/>
                </SkillSection>
                <SkillSection id="tools" defaultName="Strumenti">
                    <SkillItem id="matlab" onClick={this.props.setSkill}/>
                    <SkillItem id="labview" onClick={this.props.setSkill}/>
                    <SkillItem id="docker" onClick={this.props.setSkill}/>
                </SkillSection>
                <SkillSection id="backend" defaultName="Back-end">
                    <SkillItem id="dotnet" onClick={this.props.setSkill}/>
                    <SkillItem id="postgresql" onClick={this.props.setSkill}/>
                </SkillSection>
                <SkillSection id="webdev" defaultName="Sviluppo web">
                    <SkillItem id="html" onClick={this.props.setSkill}/>
                    <SkillItem id="css" onClick={this.props.setSkill}/>
                    <SkillItem id="javascript" onClick={this.props.setSkill}/>
                    <SkillItem id="react" onClick={this.props.setSkill}/>
                </SkillSection>
            </ul>
        );
    }
}

export default SkillList;