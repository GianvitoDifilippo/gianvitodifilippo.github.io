import React from 'react';

import Translate from '../../../Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { projects } from '../../sections/Projects';

import './projectthumbnail_desktop.scss';
import './projectthumbnail_tablet.scss';
import './projectthumbnail_phone.scss';

class ProjectThumbnail extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        
        this.id = props.id;
        this.project = projects[props.id];
    }

    render()
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
                    <p><Translate selector={`projects:descr:${this.id}`}/></p>
                        <a href="#">
                            <FontAwesomeIcon className="fa-icon" icon={faExternalLinkAlt}/>
                        </a>
                    </div>
                </div>
                <h2>{this.project.name}</h2>
            </div>
        );
    }
}
 
export default ProjectThumbnail;