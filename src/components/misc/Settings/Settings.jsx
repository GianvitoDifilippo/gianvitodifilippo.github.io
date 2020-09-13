import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCrow, faDragon } from '@fortawesome/free-solid-svg-icons'

import { LocaleContext } from '../../../context';

import flag_it from '../../../assets/img/flags/flag_it.png';
import flag_en from '../../../assets/img/flags/flag_en.png';
import flag_es from '../../../assets/img/flags/flag_es.png';

import './settings.scss';

class Settings extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isButtonVisible: window.sessionStorage.getItem('launchanimation') === 'no',
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
        if (!this.state.isButtonVisible) buttonClassName += ' hidden';
        
        return (
            <LocaleContext.Consumer>
            {({ locale, setLocale }) => (
                <div id="settings" className={this.state.isActive ? 'active' : null}>
                    <FontAwesomeIcon icon={faCog} className={buttonClassName} onClick={this.toggleActive}/>
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
                    <div className={`themeToggler ${this.props.greenTheme ? 'green-mode' : null}`} onClick={this.props.toggleTheme}>
                        <div className="dot">
                            <FontAwesomeIcon className="fa-icon green" icon={faDragon}/>
                            <FontAwesomeIcon className="fa-icon blue" icon={faCrow}/>
                        </div>
                    </div>
                </div>
            )}
            </LocaleContext.Consumer>
        );
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (this.props.scrollY !== nextProps.scrollY && !this.state.isButtonVisible) {
            this.setState({
                isButtonVisible: true
            });
        }
        
        return this.state !== nextState || this.props.greenTheme !== nextProps.greenTheme;
    }

    componentDidMount()
    {
        setTimeout(() => this.setState({
            isButtonVisible: true
        }), 5000);
    }
}

export default Settings;