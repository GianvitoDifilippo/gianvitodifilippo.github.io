import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCrow, faDragon } from '@fortawesome/free-solid-svg-icons'

import { LocaleContext } from '../../../context';

import flag_it from '../../../assets/img/flags/flag_it.png';
import flag_en from '../../../assets/img/flags/flag_en.png';
import flag_es from '../../../assets/img/flags/flag_es.png';

import './settings_desktop.scss';
import './settings_tablet.scss';
import './settings_phone.scss';

class Settings extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            isActive: false
        }

        this.itRef = React.createRef();
        this.enRef = React.createRef();
        this.esRef = React.createRef();

        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive()
    {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    flagClassName(locale, flagLocale)
    {
        let className = flagLocale;
        if (locale === flagLocale) className += ' active';
        return className;
    }

    render()
    {
        let buttonClassName = 'settings-button';
        if (!this.props.isButtonVisible) buttonClassName += ' hidden';
        
        return (
            <LocaleContext.Consumer>
            {({ locale, setLocale }) => (
                <div id="settings" className={this.state.isActive ? 'active' : ''}>
                    <FontAwesomeIcon icon={faCog} className={buttonClassName} onClick={this.toggleActive}/>
                    <div className={`themeToggler ${this.props.greenTheme ? 'green-mode' : ''}`} onClick={this.props.toggleTheme}>
                        <div className="dot">
                            <FontAwesomeIcon className="fa-icon green" icon={faDragon}/>
                            <FontAwesomeIcon className="fa-icon blue" icon={faCrow}/>
                        </div>
                    </div>
                    <ul className="flags noselect">
                        <li className={this.flagClassName(locale, 'it')} ref={this.itRef} onClick={() => setLocale('it')}>
                            <img src={flag_it} alt=""/>
                        </li>
                        <li className={this.flagClassName(locale, 'en')} ref={this.enRef} onClick={() => setLocale('en')}>
                            <img src={flag_en} alt=""/>
                        </li>
                        <li className={this.flagClassName(locale, 'es')} ref={this.esRef} onClick={() => setLocale('es')}>
                            <img src={flag_es} alt=""/>
                        </li>
                    </ul>
                </div>
            )}
            </LocaleContext.Consumer>
        );
    }

    componentDidUpdate()
    {
        if (!this.props.isButtonVisible && this.state.isActive) {
            this.setState({
                isActive: false
            });
        }
    }
}

export default Settings;