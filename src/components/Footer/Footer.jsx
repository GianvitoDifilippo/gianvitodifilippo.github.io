import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Rocket from './Rocket.jsx';

import Translate from '../Translate';
import { translate } from '../Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { LocaleContext } from '../../context';

import './footer_desktop.scss';
import './footer_tablet.scss';
import './footer_phone.scss';

class Footer extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.rocketRef = React.createRef();

        this.getLocaleReactHref = this.getLocaleReactHref.bind(this);
        this.fireAnimation = this.fireAnimation.bind(this);
    }

    getLocaleReactHref()
    {
        switch (this.context.locale) {
            case 'it':
                return 'https://it.reactjs.org/';
            case 'en':
            default:
                return 'https://reactjs.org/';
        }
    }

    fireAnimation()
    {
        this.rocketRef.current.classList.add('active');
        setTimeout(() => this.rocketRef.current.classList.remove('active'), 1500);
    }

    sendFeedback(locale)
    {
        let ux = translate(`footer:feedback:ratings:${document.getElementById('feedback-rating').value}`, locale).toLowerCase();
        let message = document.getElementById('feedback-message').value;
        window.location.href = `mailto:gianvito.difilippo@gmail.com?subject=Feedback form&body=${
translate('misc:feedback:intro', locale)} ${translate('misc:feedback:ux', locale)} ${ux}.
${message ? '%0D%0A' + message : ''}%0D%0A%0D%0A${document.getElementById('feedback-name').value}%0D%0A`;
    }

    render()
    { 
        return (
            <footer id="footer">
                <div className="sitemap">
                    <div className="landingpage">
                        <div>
                            <h1>Home page</h1>
                            <ul>
                                <li><HashLink to="/#hero" className="neon_activator neon1">
                                    Hero
                                </HashLink></li>
                                <li><HashLink to="/#about" className="neon_activator neon1">
                                    <Translate selector="sections:about"/>
                                </HashLink></li>
                                <li><HashLink to="/#skills" className="neon_activator neon1">
                                    <Translate selector="sections:skills"/>
                                </HashLink></li>
                                <li><HashLink to="/#experience" className="neon_activator neon1">
                                    <Translate selector="sections:experience"/>
                                </HashLink></li>
                                <li><HashLink to="/#education" className="neon_activator neon1">
                                    <Translate selector="sections:education"/>
                                </HashLink></li>
                                <li><HashLink to="/#projects" className="neon_activator neon1">
                                    <Translate selector="sections:projects"/>
                                </HashLink></li>
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
                    <a href="#hero" onClick={this.fireAnimation} ref={this.rocketRef}>
                        {Rocket}
                    </a>
                    <div className="madeby">
                        <span>Made by Gianvito Difilippo</span>
                        <div>
                            with&nbsp;
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
                                <textarea placeholder={translate('footer:feedback:message', locale, 'Qualche suggerimento?')}
                                type="text" name="message" id="feedback-message" rows="3"></textarea>
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

Footer.contextType = LocaleContext;

export default Footer;