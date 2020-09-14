import React from 'react';

import Header from './Header';
import Hero from './Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './Footer';

import { LocaleContext, DeviceContext, ModalContext } from '../context';

import './app_desktop.scss';
import './app_tablet.scss';
import './app_phone.scss';

function deviceType(width = window.innerWidth)
{
    return width > 1366 ? 'desktop' : width > 600 ? 'tablet' : 'phone'
}

function isMobile(width = window.innerWidth)
{
    return deviceType(width) === 'tablet' || deviceType(width) === 'phone';
}

class App extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            scrollY: window.scrollY,
            localeCtx: {
                locale: window.localStorage.getItem('locale'),
                setLocale: newLocale => {
                    window.localStorage.setItem('locale', newLocale);
                    this.setState({ localeCtx: { locale: newLocale, setLocale: this.state.localeCtx.setLocale } });
                }
            },
            deviceCtx: {
                device: deviceType()
            },
            modalCtx: {
                modal: null,
                setModal: newModal => this.setState({ modalCtx: { modal: newModal, setModal: this.state.modalCtx.setModal } })
            },
            isSettingsButtonVisible: false,
            greenTheme: window.localStorage.getItem('theme') === 'green'
        };

        this.toggleTheme = this.toggleTheme.bind(this);
    }
    
    toggleTheme()
    {
        this.setState({ greenTheme: !this.state.greenTheme });
        window.localStorage.setItem('theme', !this.state.greenTheme ? 'green' : 'blue');
        document.body.classList.toggle('green-mode');
    }

    render()
    {
        let className = '';
        if (this.state.modalCtx.modal) {
            className += 'modal-open';
        }

        return (
            <LocaleContext.Provider value={this.state.localeCtx}>
            <DeviceContext.Provider value={this.state.deviceCtx}>
            <ModalContext.Provider  value={this.state.modalCtx}>
                <div id="app" className={className}>
                    <Header scrollY={this.state.scrollY} greenTheme={this.state.greenTheme} toggleTheme={this.toggleTheme}/>
                    <Hero scrollY={this.state.scrollY}/>
                    <About/>
                    <Skills/>
                    <Experience/>
                    <Education/>
                    <Projects/>
                    <Footer/>
                </div>
            </ModalContext.Provider>
            </DeviceContext.Provider>
            </LocaleContext.Provider>
        );
    }

    componentDidMount()
    {
        // Scroll effects
        document.addEventListener('scroll', () => {
            if (this.state.scrollY !== window.scrollY && !this.state.isSettingsButtonVisible) {
                this.setState({
                    isSettingsButtonVisible: true
                });
            }

            this.setState({
                scrollY: window.scrollY
            });
        });

        window.addEventListener('resize', () => {
            let newDevice = deviceType();
            if (newDevice !== this.state.deviceCtx.device) {
                this.setState({ deviceCtx: { device: newDevice } })
                if (newDevice === 'desktop') {
                    document.body.classList.remove('stop_scroll');
                }
                window.location.reload();
            }
        });

        setTimeout(() => window.sessionStorage.setItem('launchanimation', 'no'), 6000);
    }
}

export { deviceType, isMobile };
export default App;