import * as React from 'react';

import Translate from '../../../common/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { projects } from '../../sections/Projects';
import { Project } from '../../sections/Projects/data';

import './projectthumbnail_desktop.scss';
import './projectthumbnail_tablet.scss';
import './projectthumbnail_phone.scss';


type PropsType = {
    id: string
};


class ProjectThumbnail extends React.Component<PropsType>
{
    get project(): Project
    {
        return projects[this.props.id];
    }

    render(): JSX.Element
    {
        return (
            <div className="project-thumbnail">
                <div className="space">
                    <div className="background" style={ {
                        backgroundImage: `url(${this.project.thumbnail.backgroundImage})`,
                        backgroundPosition: this.project.thumbnail.backgroundPosition
                    } }>
                    </div>
                    <div className="content">
                    <p><Translate selector={`projects:descr:${this.props.id}`}/></p>
                        <a href={this.project.href} target="_blank">
                            <FontAwesomeIcon className="fa-icon" icon={faExternalLinkAlt}/>
                        </a>
                    </div>
                </div>
                <h2>{this.project.name}</h2>
            </div>
        );
    }

    shouldComponentUpdate(): boolean
    {
        return false;
    }
}
 
export default ProjectThumbnail;