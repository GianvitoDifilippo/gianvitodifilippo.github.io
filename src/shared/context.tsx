import * as React from 'react';

type DeviceContextType = string;
type FullscreenContextType = {
    isFullscreen: boolean,
    setFullscreen(value: boolean): void
};
type LocaleContextType = {
    locale: string,
    setLocale(value: string): void
};
type ModalContextType = {
    modal: string,
    setModal(value: string): void
};
type ThemeContextType = {
    theme: boolean,
    toggleTheme(): void
};

const DeviceContext     : React.Context<DeviceContextType>      = React.createContext(null);
const FullscreenContext : React.Context<FullscreenContextType>  = React.createContext(null);
const LocaleContext     : React.Context<LocaleContextType>      = React.createContext(null);
const ModalContext      : React.Context<ModalContextType>       = React.createContext(null);
const ThemeContext      : React.Context<ThemeContextType>       = React.createContext(null);

export { DeviceContext, FullscreenContext, LocaleContext, ModalContext, ThemeContext };

export const supportedLocales = [ 'it', 'en' ];
export const supportedThemes = [ 'blue', 'green' ];