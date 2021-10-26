import * as React from 'react';

import SkillCard from '../SkillCard';
import Translate from '../../../../common/Translate';

import './skilllist_desktop.scss';
import './skilllist_tablet.scss';
import './skilllist_phone.scss';


type SkillSectionPropsType = {
    id: string,
    defaultName: string,
    children?: React.ReactNode
}


const SkillSection = React.memo((props: SkillSectionPropsType) => (
    <li className={`box ${props.id}`}>
        <h1 className="box-heading"><Translate selector={`skills:list:${props.id}`}>{props.defaultName}</Translate></h1>
        <ul className="icons">
            {props.children}
        </ul>
    </li>
));


type PropsType = {
    setSkill(value: string): void
}


class SkillList extends React.PureComponent<PropsType>
{
    render()
    {
        return (
            <ul id="skill-list">
                <SkillSection id="languages" defaultName="Linguaggi">
                    <li><SkillCard id="cplusplus" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="csharp" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="python" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="java" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="typescript" onClick={this.props.setSkill}/></li>
                </SkillSection>
                <SkillSection id="frontend" defaultName="Front end">
                    <li><SkillCard id="html" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="css" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="react" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="angular" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="sass" onClick={this.props.setSkill}/></li>
                </SkillSection>
                <SkillSection id="backend" defaultName="Back end">
                    <li><SkillCard id="dotnet" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="postgresql" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="sqlserver" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="envoy" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="dapr" onClick={this.props.setSkill}/></li>
                </SkillSection>
                <SkillSection id="tools" defaultName="Strumenti">
                    <li><SkillCard id="visualstudio" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="vscode" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="matlab" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="docker" onClick={this.props.setSkill}/></li>
                    <li><SkillCard id="git" onClick={this.props.setSkill}/></li>
                </SkillSection>
            </ul>
        );
    }
}


export default SkillList;