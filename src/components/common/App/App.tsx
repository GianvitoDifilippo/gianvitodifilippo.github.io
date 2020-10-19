import * as React from 'react';

import { defaultTheme, DeviceContext, FullscreenContext, LocaleContext, ModalContext, ThemeContext } from '../../../shared/context';
import { supportedLocales, defaultLocale } from '../../../shared/context';
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


class App extends React.PureComponent<{}, StateType>
{
    constructor(props: Readonly<{}>)
    {
        super(props);

        console.log('APP constructor');
        
        this.setLocale = this.setLocale.bind(this);
        this.setFullscreen = this.setFullscreen.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.resizeListener = this.resizeListener.bind(this);
        this.fullscreenchangeListener = this.fullscreenchangeListener.bind(this);

        this.state = {
            device: null,
            isFullscreen: false,
            locale: getLocaleFromPreferences(),
            modal: null,
            theme: getThemeFromPreferences()
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
                
                <div id="app" className={this.state.modal ? 'modal-open' : ''}>
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
            document.body.classList.toggle('green-mode');
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
        
        setTimeout(() => document.documentElement.classList.add('smooth-scroll'), 10);
        
        this.setState({ device: getDeviceFromWidth(window.innerWidth) });
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

function getLocaleFromPreferences(): string
{
    if (typeof window !== 'undefined') {
        let locale = window.localStorage.getItem('locale');
        if (!locale || !supportedLocales.includes(locale)) {
            return defaultLocale;
        }
        return locale;
    }
    return defaultLocale;
}

function getThemeFromPreferences(): boolean
{
    if (typeof window !== 'undefined') {
        let theme = window.localStorage.getItem('theme');
        if (!theme || !supportedThemes.includes(theme)) {
            return false;
        }
        return theme === 'green';
    }
    return defaultTheme === 'green';
}

export default App;