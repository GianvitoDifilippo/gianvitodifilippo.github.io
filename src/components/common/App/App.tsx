import * as React from 'react';

import { DeviceContext, FullscreenContext, LocaleContext, ModalContext, ThemeContext } from '../../../shared/context';
import { supportedLocales } from '../../../shared/context';
import { supportedThemes } from '../../../shared/context';

import './app_desktop.scss';
import './app_tablet.scss';
import './app_phone.scss';


type StateType = {
    device: string,
    isFullscreen: boolean,
    locale: string,
    modal: string,
    theme: boolean
};


class App extends React.PureComponent<{ className?: string }, StateType>
{
    constructor(props: Readonly<{ className?: string }>)
    {
        super(props);

        console.log('APP constructor');
        
        this.setLocale = this.setLocale.bind(this);
        this.setFullscreen = this.setFullscreen.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.resizeListener = this.resizeListener.bind(this);
        this.fullscreenchangeListener = this.fullscreenchangeListener.bind(this);

        this.state = {
            device: 'desktop',
            isFullscreen: false,
            locale: 'it',
            modal: null,
            theme: false
        };

        if (typeof document !== 'undefined') {
            document.documentElement.classList.remove('smooth-scroll');
        }
    }

    setFullscreen(value: boolean): void
    {
        this.setState({ isFullscreen: value });
    }

    setLocale(value: string): void
    {
        this.setState({ locale: value });
    }

    toggleTheme(): void
    {
        this.setState({ theme: !this.state.theme });
    }

    resizeListener(): void
    {
        if (typeof window !== undefined) {
            let newDevice = getDeviceFromWidth(window.innerWidth);
            if (newDevice !== this.state.device) {
                this.setState({ device: newDevice });

                window.location.reload();
            }
        }
    }

    fullscreenchangeListener(): void
    {
        this.setFullscreen(document.fullscreenElement !== null);
    }


    render(): JSX.Element
    {
        console.log('APP being rendered');

        return (
            <DeviceContext.Provider value={
                this.state.device
            }>
            <FullscreenContext.Provider value={{
                isFullscreen: this.state.isFullscreen,
                setFullscreen: this.setFullscreen
            }}>
            <LocaleContext.Provider value={{
                locale: this.state.locale,
                setLocale: this.setLocale
            }}>
            <ModalContext.Provider value={{
                modal: this.state.modal,
                setModal: (value) => this.setState({ modal: value })
            }}>
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                toggleTheme: this.toggleTheme
            }}>
                
                <div id="app" className={this.props.className + (this.state.modal ? ' modal-open' : '')}>
                    {this.props.children}
                </div>
            
            </ThemeContext.Provider>
            </ModalContext.Provider>
            </LocaleContext.Provider>
            </FullscreenContext.Provider>
            </DeviceContext.Provider>
        );
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<StateType>): void
    {
        console.log('APP did update');

        if (this.state.modal !== prevState.modal) {
            if (this.state.modal !== null) {
                document.body.classList.add('stop_scroll');
            }
            else {
                document.body.classList.remove('stop_scroll');
            }
        }

        if (this.state.theme !== prevState.theme) {
            window.localStorage.setItem('theme', this.state.theme ? 'green' : 'blue');
            if (this.state.theme) document.body.classList.add('green-mode');
            else document.body.classList.remove('green-mode');
        }

        if (this.state.locale !== prevState.locale) {
            window.localStorage.setItem('locale', this.state.locale);
        }
    }

    componentDidMount(): void
    {
        console.log('APP did mount');

        window.addEventListener('resize',             this.resizeListener);
        document.addEventListener('fullscreenchange', this.fullscreenchangeListener);

        if (!window.localStorage.getItem('locale')) {
            var navigatorLang = navigator.language.split('-')[0];
            switch (navigatorLang) {
                case 'it':
                case 'en':
                    break;
                default:
                    navigatorLang = 'en';
                    break;
            }
            window.localStorage.setItem('locale', navigatorLang);
        }
    
        if (!window.localStorage.getItem('theme')) {
            window.localStorage.setItem('theme', 'blue');
        }
    
        this.setState({
            device: getDeviceFromWidth(window.innerWidth),
            locale: window.localStorage.getItem('locale'),
            theme: window.localStorage.getItem('theme') === 'green'
        });
        
        setTimeout(() => {
            document.documentElement.classList.add('smooth-scroll');
        }, 5);
    }

    componentWillUnmount(): void
    {
        console.log('APP will unmount');

        document.removeEventListener('resize',           this.resizeListener);
        document.removeEventListener('fullscreenchange', this.fullscreenchangeListener);
    }
}

function getDeviceFromWidth(width: number): string
{
    return width > 1366 ? 'desktop' : width > 1024 ? 'tablet_big' : width > 600 ? 'tablet_small' : 'phone';
}

export default App;