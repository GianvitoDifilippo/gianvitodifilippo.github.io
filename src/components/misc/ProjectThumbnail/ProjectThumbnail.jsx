import React from 'react';

import './projectthumbnail_desktop.scss';
import './projectthumbnail_tablet.scss';
import './projectthumbnail_phone.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { projects } from '../../sections/Projects';

class ProjectThumbnail extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        
        this.id = props.id;
    }

    render()
    {
        return (
            <div className="project-thumbnail">
                <div className="space">
                    <div className="background" style={ {
                        backgroundImage: `url(${projects[this.id].thumbnail.backgroundImage})`,
                        backgroundPosition: projects[this.id].thumbnail.backgroundPosition
                    } }>
                    </div>
                    <div className="content">
                    <p>{projects[this.id].descr}</p>
                        <a href="#">
                            <FontAwesomeIcon className="fa-icon" icon={faExternalLinkAlt}/>
                        </a>
                    </div>
                </div>
                <h2>{projects[this.id].name}</h2>
            </div>
        );
    }
}
 
export default ProjectThumbnail;