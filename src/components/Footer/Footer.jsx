import React from 'react';

import Translate from '../misc/Translate';
import { translate } from '../misc/Translate';

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
            case 'es':
                return 'https://es.reactjs.org/';
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
                    </div>
                    <div className="projects">
                        <div>
                            <h1><Translate selector="footer:projects:heading">Progetti in dettaglio</Translate></h1>
                            <ul>
                                <li>
                                    <a href="#" className="neon_activator neon1">
                                        <Translate selector="footer:projects:mscthesis">Tesi di laurea magistrale</Translate>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="neon_activator neon1">
                                        <Translate selector="footer:projects:bscthesis">Tesi di laurea triennale</Translate>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="neon_activator neon1">
                                        AudioEngineer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="interests">
                        <div>
                            <h1><Translate selector="footer:interests:heading">Interessi</Translate></h1>
                            <ul>
                                <li>
                                    <a href="#" className="neon_activator neon1">
                                        <Translate selector="footer:interests:guitar">Chitarra</Translate>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="neon_activator neon1">
                                        <Translate selector="footer:interests:drone">Fotografia aerea</Translate>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="neon_activator neon1">
                                        <Translate selector="footer:interests:electronics">Elettronica</Translate>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <a href="#hero" onClick={this.fireAnimation} ref={this.rocketRef}>
                        <svg className="rocket" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="512px" height="512px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" space="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path className="rocket-body" d="M204.192,62.194c14.147-20.472,29.339-41.613,50.963-54.72c21.323,12.782,36.366,33.547,50.311,53.656
			            	c32.847,49.754,52.929,109.515,48.878,169.578c10.615,8.898,21.537,17.441,31.994,26.521
			            	c15.011,13.797,22.02,35.319,18.406,55.327c-5.036,25.275-9.876,50.607-15.206,75.813c-2.963,12.968-20.508,18.905-30.823,10.62
			            	c-17.121-14.291-33.816-29.108-50.932-43.417c-12.95,12.462-30.153,20.772-48.214,21.773
			            	c-20.791,1.466-41.375-7.156-56.448-21.242c-12.28,9.401-23.666,20.686-35.664,30.755c-5.799,4.66-10.621,10.784-17.484,13.966
			            	c-10.64,4.565-24.342-2.248-26.747-13.685c-5.479-24.642-11.203-49.24-16.52-73.92c-4.321-20.878,3.332-43.61,19.419-57.607
			            	c9.313-7.822,18.756-15.487,28.243-23.096c2.643-1.39,1.315-4.596,1.465-6.951C153.005,167.614,172.8,110.333,204.192,62.194z
			            	 M220.995,138.526c-12.424,15.994-10.921,40.768,3.488,55.052c15.255,16.809,44.15,17.422,60.106,1.29
			            	c12.317-11.253,16.482-30.146,10.603-45.671c-5.387-14.967-19.809-26.195-35.671-27.591
			            	C244.873,119.92,229.706,126.659,220.995,138.526z"/>
                                    </g>
                                    <path className="rocket-flame" d="M198.263,407.819c-0.213-7.266,8.83-12.262,14.942-8.417c25.87,13.32,58.027,13.314,83.896-0.007
			            c5.937-3.645,14.736,0.733,14.955,7.803c0.087,15.432,0.105,30.88,0.024,46.317c0.119,7.533-9.832,12.337-15.681,7.626
			            c-4.452-3.926-8.467-8.341-12.75-12.461c-6.776,13.201-13.163,26.602-19.995,39.772c-3.281,6.275-13.533,6.318-16.877,0.105
			            c-6.87-13.195-13.213-26.676-20.121-39.858c-4.221,4.157-8.248,8.548-12.694,12.468c-5.824,4.734-15.756-0.162-15.675-7.647
			            C198.163,438.291,198.244,423.055,198.263,407.819z"/>
                                </g>
                                <circle className="rocket-circle" cx="254.831" cy="164.509" r="20.812" />
                            </g>
                        </svg>
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
                        <Translate selector="footer:feedback:tellme1">Com'è stata la tua esperienza di navigazione?</Translate>
                        <br/>
                        <Translate selector="footer:feedback:tellme2">Fammelo sapere riempendo il modulo in basso.</Translate>
                    </p>
                    <LocaleContext.Consumer>
                    {({ locale, setLocale }) => (
                        <form method="" onSubmit={e => { e.preventDefault(); this.sendFeedback(locale); return false; }}>
                            <div>
                                <input placeholder={translate('footer:feedback:name', locale, 'Il tuo nome')} type="text" name="name" 
                                id="feedback-name" autoComplete="off" required/>
                                <select name="rating" id="feedback-rating" required>
                                    <option value="" disabled selected hidden>
                                        {translate('footer:feedback:ratings:placeholder', locale, 'La tua valutazione')}
                                    </option>
                                    <option value="good">
                                        {translate('footer:feedback:ratings:good', locale, 'Positiva')} 😀
                                    </option>
                                    <option value="neutral">
                                        {translate('footer:feedback:ratings:neutral', locale, 'Neutrale')} 😐
                                    </option>
                                    <option value="bad">
                                        {translate('footer:feedback:ratings:bad', locale, 'Negativa')} 🙄
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