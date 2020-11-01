import * as React from 'react';

import Translate from '../../common/Translate';

import { vh } from '../../../shared/utils';

import cvpdf from '../../../assets/cv.pdf';

import './hero_desktop.scss';
import './hero_tablet.scss';
import './hero_phone.scss';


type StateType = {
    offsetY: number
};


class Hero extends React.Component<{}, StateType>
{
    height: number;

    constructor(props: Readonly<{}>)
    {
        super(props);

        this.scrollListener = this.scrollListener.bind(this);
        this.height = vh(100);

        let offsetY = 0;
        if (typeof window !== 'undefined') {
            offsetY = this.getOffsetY(window.scrollY);
        }

        this.state = {
            offsetY
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
        return (
            <div id="hero" className="section">
                <div className="background"></div>
                <div className="main">
                    <h1>Gianvito Difilippo</h1>
                    <h2><Translate selector="hero:h2"/></h2>
                    <a href="mailto:gianvito.difilippo@gmail.com" className="noselect">
                        <Translate selector="hero:contactme"/>
                    </a>
                    <a href={cvpdf} target="_blank" className="noselect">
                        <Translate selector="hero:downloadcv"/>
                    </a>
                </div>
            </div>
        );
    }

    componentDidMount(): void
    {
        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount(): void
    {
        document.removeEventListener('scroll', this.scrollListener);
    }
}

export default Hero;