import React from 'react';

import Translate from '../misc/Translate';

import './hero.scss';

class Hero extends React.Component
{
    render()
    {
        let fadein = window.sessionStorage.getItem('launchanimation') !== 'no';
        console.log('HERO being rendered');
        return (
            <section id="hero" ref="hero" className="section">
                <div className="background" style={ { transform: `translateY(${this.props.scrollY * 0.7}px)` } }></div>
                <div className="main">
                    <h1 className={fadein ? 'fadein' : null}>Gianvito Difilippo</h1>
                    <h2 className={fadein ? 'fadein' : null}>
                        <Translate selector="hero:h2">Ingegnere dell'Automazione</Translate>
                    </h2>
                    <a href="mailto:gianvito.difilippo@gmail.com" className={fadein ? 'fadein noselect' : 'noselect'}>
                        <Translate selector="hero:contactme">Contattami</Translate>
                    </a>
                    <a href="./assets/cv.pdf" target="_blank" className={fadein ? 'fadein noselect' : 'noselect'}>
                        <Translate selector="hero:downloadcv">Scarica il mio CV</Translate>
                    </a>
                </div>
            </section>
        );
    }

    shouldComponentUpdate(nextProps)
    {
        return this.props.scrollY <= this.refs.hero.getBoundingClientRect().height;
    }
}

export default Hero;