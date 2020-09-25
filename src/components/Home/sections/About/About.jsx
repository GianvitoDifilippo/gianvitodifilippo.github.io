import React from 'react';

import Section from '../Section';
import Translate from '../../../Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import './about_desktop.scss';
import './about_tablet.scss';
import './about_phone.scss';

import photo from '../../../../assets/img/photo.jpg';
import fiocco from '../../../../assets/img/fiocco.jpg';
import { DeviceContext } from '../../../../context';

class About extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            areRefsAssined: false
        };

        this.emailaddressRef = React.createRef();
        this.phonenumberRef = React.createRef();
        this.emailaddress_messageRef = React.createRef();
        this.phonenumber_messageRef = React.createRef();
    }

    replacePoliba(text)
    {
        let strings = text.split('*');
        return (
            <>
                {strings[0]} <a href="http://www.poliba.it/" target="_blank">Politecnico di Bari</a>{strings[1]}
            </>
        );
    }

    replaceInterests(text)
    {
        let strings = text.split('*');
        return (
            <>
                {strings[0]}<a className="interests-link" href="#"><Translate selector="about:descr:guitar"/></a>
                {strings[1]}<a className="interests-link" href="#"><Translate selector="about:descr:drone"/></a>
                {strings[2]}<a className="interests-link" href="#"><Translate selector="about:descr:circuits"/></a>
                {strings[3]}<a className="interests-link" href={fiocco}>Fiocco</a>
                {strings[4]}
            </>
        );
    }

    render()
    {
        // console.log('ABOUT being rendered');
        return (
            <Section id="about" defaultTitle="Su di me">
                <div className="profile">
                    <img src={photo} alt="" className="noselect" />
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
                                <a className="neon_activator" href="mailto:gianvito.difilippo@gmail.com">
                                    <FontAwesomeIcon className="fa-icon neon2" icon={faEnvelope} />
                                    <span ref={this.emailaddressRef} className="neon2">
                                        gianvito.difilippo@gmail.com
                                    </span>
                                </a>
                                <a className="neon_activator" href="tel:+393898331018">
                                    <FontAwesomeIcon className="fa-icon neon2" icon={faMobileAlt} />
                                    <span ref={this.phonenumberRef} className="neon2">
                                        +39 3898331018
                                    </span>
                                </a>
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

    componentDidMount() {
        this.setState({
            areRefsAssined: true
        });
    }
}

About.contextType = DeviceContext;

export default About;