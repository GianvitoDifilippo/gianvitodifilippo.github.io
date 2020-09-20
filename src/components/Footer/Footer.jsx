import React from 'react';

import Translate from '../misc/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import './footer_desktop.scss';
import './footer_tablet.scss';
import './footer_phone.scss';
import { LocaleContext } from '../../context';

class Footer extends React.PureComponent
{
    getLocaleReactHref()
    {
        switch (this.context.locale) {
            case 'it':
                return 'https://it.reactjs.org/';
            case 'es':
                return 'https://es.reactjs.org/';
            case 'en':
            default:
                return 'https://reactjs.org/';
        }
    }

    render()
    { 
        return (
            <footer id="footer">
                <div className="sitemap">
                    <div className="landingpage">
                        <h1>Landing page</h1>
                        <ul>
                            <li><a href="#hero" className="neon_activator neon1">
                                Hero
                            </a></li>
                            <li><a href="#about" className="neon_activator neon1">
                                <Translate selector="sections:about">Su di me</Translate>
                            </a></li>
                            <li><a href="#skills" className="neon_activator neon1">
                                <Translate selector="sections:skills">Skills</Translate>
                            </a></li>
                            <li><a href="#experience" className="neon_activator neon1">
                                <Translate selector="sections:experience">Esperienza</Translate>
                            </a></li>
                            <li><a href="#education" className="neon_activator neon1">
                                <Translate selector="sections:education">Educazione</Translate>
                            </a></li>
                            <li><a href="#projects" className="neon_activator neon1">
                                <Translate selector="sections:projects">Progetti</Translate>
                            </a></li>
                        </ul>
                    </div>
                    <div className="interests">
                        <h1>Interessi</h1>
                        <ul>
                            <li>Chitarra</li>
                            <li>Drone</li>
                            <li>Elettronica</li>
                        </ul>
                    </div>
                    <div className="technical">
                        <h1>Technical</h1>
                        <ul>
                            <li>OptiTruck</li>
                            <li>AudioEngineer</li>
                        </ul>
                    </div>
                </div>
                <div className="madeby">
                    Made by Gianvito Difilippo
                    <div>
                        with React
                        <a href={this.getLocaleReactHref()} target="_blank"><FontAwesomeIcon className="fa-icon" icon={faReact}/></a>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.contextType = LocaleContext;

export default Footer;