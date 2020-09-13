import React from 'react';

import Section from '../Section';
import SkillPreview from './SkillPreview';
import SkillList from './SkillList';

import './skills_desktop.scss';
import './skills_tablet.scss';
import './skills_phone.scss';

class Skills extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentSkill: null
        };
        this.setSkill = this.setSkill.bind(this);
    }

    setSkill(skill)
    {
        if (this.state.inTransition) return;
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
 
export default Skills;