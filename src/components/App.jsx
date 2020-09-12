import React from 'react';

import Header from './Header';
import Hero from './Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './Footer';
import Settings from './misc/Settings';

import { LocaleContext, DeviceContext, ModalContext } from '../context';

import './app.scss';

class App extends React.Component
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
                device: 'desktop'
            },
            modalCtx: {
                modal: null,
                setModal: newModal => this.setState({ modalCtx: { modal: newModal, setModal: this.state.modalCtx.setModal } })
            },
            isSettingsButtonVisible: false,
            lightTheme: window.localStorage.getItem('theme') === 'light'
        };

        this.toggleTheme = this.toggleTheme.bind(this);
    }
    
    toggleTheme()
    {
        this.setState({ lightTheme: !this.state.lightTheme });
        window.localStorage.setItem('theme', !this.state.lightTheme ? 'light' : 'dark');
        document.body.classList.toggle('light-mode');
    }

    render()
    {
        let className = '';
        if (this.state.modalCtx.modal) {
            className += 'modal-open';
            document.body.classList.add('stop_scroll');
        }
        else {
            document.body.classList.remove('stop_scroll');
        }

        return (
            <LocaleContext.Provider value={this.state.localeCtx}>
            <DeviceContext.Provider value={this.state.deviceCtx}>
            <ModalContext.Provider  value={this.state.modalCtx}>
                <div id="app" className={className}>
                    <Header scrollY={this.state.scrollY}/>
                    <Hero scrollY={this.state.scrollY}/>
                    <About/>
                    <Skills/>
                    <Experience/>
                    <Education/>
                    <Projects/>
                    <Footer/>
                    <Settings scrollY={this.state.scrollY} lightTheme={this.state.lightTheme} toggleTheme={this.toggleTheme}/>
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

        setTimeout(() => window.sessionStorage.setItem('launchanimation', 'no'), 6000);
    }
}

export default App;