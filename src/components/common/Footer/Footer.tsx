import React from 'react';
import { Link } from 'gatsby';

import Rocket from './Rocket';

import Translate from '../Translate';
import { translate } from '../Translate';
import AnchorLink from '../AnchorLink';
import { LocaleContext } from '../../../shared/context';

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

    getLocaleReactHref()
    {
        switch (this.context) {
            case 'it':
                return 'https://it.reactjs.org/';
            case 'en':
            default:
                return 'https://reactjs.org/';
        }
    }

    fireAnimation()
    {
        document.body.classList.add('rocket-fire');
        window.scrollTo(0, 0);
        setTimeout(() => document.body.classList.remove('rocket-fire'), 1500);
    }

    sendFeedback(locale: string)
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
                                <li><AnchorLink here={!!this.props.home} toHere="#" toThere="/" className="neon_activator neon1">
                                    Hero
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} toHere="#about" toThere="/#about" className="neon_activator neon1">
                                    <Translate selector="sections:about"/>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} toHere="#skills" toThere="/#skills" className="neon_activator neon1">
                                    <Translate selector="sections:skills"/>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} toHere="#experience" toThere="/#experience" className="neon_activator neon1">
                                    <Translate selector="sections:experience"/>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} toHere="#education" toThere="/#education" className="neon_activator neon1">
                                    <Translate selector="sections:education"/>
                                </AnchorLink></li>
                                <li><AnchorLink here={!!this.props.home} toHere="#projects" toThere="/#projects" className="neon_activator neon1">
                                    <Translate selector="sections:projects"/>
                                </AnchorLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects">
                        <div>
                            <h1><Translate selector="footer:sitemap:projects:heading"/></h1>
                            <ul>
                                <li>
                                    <Link to="/mscthesis" className="neon_activator neon1">
                                        <Translate selector="footer:sitemap:projects:mscthesis"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bscthesis" className="neon_activator neon1">
                                        <Translate selector="footer:sitemap:projects:bscthesis"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/audioengineer" className="neon_activator neon1">
                                        AudioEngineer
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
                                    <Link to="/guitar" className="neon_activator neon1">
                                        <Translate selector="guitar:heading"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/drone" className="neon_activator neon1">
                                        <Translate selector="drone:heading"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/electronics" className="neon_activator neon1">
                                        <Translate selector="electronics:heading"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="rocket-container" onClick={this.fireAnimation}>
                        {Rocket}
                    </div>
                    <div className="madeby">
                        <span>Made by Gianvito Difilippo</span>
                        <div>
                            built with&nbsp;
                            <a className="neon_activator neon1" href={this.getLocaleReactHref()} target="_blank">
                                React
                                <FontAwesomeIcon className="fa-icon" icon={faReact}/>
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
                            <button className="neon_activator" type="submit" id="feedback-submit">
                                <FontAwesomeIcon className="neon1" icon={faPaperPlane}/>
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