import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

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

if (window.localStorage.getItem('theme') === 'green') {
    document.body.classList.add('green-mode');
}

ReactDOM.render(<App/>, document.getElementById('root'));

// Adds neon animation on click
Array.from(document.getElementsByClassName('neon_activator')).forEach(item => item.addEventListener('click', function() {
    let children = Array.from(item.getElementsByClassName('neon1'))
        .concat(   Array.from(item.getElementsByClassName('neon2')));
    
        if (item.classList.contains('neon1') || item.classList.contains('neon2')) {
            children.push(item);
        }

        children.forEach(child => {
            child.classList.add('animated');
            child.addEventListener('animationend', () => child.classList.remove('animated'));
        });
}));
