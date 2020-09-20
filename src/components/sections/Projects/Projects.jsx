import React from 'react';

import Section from '../Section';
import ProjectThumbnail from '../../misc/ProjectThumbnail';

import Modal from '../../misc/Modal';
import Translate from '../../misc/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { DeviceContext } from '../../../context';

import projects from './data.js';

import './projects_desktop.scss';
import './projects_tablet.scss';
import './projects_phone.scss';

const MainProjectPreview = props => (
    <li className="mainproject">
        <img src={projects[props.id].images[0]} alt="" className="noselect"/>
        <div className="box">
            <h1>{projects[props.id].name}</h1>
            <p>{projects[props.id].descr}</p>
        </div>
    </li>
);

const ProjectsDesktopTablet = props => (
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

class ProjectsPhone extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentProject: null
        };
    }

    setCurrentProject(project)
    {
        this.setState({
            currentProject: project === this.state.currentProject ? null : project
        });
    }

    render()
    {
        return (
            <Section id="projects" defaultTitle="Progetti">
                <ul className="mainlist">
                    <li onClick={() => this.setCurrentProject('audioengineer')}>
                        <ProjectThumbnail id="audioengineer"/>
                    </li>
                    <li onClick={() => this.setCurrentProject('voicenotes')}>
                        <ProjectThumbnail id="voicenotes"/>
                    </li>
                </ul>
                <h1><Translate selector="projects:other">Altri progetti</Translate></h1>
                <ul className="otherlist">
                    <li onClick={() => this.setCurrentProject('portfolio')}><ProjectThumbnail id="portfolio"/></li>
                    <li onClick={() => this.setCurrentProject('magicbet')}><ProjectThumbnail id="magicbet"/></li>
                    <li onClick={() => this.setCurrentProject('supermario')}><ProjectThumbnail id="supermario"/></li>
                </ul>
                <Modal isOpen={this.state.currentProject !== null} id="project-preview-modal">
                    {this.state.currentProject !== null
                    ?
                    <div className="project-preview-container">
                        <div className="box">
                            <h1>{projects[this.state.currentProject].name}</h1>
                            <p>{projects[this.state.currentProject].descr}</p>
                            <div className="background" style={ {
                                backgroundImage: `url(${projects[this.state.currentProject].thumbnail.backgroundImage})`,
                                backgroundPosition: projects[this.state.currentProject].thumbnail.backgroundPosition
                            } }>
                            </div>
                        </div>
                    </div>
                    :
                    null
                    }
                    <FontAwesomeIcon className="fa-icon" icon={faAngleDoubleLeft} onClick={() => this.setCurrentProject(null)}/>
                </Modal>
            </Section>
        );
    }
}

const Projects = props => {
    const { device } = React.useContext(DeviceContext);

    return device === 'phone' ? <ProjectsPhone/> : <ProjectsDesktopTablet/>
};

export default Projects;