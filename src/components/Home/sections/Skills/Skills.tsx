import * as React from 'react';

import Section from '../Section';
import SkillPreview from './SkillPreview';
import SkillList from './SkillList';

import './skills_desktop.scss';
import './skills_tablet.scss';
import './skills_phone.scss';
import { DeviceContext } from '../../../../shared/context';


type StateType = {
    currentSkill: string
};


class Skills extends React.PureComponent<{}, StateType>
{
    static contextType = DeviceContext;
    
    constructor(props: Readonly<{}>)
    {
        super(props);

        this.setSkill = this.setSkill.bind(this);

        this.state = {
            currentSkill: null
        };
    }

    setSkill(skill: string): void
    {
        let sectionY = document.getElementById('skills').getBoundingClientRect().y;
        console.log(skill, this.state.currentSkill, sectionY);
        if (skill !== null && skill !== this.state.currentSkill && this.context === 'desktop' && sectionY < -150) {
            window.location.href = '#skills';
        }
        this.setState({ currentSkill: this.state.currentSkill !== skill ? skill : null });
    }


    render(): JSX.Element
    {
        console.log('SKILLS being rendered', this.state.currentSkill);

        let a = (
            <Section id="skills" defaultTitle="Skills">
                <SkillList setSkill={this.setSkill}/>
                <SkillPreview currentSkill={this.state.currentSkill} setSkill={this.setSkill}/>
            </Section>
        );

        console.log(a);
        
        return a;
    }
}
 
export default Skills;