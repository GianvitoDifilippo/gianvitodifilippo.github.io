import * as React from 'react';

import Translate from '../../common/Translate';

import { vh } from '../../../shared/utils';

import cvpdf from '../../../assets/cv.pdf';

import './hero_desktop.scss';
import './hero_tablet.scss';
import './hero_phone.scss';


type StateType = {
    offsetY: number,
    fadeIn: boolean
};


class Hero extends React.Component<{}, StateType>
{
    height: number;

    constructor(props: Readonly<{}>)
    {
        super(props);

        console.log('HERO constructor');

        this.scrollListener = this.scrollListener.bind(this);
        this.height = vh(100);

        this.state = {
            offsetY: 0,
            fadeIn: false
        };
    }

    getOffsetY(scrollY: number): number
    {
        return scrollY < this.height ? scrollY * 0.7 : this.height;
    }

    scrollListener(): void
    {
        let offsetY = this.getOffsetY(window.scrollY);
        if (offsetY !== this.state.offsetY) {
            this.setState({ offsetY: offsetY });
        }
    }

    render()
    {
        console.log('HERO being rendered');

        return (
            <div id="hero" className="section">
                <div className="background" style={ { transform: `translateY(${this.state.offsetY}px)` } }></div>
                <div className="main">
                    <h1 className={this.state.fadeIn ? 'fadein' : ''}>Gianvito Difilippo</h1>
                    <h2 className={this.state.fadeIn ? 'fadein' : ''}>
                        <Translate selector="hero:h2"/>
                    </h2>
                    <a href="mailto:gianvito.difilippo@gmail.com" className={this.state.fadeIn ? 'fadein noselect' : 'noselect'}>
                        <Translate selector="hero:contactme"/>
                    </a>
                    <a href={cvpdf} target="_blank" className={this.state.fadeIn ? 'fadein noselect' : 'noselect'}>
                        <Translate selector="hero:downloadcv"/>
                    </a>
                </div>
            </div>
        );
    }

    componentDidMount(): void
    {
        console.log('HERO did mount');

        this.setState({
            offsetY: this.getOffsetY(window.scrollY),
            fadeIn: window.sessionStorage.getItem('launchanimation') !== 'no'
        });

        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount(): void
    {
        console.log('HERO will unmount');

        document.removeEventListener('scroll', this.scrollListener);
    }
}

export default Hero;