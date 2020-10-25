import * as React from 'react';

import ScrollSpy from 'react-scrollspy';

import Settings from './Settings';
import AnchorLink from '../AnchorLink';
import { NeonConsumer, NeonProvider } from '../Neon';
import { DeviceContext } from '../../../shared/context';
import Translate from '../Translate';

import './header_desktop.scss';
import './header_tablet.scss';
import './header_phone.scss';


type PropsType = {
    home?: boolean,
    navThresholds: number[],
    sectionSlugs: string[]
};
type StateType = {
    isSettingsButtonVisible: boolean,
    isNavlistActive: boolean,
    isNavigating: boolean,
    isSetup: boolean
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
        this.scrollListener = this.scrollListener.bind(this);

        this.state = {
            isSettingsButtonVisible: false,
            isNavlistActive: false,
            isNavigating: this.isNavigating,
            isSetup: false
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
        if (typeof window !== 'undefined') return window.scrollY >= this.navThreshold;
        return true;
    }

    scrollListener(): void
    {
        let navigating = this.isNavigating;
        
        if (navigating !== this.state.isNavigating) {
            this.setState({ isNavigating: navigating });
        }
    }


    render(): JSX.Element
    {
        console.log('HEADER being rendered');

        if (!this.state.isSetup) return null;

        return (
            <header id="header">
                <nav className={this.state.isNavigating ? 'navigating' : ''}>
                    <NeonProvider>
                        <div className="brand-wrapper">
                            <AnchorLink here={!!this.props.home} toHere="/#" toThere="/" className={`brand ${this.state.isNavlistActive ? 'inactive' : ''}`}>
                                <h1>
                                    <NeonConsumer light>Gia</NeonConsumer>nvito
                                    <br/>
                                    <NeonConsumer light>Dif</NeonConsumer>ilippo
                                </h1>
                            </AnchorLink>
                        </div>
                    </NeonProvider>
                    <div className={`hamburger ${this.state.isNavlistActive ? 'active' : ''}`} onClick={this.toggleNavlist}>
                        <div className="bar"></div>
                    </div>
                    <ScrollSpy className={`nav-list ${this.state.isNavlistActive ? 'active' : ''}`}
                    items={this.props.sectionSlugs} currentClassName="is-current">
                    {this.props.sectionSlugs.map((slug, index) => (
                        <li className="nav-item" key={`item-${index}`} onClick={this.toggleNavlist}>
                            <NeonProvider>
                                <AnchorLink here className="nav-link" to={`#${slug}`}>
                                    <NeonConsumer light>
                                        <span className="nav-section-name"><Translate selector={`sections:${slug}`}/></span>
                                    </NeonConsumer>
                                </AnchorLink>
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

        this.setState({
            isSetup: true,
            isSettingsButtonVisible: this.context === 'desktop',
            isNavigating: this.isNavigating
        });

        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount(): void
    {
        document.removeEventListener('scroll', this.scrollListener);
    }
}

export default Header;