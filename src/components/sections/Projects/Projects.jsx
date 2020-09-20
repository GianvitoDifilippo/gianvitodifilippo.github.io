import React from 'react';

import Section from '../Section';
import ProjectThumbnail from '../../misc/ProjectThumbnail';

import Translate from '../../misc/Translate';

import projects from './data.js';

import './projects_desktop.scss';
import './projects_tablet.scss';
import './projects_phone.scss';
import { DeviceContext } from '../../../context';

const MainProjectPreview = props => (
    <li className="mainproject">
        <img src={projects[props.id].images[0]} alt="" className="noselect"/>
        <div className="box">
            <h1>{projects[props.id].name}</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora corporis reiciendis quaerat, non minus,
                eum vitae fugiat praesentium consequuntur id laudantium? Provident tempore fugiat ipsum fuga quas vel.
                Optio tempore atque quis dicta. Commodi distinctio vitae porro numquam reprehenderit quisquam in blanditiis. 
                Quia, earum eligendi veritatis est dicta nulla ipsa quis unde obcaecati, nesciunt dolore soluta nisi! Aliquam
                earum ullam facere corrupti nulla eos quibusdam est, aperiam quo ipsum soluta alias perspiciatis deserunt harum
                voluptatibus? Ipsam nam omnis accusamus earum.
            </p>
        </div>
    </li>
);

class ProjectsDesktopTablet extends React.PureComponent {
    render() {
        return (
            <Section id="projects" defaultTitle="Progetti">
                <ul className="mainlist">
                    <MainProjectPreview id="audioengineer"/>
                    <MainProjectPreview id="voicenotes"/>
                </ul>
                <h1><Translate selector="projects:other">Altri progetti</Translate></h1>
                <ul className="otherlist">
                    <li><ProjectThumbnail id="portfolio"/></li>
                    <li><ProjectThumbnail id="magicbet"/></li>
                    <li><ProjectThumbnail id="supermario"/></li>
                </ul>
            </Section>
        );
    }
}

class ProjectsPhone extends React.PureComponent {
    render() {
        return (
            <Section id="projects" defaultTitle="Progetti">
                <ul className="mainlist">
                    <li><ProjectThumbnail id="audioengineer"/></li>
                    <li><ProjectThumbnail id="voicenotes"/></li>
                </ul>
                <h1><Translate selector="projects:other">Altri progetti</Translate></h1>
                <ul className="otherlist">
                    <li><ProjectThumbnail id="portfolio"/></li>
                    <li><ProjectThumbnail id="magicbet"/></li>
                    <li><ProjectThumbnail id="supermario"/></li>
                </ul>
            </Section>
        );
    }
}

const Projects = props => {
    const { device } = React.useContext(DeviceContext);
    console.log(device);

    if (device === 'phone') return <ProjectsPhone {...props}/>
    return <ProjectsDesktopTablet {...props}/>
};

export default Projects;