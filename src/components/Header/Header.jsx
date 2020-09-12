import React from 'react';

import Translate from '../misc/Translate';

import './header.scss';

class Header extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isVisible: window.sessionStorage.getItem('launchanimation') === 'no'
        };
    }

    inNavigation = scrollY => scrollY > 200;

    render()
    {
        console.log('HEADER being rendered');
        return(
            <header id="header" className={this.state.isVisible ? null : "hidden"}>
                <div id="navbar" className={this.inNavigation(this.props.scrollY) ? 'navigating' : null}>
                    <a className="brand neon_activator" href="#hero">
                        <h1>
                            <span className="neon1">Gia</span>nvito<br/><span className="neon1">Dif</span>ilippo
                        </h1>
                    </a>
                    <div className="hamburger"><div className="bar"></div></div>
                    <ul>
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
            </header>
        )
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (this.props.scrollY !== nextProps.scrollY && !this.state.isVisible) {
            this.setState({
                isVisible: true
            });
        }
        
        return (
            this.state !== nextState ||
            this.inNavigation(this.props.scrollY) !== this.inNavigation(nextProps.scrollY)
        );
    }

    componentDidMount()
    {
        setTimeout(() => this.setState({
            isVisible: true
        }), 4500);
    }
}

export default Header;