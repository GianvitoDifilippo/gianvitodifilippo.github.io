import React from 'react';
import { Link } from 'gatsby';

import Rocket from './Rocket';

import Translate from '../Translate';
import { translate } from '../Translate';
import AnchorLink from '../AnchorLink';

import { LocaleContext } from '../../../shared/context';
import { Neon, NeonConsumer, NeonProvider } from '../Neon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


import './footer_desktop.scss';
import './footer_tablet.scss';
import './footer_phone.scss';


type PropsType = {
    home?: boolean
};


class Footer extends React.PureComponent<PropsType>
{
    static contextType = LocaleContext;

    constructor(props: Readonly<PropsType>)
    {
        super(props);

        this.getLocaleReactHref = this.getLocaleReactHref.bind(this);
        this.fireAnimation = this.fireAnimation.bind(this);
    }

    getLocaleReactHref(): string
    {
        switch (this.context) {
            case 'it':
                return 'https://it.reactjs.org/';
            case 'en':
            default:
                return 'https://reactjs.org/';
        }
    }

    fireAnimation(): void
    {
        document.body.classList.add('rocket-fire');
        window.scrollTo(0, 0);
        setTimeout(() => document.body.classList.remove('rocket-fire'), 1500);
    }

    sendFeedback(locale: string): void
    {
        let ux = translate(`footer:feedback:ratings:${(document.getElementById('feedback-rating') as HTMLSelectElement).value}`, locale).toLowerCase();
        let message = (document.getElementById('feedback-message') as HTMLTextAreaElement).value;
        window.location.href = `mailto:gianvito.difilippo@gmail.com?subject=Feedback form&body=${
translate('misc:feedback:intro', locale)} ${translate('misc:feedback:ux', locale)} ${ux}.
${message ? '%0D%0A' + message : ''}%0D%0A%0D%0A${(document.getElementById('feedback-name') as HTMLInputElement).value}%0D%0A`;
    }

    render(): JSX.Element
    { 
        return (
            <footer id="footer">
                <div className="sitemap">
                    <div className="landingpage">
                        <div>
                            <h1>Home page</h1>
                            <ul>
                                <li><AnchorLink here={!!this.props.home} to="/#">
                                    <Neon light>
                                        Hero
                                    </Neon>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} to="/#about">
                                    <Neon light>
                                        <Translate selector="sections:about"/>
                                    </Neon>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} to="/#skills">
                                    <Neon light>
                                        <Translate selector="sections:skills"/>
                                    </Neon>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} to="/#experience">
                                    <Neon light>
                                        <Translate selector="sections:experience"/>
                                    </Neon>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} to="/#education">
                                    <Neon light>
                                        <Translate selector="sections:education"/>
                                    </Neon>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} to="/#projects">
                                    <Neon light>
                                        <Translate selector="sections:projects"/>
                                    </Neon>
                                </AnchorLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects">
                        <div>
                            <h1><Translate selector="footer:sitemap:projects:heading"/></h1>
                            <ul>
                                <li>
                                    <Link to="/mscthesis">
                                        <Neon light>
                                            <Translate selector="footer:sitemap:projects:mscthesis"/>
                                        </Neon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bscthesis">
                                        <Neon light>
                                            <Translate selector="footer:sitemap:projects:bscthesis"/>
                                        </Neon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/audioengineer">
                                        <Neon light>
                                            AudioEngineer
                                        </Neon>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="interests">
                        <div>
                            <h1><Translate selector="footer:sitemap:interests"/></h1>
                            <ul>
                                <li>
                                    <Link to="/guitar">
                                        <Neon light>
                                            <Translate selector="guitar:heading"/>
                                        </Neon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/drone">
                                        <Neon light>
                                            <Translate selector="drone:heading"/>
                                        </Neon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/electronics">
                                        <Neon light>
                                            <Translate selector="electronics:heading"/>
                                        </Neon>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <NeonProvider>
                        <div className="rocket-container" onClick={this.fireAnimation}>
                            {Rocket}
                            <div className="up">
                                <NeonConsumer light>
                                    <Translate selector="footer:center:up"/>
                                </NeonConsumer>
                            </div>
                        </div>
                    </NeonProvider>
                    <div className="madeby">
                        <span>Made by Gianvito Difilippo</span>
                        <div>
                            built with&nbsp;
                            <a href={this.getLocaleReactHref()} target="_blank">
                                <Neon light>
                                    React
                                    <FontAwesomeIcon className="fa-icon" icon={faReact}/>
                                </Neon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="feedback">
                    <p>
                        <Translate selector="footer:feedback:tellme1"/>
                        <br/>
                        <Translate selector="footer:feedback:tellme2"/>
                    </p>
                    <LocaleContext.Consumer>
                    {({ locale, setLocale }) => (
                        <form method="" onSubmit={e => { e.preventDefault(); this.sendFeedback(locale); return false; }}>
                            <div>
                                <input placeholder={translate('footer:feedback:name', locale)} type="text" name="name" 
                                id="feedback-name" autoComplete="off" required/>
                                <select name="rating" id="feedback-rating" required>
                                    <option value="" disabled selected hidden>
                                        {translate('footer:feedback:ratings:placeholder', locale)}
                                    </option>
                                    <option value="good">
                                        {translate('footer:feedback:ratings:good', locale)} 😀
                                    </option>
                                    <option value="neutral">
                                        {translate('footer:feedback:ratings:neutral', locale)} 😐
                                    </option>
                                    <option value="bad">
                                        {translate('footer:feedback:ratings:bad', locale)} 🙄
                                    </option>
                                </select>
                                <textarea placeholder={translate('footer:feedback:message', locale)}
                                name="message" id="feedback-message" rows={3}></textarea>
                            </div>
                            <button type="submit" id="feedback-submit">
                                <Neon>
                                    <FontAwesomeIcon className="fa-icon" icon={faPaperPlane}/>
                                </Neon>
                            </button>
                        </form>
                    )}
                    </LocaleContext.Consumer>
                </div>
            </footer>
        );
    }
}

export default Footer;