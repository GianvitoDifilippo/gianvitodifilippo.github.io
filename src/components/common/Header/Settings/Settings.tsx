import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCompressArrowsAlt, faCrow, faDragon, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext, FullscreenContext, LocaleContext } from '../../../../shared/context';

import flag_it from '../../../../assets/img/flags/flag_it.png';
import flag_en from '../../../../assets/img/flags/flag_en.png';

import './settings_desktop.scss';
import './settings_tablet.scss';
import './settings_phone.scss';

type PropsType = {
    isButtonVisible: boolean
};
type StateType = {
    isActive: boolean
};


class Settings extends React.PureComponent<PropsType, StateType>
{
    constructor(props: Readonly<PropsType>)
    {
        super(props);

        this.toggleActive = this.toggleActive.bind(this);

        this.state = {
            isActive: false
        };
    }

    toggleActive(): void
    {
        this.setState({ isActive: !this.state.isActive });
    }

    toggleFullscren(isFullscreen: boolean, setFullscreen: (value: boolean) => void): void
    {
        if (isFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setFullscreen(false);
        }
        else {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            setFullscreen(true);
        }
    }

    flagClassName(locale: string, flagLocale: string): string
    {
        return flagLocale + (flagLocale === locale ? ' active' : '');
    }

    get buttonClassName(): string
    {
        return 'settings-button' + (this.props.isButtonVisible ? '' : ' hidden');
    }


    render(): JSX.Element
    {
        return (
            <div id="settings" className={this.state.isActive ? 'active' : ''}>
                <ThemeContext.Consumer>{({ theme, toggleTheme }) => (
                    <div className={`themeToggler ${theme ? 'green-mode' : ''}`} onClick={toggleTheme}>
                        <div className="dot">
                            <FontAwesomeIcon className="fa-icon green" icon={faDragon}/>
                            <FontAwesomeIcon className="fa-icon blue" icon={faCrow}/>
                        </div>
                    </div>
                )}</ThemeContext.Consumer>
                <LocaleContext.Consumer>{({ locale, setLocale }) => (
                    <ul className="flags noselect">
                        <li className={this.flagClassName(locale, 'it')} onClick={() => setLocale('it')}>
                            <img src={flag_it} alt=""/>
                        </li>
                        <li className={this.flagClassName(locale, 'en')} onClick={() => setLocale('en')}>
                            <img src={flag_en} alt=""/>
                        </li>
                    </ul>
                )}</LocaleContext.Consumer>
                <FullscreenContext.Consumer>{({ isFullscreen, setFullscreen }) => (
                    <div className="fullscreen-toggler">{isFullscreen
                    ?
                    <FontAwesomeIcon icon={faCompressArrowsAlt} key="compress" className="fullscreen-compress" onClick={() => this.toggleFullscren(isFullscreen, setFullscreen)}/>
                    :
                    <FontAwesomeIcon icon={faExpandArrowsAlt} key="expand" className="fullscreen-expand" onClick={() => this.toggleFullscren(isFullscreen, setFullscreen)}/>
                    }
                    </div>
                )}</FullscreenContext.Consumer>
                <FontAwesomeIcon icon={faCog} className={this.buttonClassName} onClick={this.toggleActive}/>
            </div>
        );
    }

    componentDidUpdate(): void
    {
        if (!this.props.isButtonVisible && this.state.isActive) {
            this.setState({
                isActive: false
            });
        }
    }
}

export default Settings;