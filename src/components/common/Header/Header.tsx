import * as React from 'react';

import ScrollSpy from 'react-scrollspy';

import Settings from './Settings';
import AnchorLink from '../AnchorLink';
import { NeonConsumer, NeonProvider } from '../Neon';
import Translate from '../Translate';

import { DeviceContext } from '../../../shared/context';

import './header_desktop.scss';
import './header_tablet.scss';
import './header_phone.scss';


type PropsType = {
    home?: boolean,
    navThresholds: number[],
    sectionSlugs: string[]
};
type StateType = {
    isVisible: boolean,
    isSettingsButtonVisible: boolean,
    isNavlistActive: boolean,
    isNavigating: boolean
};


class Header extends React.PureComponent<PropsType, StateType>
{
    static contextType = DeviceContext;
    static defaultNavThreshold = 50;

    constructor(props: Readonly<PropsType>)
    {
        super(props);

        console.log('HEADER constructor');

        this.toggleNavlist = this.toggleNavlist.bind(this);
        this.show = this.show.bind(this);
        this.scrollListener = this.scrollListener.bind(this);

        // Allows window object to be used in static pages
        let noLaunchAnimation = false;
        if (typeof window !== 'undefined') noLaunchAnimation = window.sessionStorage.getItem('launchanimation') === 'no';

        this.state = {
            isVisible: noLaunchAnimation,
            isSettingsButtonVisible: noLaunchAnimation && this.context === 'desktop',
            isNavlistActive: false,
            isNavigating: false
        };
    }

    toggleNavlist(): void
    {
        if (this.context === 'desktop') return;
        document.body.classList.toggle('stop_scroll');
        this.setState({
            isSettingsButtonVisible: !this.state.isSettingsButtonVisible,
            isNavlistActive: !this.state.isNavlistActive
        });
    }

    show(): void
    {
        this.setState({
            isVisible: true
        });
        if (this.context === 'desktop') {
            setTimeout(() => this.setState({
                isSettingsButtonVisible: true
            }), 500);

            window.sessionStorage.setItem('launchanimation', 'no')
        }
    }

    get navThreshold(): number
    {
        if (!this.props.navThresholds) return Header.defaultNavThreshold;
        let index = 0;
        let length = this.props.navThresholds.length;
        switch (this.context) {
            case 'tablet_big':
                index = 1;
                break;
            case 'tablet_small':
                index = 2;
                break;
            case 'phone':
                index = 3;
                break;
        }
        if (index >= length) return this.props.navThresholds[length - 1];
        return this.props.navThresholds[index];
    }

    get isNavigating(): boolean
    {
        return window.scrollY >= this.navThreshold;
    }

    scrollListener(): void
    {
        let navigating = this.isNavigating;
        
        if (navigating !== this.state.isNavigating) {
            this.setState({ isNavigating: navigating });
        }

        if (!this.state.isVisible) {
            this.show();
        }
    }


    render(): JSX.Element
    {
        console.log('HEADER being rendered');

        return (
            <header id="header" className={this.state.isVisible ? '' : "hidden"}>
                <nav className={this.state.isNavigating ? 'navigating' : ''}>
                    <NeonProvider>
                        <AnchorLink here={!!this.props.home} toHere="#" toThere="/" className={`brand ${this.state.isNavlistActive ? 'inactive' : ''}`}>
                            <h1>
                                <NeonConsumer light>Gia</NeonConsumer>nvito
                                <br/>
                                <NeonConsumer light>Dif</NeonConsumer>ilippo
                            </h1>
                        </AnchorLink>
                    </NeonProvider>
                    <div className={`hamburger ${this.state.isNavlistActive ? 'active' : ''}`} onClick={this.toggleNavlist}>
                        <div className="bar"></div>
                    </div>
                    <ScrollSpy className={`nav-list ${this.state.isNavlistActive ? 'active' : ''}`}
                    items={this.props.sectionSlugs} currentClassName="is-current">
                    {this.props.sectionSlugs.map((slug, index) => (
                        <li className="nav-item" key={`item-${index}`} onClick={this.toggleNavlist}>
                            <NeonProvider>
                                <a className="nav-link" href={`#${slug}`}>
                                    <NeonConsumer light>
                                        <span className="nav-section-name"><Translate selector={`sections:${slug}`}/></span>
                                    </NeonConsumer>
                                </a>
                            </NeonProvider>
                        </li>
                    ))}
                    </ScrollSpy>
                </nav>
                <Settings
                    isButtonVisible={this.state.isSettingsButtonVisible}
                />
            </header>
        );
    }

    componentDidUpdate(prevProps: Readonly<PropsType>): void
    {
        if (this.props.navThresholds !== prevProps.navThresholds) {
            this.setState({ isNavigating: this.isNavigating });
        }
    }

    componentDidMount(): void
    {
        console.log('HEADER did mount');

        document.addEventListener('scroll', this.scrollListener);
        
        setTimeout(() => this.show(), 4500);
    }

    componentWillUnmount(): void
    {
        document.removeEventListener('scroll', this.scrollListener);
    }
}

export default Header;