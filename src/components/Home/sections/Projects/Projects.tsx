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
        <img src={projects[props.id].images[0]} alt="" className="noselect"/>
        <div className="box">
            <div className="heading">
                <h1>{projects[props.id].name}</h1>
                <a href="#"><FontAwesomeIcon className="fa-icon" icon={faExternalLinkAlt}/></a>
            </div>
            <p><Translate selector={`projects:descr:${props.id}`}/></p>
        </div>
    </li>
);


const ProjectsDesktopTablet = (props: Readonly<{}>) => (
    <Section id="projects" defaultTitle="Progetti">
        <ul className="mainlist">
            <MainProjectPreview id="audioengineer"/>
            <MainProjectPreview id="voicenotes"/>
        </ul>
        <h1><Translate selector="projects:other"/></h1>
        <ul className="otherlist">
            <li><ProjectThumbnail id="portfolio"/></li>
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
    body: Element;

    constructor(props: Readonly<{}>)
    {
        super(props);

        this.state = {
            currentProject: null
        };

        this.body = null;
    }

    setCurrentProject(project: string): void
    {
        this.setState({ currentProject: project === this.state.currentProject ? null : project });
    }

    render(): JSX.Element
    {
        if (this.body === null) return null;

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
                <h1><Translate selector="projects:other"/></h1>
                <ul className="otherlist">
                    <li onClick={() => this.setCurrentProject('portfolio')}><ProjectThumbnail id="portfolio"/></li>
                    <li onClick={() => this.setCurrentProject('magicbet')}><ProjectThumbnail id="magicbet"/></li>
                    <li onClick={() => this.setCurrentProject('supermario')}><ProjectThumbnail id="supermario"/></li>
                </ul>
                <Modal parent={this.body} isOpen={this.state.currentProject !== null} id="project-preview-modal">
                    <div className="project-preview-container">
                        <CSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                            {this.state.currentProject !== null
                            ?
                            <div className="box">
                                <h1>{projects[this.state.currentProject].name}</h1>
                                <p><Translate selector={`projects:descr:${this.state.currentProject}`}/></p>
                                <a href="#"><FontAwesomeIcon className="fa-icon" icon={faExternalLinkAlt}/></a>
                                <div className="background" style={ {
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
                    <FontAwesomeIcon className="fa-icon" icon={faAngleDoubleLeft} onClick={() => this.setCurrentProject(null)}/>
                </Modal>
            </Section>
        );
    }

    componentDidMount()
    {
        this.body = document.body;
        this.forceUpdate();
    }
}

const Projects = (props: Readonly<{}>) => {
    const device = React.useContext(DeviceContext);

    return device === 'phone' ? <ProjectsPhone/> : <ProjectsDesktopTablet/>
};

export default Projects;