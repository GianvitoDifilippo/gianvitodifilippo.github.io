import * as React from 'react';

import ScrollSpy from 'react-scrollspy';

import Settings from './Settings';
import AnchorLink from '../AnchorLink';
import { Neon, NeonActivator } from '../Neon';
import Translate from '../Translate';

import { PageData } from '../Page';

import { DeviceContext } from '../../../shared/context';

import './header_desktop.scss';
import './header_tablet.scss';
import './header_phone.scss';


interface PropsType extends PageData {
    home?: boolean
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

        this.state = {
            isVisible: false,
            isSettingsButtonVisible: false,
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
        return this.props.navThreshold || Header.defaultNavThreshold;
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
    }


    render(): JSX.Element
    {
        console.log('HEADER being rendered');

        return (
            <header id="header" className={this.state.isVisible ? '' : "hidden"}>
                <nav className={this.state.isNavigating ? 'navigating' : ''}>
                    <NeonActivator>
                        <AnchorLink here={!!this.props.home} toHere="#" toThere="/" className={`brand ${this.state.isNavlistActive ? 'inactive' : ''}`}>
                            <h1>
                                <Neon light>Gia</Neon>nvito<br/><Neon light>Dif</Neon>ilippo
                            </h1>
                        </AnchorLink>
                    </NeonActivator>
                    <div className={`hamburger ${this.state.isNavlistActive ? 'active' : ''}`} onClick={this.toggleNavlist}>
                        <div className="bar"></div>
                    </div>
                    <ScrollSpy className={`nav-list ${this.state.isNavlistActive ? 'active' : ''}`}
                    items={this.props.sectionSlugs} currentClassName="is-current">
                    {this.props.sectionSlugs.map((slug, index) => (
                        <li className="nav-item" key={`item-${index}`} onClick={this.toggleNavlist}>
                            <NeonActivator>
                                <a className="nav-link" href={`#${slug}`}>
                                    <Neon light>
                                        <span className="nav-section-name"><Translate selector={`sections:${slug}`}/></span>
                                    </Neon>
                                </a>
                            </NeonActivator>
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
        if (this.props.navThreshold !== prevProps.navThreshold) {
            this.setState({ isNavigating: this.isNavigating });
        }
    }

    componentDidMount(): void
    {
        console.log('HEADER did mount');

        document.addEventListener('scroll', this.scrollListener);

        let noLaunchAnimation = window.sessionStorage.getItem('launchanimation') === 'no';
        this.setState({
            isVisible: noLaunchAnimation,
            isSettingsButtonVisible: noLaunchAnimation && this.context === 'desktop'
        });
        
        setTimeout(() => this.show(), 4500);
    }

    componentWillUnmount(): void
    {
        document.removeEventListener('scroll', this.scrollListener);
    }
}

export default Header;