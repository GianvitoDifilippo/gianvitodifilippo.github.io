import * as React from 'react';
import CSSTransitionReplace from 'react-css-transition-replace';

import Section from '../Section';
import ProjectThumbnail from '../../common/ProjectThumbnail';

import Modal from '../../../common/Modal';
import Translate from '../../../common/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { DeviceContext } from '../../../../shared/context';

import projects from './data';

import './projects_desktop.scss';
import './projects_tablet.scss';
import './projects_phone.scss';


const MainProjectPreview = (props: Readonly<{ id: string }>): JSX.Element => (
    <li className="mainproject">
        <img src={projects[props.id].images[0]} alt="" className="has-shadow noselect"/>
        <div className="box">
            <div className="heading">
                <h1>{projects[props.id].name}</h1>
                <a href={projects[props.id].href}  target="_blank">
                    <FontAwesomeIcon className="fa-icon" icon={faExternalLinkAlt}/>
                </a>
            </div>
            <p><Translate selector={`projects:descr:${props.id}`}/></p>
        </div>
    </li>
);


const ProjectsDesktopTablet = () => (
    <Section id="projects" defaultTitle="Progetti">
        <ul className="mainlist">
            <MainProjectPreview id="audioengineer"/>
            <MainProjectPreview id="generatorkit"/>
        </ul>
        <h1><Translate selector="projects:other"/></h1>
        <ul className="otherlist">
            <li><ProjectThumbnail id="portfolio"/></li>
            <li><ProjectThumbnail id="voicenotes"/></li>
            <li><ProjectThumbnail id="magicbet"/></li>
            <li><ProjectThumbnail id="supermario"/></li>
        </ul>
    </Section>
);


type ProjectsPhoneStateType = {
    currentProject: string
};


class ProjectsPhone extends React.PureComponent<{}, ProjectsPhoneStateType>
{
    constructor(props: Readonly<{}>)
    {
        super(props);

        this.state = {
            currentProject: null
        };
    }

    setCurrentProject(project: string): void
    {
        this.setState({ currentProject: project === this.state.currentProject ? null : project });
    }

    render(): JSX.Element
    {
        return (
            <Section id="projects" defaultTitle="Progetti">
                <ul className="mainlist">
                    <li onClick={() => this.setCurrentProject('audioengineer')}>
                        <ProjectThumbnail id="audioengineer"/>
                    </li>
                    <li onClick={() => this.setCurrentProject('generatorkit')}>
                        <ProjectThumbnail id="generatorkit"/>
                    </li>
                </ul>
                <h1><Translate selector="projects:other"/></h1>
                <ul className="otherlist">
                    <li onClick={() => this.setCurrentProject('portfolio')}><ProjectThumbnail id="portfolio"/></li>
                    <li onClick={() => this.setCurrentProject('voicenotes')}><ProjectThumbnail id="voicenotes"/></li>
                    <li onClick={() => this.setCurrentProject('magicbet')}><ProjectThumbnail id="magicbet"/></li>
                    <li onClick={() => this.setCurrentProject('supermario')}><ProjectThumbnail id="supermario"/></li>
                </ul>
                <Modal isOpen={this.state.currentProject !== null} id="project-preview-modal" onClose={() => this.setCurrentProject(null)}>
                    <div className="modal-content">
                        <CSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                            {this.state.currentProject !== null
                            ?
                            <div className="box">
                                <h1>{projects[this.state.currentProject].name}</h1>
                                <p><Translate selector={`projects:descr:${this.state.currentProject}`}/></p>
                                <a href={projects[this.state.currentProject].href} target="_blank">
                                    <FontAwesomeIcon className="fa-icon external-link" icon={faExternalLinkAlt}/>
                                </a>
                                <div className="background has-shadow" style={ {
                                    backgroundImage: `url(${projects[this.state.currentProject].thumbnail.backgroundImage})`,
                                    backgroundPosition: projects[this.state.currentProject].thumbnail.backgroundPosition
                                } }>
                                </div>
                            </div>
                            :
                            null
                            }
                        </CSSTransitionReplace>
                    </div>
                </Modal>
            </Section>
        );
    }
}

const Projects = () => {
    const device = React.useContext(DeviceContext);

    return device === 'phone' ? <ProjectsPhone/> : <ProjectsDesktopTablet/>;
};

export default Projects;