import React from 'react';

import Translate from '../misc/Translate';

import cvpdf from '../../assets/cv.pdf';

import './hero_desktop.scss';
import './hero_tablet.scss';
import './hero_phone.scss';

class Hero extends React.Component
{
    constructor(props)
    {
        super(props);

        this.heroRef = React.createRef();
    }

    render()
    {
        let fadein = window.sessionStorage.getItem('launchanimation') !== 'no';
        // console.log('HERO being rendered');
        return (
            <section id="hero" ref={this.heroRef} className="section">
                <div className="background" style={ { transform: `translateY(${this.props.scrollY * 0.7}px)` } }></div>
                <div className="main">
                    <h1 className={fadein ? 'fadein' : ''}>Gianvito Difilippo</h1>
                    <h2 className={fadein ? 'fadein' : ''}>
                        <Translate selector="hero:h2"/>
                    </h2>
                    <a href="mailto:gianvito.difilippo@gmail.com" className={fadein ? 'fadein noselect' : 'noselect'}>
                        <Translate selector="hero:contactme"/>
                    </a>
                    <a href={cvpdf} target="_blank" className={fadein ? 'fadein noselect' : 'noselect'}>
                        <Translate selector="hero:downloadcv"/>
                    </a>
                </div>
            </section>
        );
    }

    shouldComponentUpdate()
    {
        return this.props.scrollY <= this.heroRef.current.getBoundingClientRect().height;
    }
}

export default Hero;