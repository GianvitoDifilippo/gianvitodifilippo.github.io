function desktopApp() {
    function showFlags() {
        for (let i = 1; i < flags.length; i++) {
            let ms = i * 100;
            flags[i].style.left = '0px';
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    function hideFlags() {
        for (let i = 1; i < flags.length; i++) {
            let ms = (flags.length - 1 - i) * 100;
            flags[i].style.left = `${flag_rest_left}px`;
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    
    // Adds hover event listener
    lang.addEventListener('mouseenter', showFlags);
    lang.addEventListener('mouseleave', hideFlags);

    // Hides flags at launch
    hideFlags();
};