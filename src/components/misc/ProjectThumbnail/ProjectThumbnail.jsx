import React from 'react';

import './projectthumbnail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

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
                <a href="#" className="space">
                    <div className="background" style={ {
                        backgroundImage: `url(${require(`../../../assets/img/projects/${this.id}_thumbnail.jpg`)})`,
                        backgroundPosition: projects[this.id].thumbnail.backgroundPosition
                    } }>
                    </div>
                    <FontAwesomeIcon className="fa-icon" icon={faSearchPlus}/>
                </a>
                <h2>{projects[this.id].name}</h2>
            </div>
        );
    }
}
 
export default ProjectThumbnail;