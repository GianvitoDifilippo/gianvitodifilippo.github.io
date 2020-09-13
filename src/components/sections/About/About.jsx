import React from 'react';

import Section from '../Section';
import Message from '../../misc/Message'
import Translate from '../../misc/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import './about_desktop.scss';
import './about_tablet.scss';
import './about_phone.scss';

import photo from '../../../assets/img/photo.jpg';

class About extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            areRefsAssined: false
        };
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quibusdam molestiae, consequuntur
                            non nobis voluptas sapiente, illum omnis necessitatibus, deleniti id? Aliquid eligendi iste porro
                            cupiditate inventore laborum voluptates minus, sapiente itaque recusandae velit, enim ex adipisci
                            temporibus molestiae vero quisquam. Laborum, ut quasi eos commodi incidunt vel fugit. Nesciunt,
                            repudiandae repellendus maiores omnis molestias facilis eius dolore voluptas ipsam exercitationem
                            quibusdam quasi explicabo perspiciatis facere laborum at veritatis tenetur esse rerum similique impedit,
                            modi asperiores. Corporis vero nulla impedit accusamus illo provident dignissimos magnam autem sequi
                            odio!
                            </p>
                        <div>
                            <div className="contacts">
                                <h1><Translate selector="about:contacts">Contatti</Translate></h1>
                                <div className="neon_activator" onClick={() => this.refs.emailaddress_message.open()}>
                                    <FontAwesomeIcon className="fa-icon neon2" icon={faEnvelope} />
                                    <span ref="emailaddress" className="neon2 noselect">
                                        gianvito.difilippo@gmail.com
                                        <Message ref="emailaddress_message"
                                            x="center" xParent={this.refs.emailaddress}
                                            y="bottom,10px" yParent={this.refs.emailaddress}>
                                            <Translate selector="messages:copied">Copiato!</Translate>
                                        </Message>
                                    </span>
                                </div>
                                <div className="neon_activator" onClick={() => this.refs.phonenumber_message.open()}>
                                    <FontAwesomeIcon className="fa-icon neon2" icon={faMobileAlt} />
                                    <span ref="phonenumber" className="neon2 noselect">
                                        +39 3898331018
                                        <Message ref="phonenumber_message"
                                            x="center" xParent={this.refs.phonenumber}
                                            y="bottom,10px" yParent={this.refs.phonenumber}>
                                            <Translate selector="messages:copied">Copiato!</Translate>
                                        </Message>
                                    </span>
                                </div>
                            </div>
                            <div className="social">
                                <h1><Translate selector="about:findme">Mi trovi anche su</Translate></h1>
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

export default About;