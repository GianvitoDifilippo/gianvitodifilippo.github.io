import React from 'react';

import Translate from '../misc/Translate';
import Settings from './Settings';

import { DeviceContext } from '../../context.jsx';

import './header_desktop.scss';
import './header_tablet.scss';
import './header_phone.scss';

class Header extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isVisible: window.sessionStorage.getItem('launchanimation') === 'no',
            isSettingsButtonVisible: window.sessionStorage.getItem('launchanimation') === 'no',
            isNavlistActive: false
        };

        this.inNavigation = this.inNavigation.bind(this);
        this.navlistClassName = this.navlistClassName.bind(this);
        this.brandClassName = this.brandClassName.bind(this);
        this.hamburgerClassName = this.hamburgerClassName.bind(this);
        this.toggleNavlist = this.toggleNavlist.bind(this);
    }

    inNavigation(scrollY)
    {
        return scrollY > (this.context.device === 'phone' ? 60 : 200);
    }

    navlistClassName()
    {
        return this.state.isNavlistActive ? 'active' : null;
    }

    brandClassName()
    {
        let className = 'brand neon_activator';
        if (this.state.isNavlistActive) className += ' inactive';
        return className;
    }

    hamburgerClassName()
    {
        let className = 'hamburger';
        if (this.state.isNavlistActive) className += ' active';
        return className;
    }

    toggleNavlist()
    {
        if (this.context.device === 'desktop') return;
        this.setState({ isNavlistActive: !this.state.isNavlistActive });
        document.body.classList.toggle('stop_scroll');
        this.setState({
            isSettingsButtonVisible: !this.state.isSettingsButtonVisible
        });
    }

    show()
    {
        this.setState({
            isVisible: true
        });
        if (this.context.device === 'desktop') {
            setTimeout(() => this.setState({
                isSettingsButtonVisible: true
            }), 500);
        }
    }

    render()
    {
        // console.log('HEADER being rendered');
        return(
            <header id="header" className={this.state.isVisible ? '' : "hidden"}>
                <div id="navbar" className={this.inNavigation(this.props.scrollY) ? 'navigating' : ''}>
                    <a className={this.brandClassName()} href="#hero">
                        <h1>
                            <span className="neon1">Gia</span>nvito<br/><span className="neon1">Dif</span>ilippo
                        </h1>
                    </a>
                    <div className={this.hamburgerClassName()} onClick={this.toggleNavlist}>
                        <div className="bar"></div>
                    </div>
                    <ul className={this.navlistClassName()}>
                        <li onClick={this.toggleNavlist}><a href="#about" className="neon_activator neon1">
                            <Translate selector="sections:about">Su di me</Translate>
                        </a></li>
                        <li onClick={this.toggleNavlist}><a href="#skills" className="neon_activator neon1">
                            <Translate selector="sections:skills">Skills</Translate>
                        </a></li>
                        <li onClick={this.toggleNavlist}><a href="#experience" className="neon_activator neon1">
                            <Translate selector="sections:experience">Esperienza</Translate>
                        </a></li>
                        <li onClick={this.toggleNavlist}><a href="#education" className="neon_activator neon1">
                            <Translate selector="sections:education">Educazione</Translate>
                        </a></li>
                        <li onClick={this.toggleNavlist}><a href="#projects" className="neon_activator neon1">
                            <Translate selector="sections:projects">Progetti</Translate>
                        </a></li>
                    </ul>
                </div>
                <Settings
                    isNavlistActive={this.state.isNavlistActive}
                    greenTheme={this.props.greenTheme}
                    toggleTheme={this.props.toggleTheme}
                    isButtonVisible={this.state.isSettingsButtonVisible}
                />
            </header>
        )
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (this.props.scrollY !== nextProps.scrollY && !this.state.isVisible) {
            this.show();
        }
        
        return (
            this.state !== nextState ||
            this.props.greenTheme !== nextProps.greenTheme ||
            this.inNavigation(this.props.scrollY) !== this.inNavigation(nextProps.scrollY)
        );
    }

    componentDidMount()
    {
        this.setState({
            isSettingsButtonVisible: this.state.isSettingsButtonVisible && this.context.device === 'desktop'
        });
        setTimeout(() => this.show(), 4500);
    }
}

Header.contextType = DeviceContext;

export default Header;