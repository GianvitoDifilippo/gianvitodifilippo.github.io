function launchAnimationDesktop() {
    header.style.top = '-100px';

    // Entering header
    setTimeout(() => {
        header.style.transition = 'top .5s';
        header.style.top = null;
    }, 4500);

    // Style cleanup
    setTimeout(() => {
        header.style.transition = null;
    }, 5000);
};

function desktopApp() {
    var flagsVisible = false;

    function showFlags() {
        flagsVisible = true;
        for (let i = 1; i < flags.length; i++) {
            let ms = i * 100;
            flags[i].style.left = '0px';
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    function hideFlags() {
        flagsVisible = false;
        for (let i = 1; i < flags.length; i++) {
            let ms = (flags.length - 1 - i) * 100;
            flags[i].style.left = `${flag_rest_left}px`;
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    
    // Adds flag event listener
    if (can_hover) {
        lang.addEventListener('mouseenter', showFlags);
        lang.addEventListener('mouseleave', hideFlags);
    }
    else {
        flags.forEach(flag => flag.addEventListener('click', () => {
            if (flagsVisible) hideFlags();
            else showFlags();
        }));
    }

    // Hides flags at launch
    hideFlags();
};