import * as React from 'react';

import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import Section from '../Section';
import Translate from '../../../common/Translate';
import { Neon, NeonConsumer, NeonProvider } from '../../../common/Neon';

import './about_desktop.scss';
import './about_tablet.scss';
import './about_phone.scss';

import photo from '../../../../assets/img/photo.jpg';
import fiocco from '../../../../assets/img/fiocco.jpg';


class About extends React.PureComponent
{
    replacePoliba(text: string): JSX.Element
    {
        let strings = text.split('*');
        return (
            <>
                {strings[0]} <a href="http://www.poliba.it/" target="_blank">Politecnico di Bari</a>{strings[1]}
            </>
        );
    }

    replaceInterests(text: string): JSX.Element
    {
        let strings = text.split('*');
        return (
            <>
                {strings[0]}<Link to="/guitar" className="interests-link"><Translate selector="about:descr:guitar"/></Link>
                {strings[1]}<Link to="/drone" className="interests-link"><Translate selector="about:descr:drone"/></Link>
                {strings[2]}<Link to="/circuits" className="interests-link"><Translate selector="about:descr:circuits"/></Link>
                {strings[3]}<a className="interests-link" href={fiocco}>Fiocco</a>
                {strings[4]}
            </>
        );
    }

    render(): JSX.Element
    {
        console.log('ABOUT being rendered');

        return (
            <Section id="about" defaultTitle="Su di me">
                <div className="profile">
                    <img src={photo} alt="" className="profile-img noselect" />
                    <div>
                        <p className="box">
                            <Translate selector="about:descr:text:0"/>
                            <br/>
                            <Translate selector="about:descr:text:1" transform={text => this.replacePoliba(text)}/>
                            <br/>
                            <Translate selector="about:descr:text:2"/>
                            <br/>
                            <Translate selector="about:descr:text:3" transform={text => this.replaceInterests(text)}/>
                        </p>
                        <div>
                            <div className="contacts">
                                <h1><Translate selector="about:contacts"/></h1>
                                <NeonProvider>
                                    <a href="mailto:gianvito.difilippo@gmail.com" className="contact-link">
                                        <NeonConsumer>
                                            <FontAwesomeIcon className="fa-icon" icon={faEnvelope}/>
                                        </NeonConsumer>
                                        <span className="contact-data">
                                            <NeonConsumer>
                                                gianvito.difilippo@gmail.com
                                            </NeonConsumer>
                                        </span>
                                    </a>
                                </NeonProvider>
                                <NeonProvider>
                                    <a href="tel:+393898331018" className="contact-link">
                                        <NeonConsumer>
                                            <FontAwesomeIcon className="fa-icon" icon={faMobileAlt} />
                                        </NeonConsumer>
                                        <span className="contact-data">
                                            <NeonConsumer>
                                                +39 3898331018
                                            </NeonConsumer>
                                        </span>
                                    </a>
                                </NeonProvider>
                            </div>
                            <div className="social">
                                <h1><Translate selector="about:findme"/></h1>
                                <div className="icons">
                                    <a href="https://www.linkedin.com/in/gianvito-difilippo/" target="_blank">
                                        <div className="icon icon-linkedin"></div>
                                    </a>
                                    <a href="https://github.com/gianvitodifilippo" target="_blank">
                                        <div className="icon icon-github"></div>
                                    </a>
                                    <a href="https://www.facebook.com/GiaDif" target="_blank">
                                        <div className="icon icon-facebook"></div>
                                    </a>
                                    <a href="https://www.instagram.com/gianvitodifilippo/" target="_blank">
                                        <div className="icon icon-instagram"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default About;