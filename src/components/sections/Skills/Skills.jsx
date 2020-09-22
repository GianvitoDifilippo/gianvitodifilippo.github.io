import React from 'react';

import Section from '../Section';
import SkillPreview from './SkillPreview';
import SkillList from './SkillList';

import './skills_desktop.scss';
import './skills_tablet.scss';
import './skills_phone.scss';
import { DeviceContext } from '../../../context';

class Skills extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentSkill: null
        };
        
        this.sectionRef = React.createRef();

        this.setSkill = this.setSkill.bind(this);
    }

    setSkill(skill)
    {
        let sectionY = document.getElementById('skills').getBoundingClientRect().y;
        if (skill !== null && skill !== this.state.currentSkill && this.context.device === 'desktop' && sectionY < -150) {
            window.location.href = '#skills';
        }
        this.setState({
            currentSkill: this.state.currentSkill !== skill ? skill : null
        });
    }

    render()
    {
        // console.log('SKILLS being rendered');
        return (
            <Section id="skills" defaultTitle="Skills">
                <SkillList setSkill={this.setSkill}/>
                <SkillPreview currentSkill={this.state.currentSkill} setSkill={this.setSkill}/>
            </Section>
        );
    }
}

Skills.contextType = DeviceContext;
 
export default Skills;