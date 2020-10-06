import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCompressArrowsAlt, faCrow, faDragon, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext, FullscreenContext, LocaleContext } from '../../../context';

import flag_it from '../../../assets/img/flags/flag_it.png';
import flag_en from '../../../assets/img/flags/flag_en.png';

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

    toggleFullscren(fullscreenCtx)
    {
        if (fullscreenCtx.isFullscreen) {
            if      (document.exitFullscreen)       document.exitFullscreen();
            else if (document.mozCancelFullScreen)  document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else if (document.msExitFullscreen)     document.msExitFullscreen();
            fullscreenCtx.setFullscreen(false);
        }
        else {
            if      (document.documentElement.requestFullscreen)       document.documentElement.requestFullscreen();
            else if (document.documentElement.mozRequestFullScreen)    document.documentElement.mozRequestFullScreen();
            else if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen();
            else if (document.documentElement.msRequestFullscreen)     document.documentElement.msRequestFullscreen();
            fullscreenCtx.setFullscreen(true);
        }
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
            <div id="settings" className={this.state.isActive ? 'active' : ''}>
                <ThemeContext.Consumer>
                {({ greenTheme, toggleTheme }) => (
                    <div className={`themeToggler ${greenTheme ? 'green-mode' : ''}`} onClick={toggleTheme}>
                        <div className="dot">
                            <FontAwesomeIcon className="fa-icon green" icon={faDragon}/>
                            <FontAwesomeIcon className="fa-icon blue" icon={faCrow}/>
                        </div>
                    </div>
                )}
                </ThemeContext.Consumer>
                <LocaleContext.Consumer>
                {({ locale, setLocale }) => (
                    <ul className="flags noselect">
                        <li className={this.flagClassName(locale, 'it')} ref={this.itRef} onClick={() => setLocale('it')}>
                            <img src={flag_it} alt=""/>
                        </li>
                        <li className={this.flagClassName(locale, 'en')} ref={this.enRef} onClick={() => setLocale('en')}>
                            <img src={flag_en} alt=""/>
                        </li>
                    </ul>
                )}
                </LocaleContext.Consumer>
                <FullscreenContext.Consumer>
                {fullscreenCtx => (
                    <div className="fullscreen-toggler">
                        {fullscreenCtx.isFullscreen ?
                            <FontAwesomeIcon icon={faCompressArrowsAlt} key="compress" className="fullscreen-compress" onClick={() => this.toggleFullscren(fullscreenCtx)}/>
                            :
                            <FontAwesomeIcon icon={faExpandArrowsAlt} key="expand" className="fullscreen-expand" onClick={() => this.toggleFullscren(fullscreenCtx)}/>
                        }
                    </div>
                )}
                </FullscreenContext.Consumer>
                <FontAwesomeIcon icon={faCog} className={buttonClassName} onClick={this.toggleActive}/>
            </div>
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