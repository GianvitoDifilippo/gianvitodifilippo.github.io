var header_transition;
var header_transition_started = false;

function animateHeader() {
    header_transition_started = true;
    header.style.transition = 'top .5s';
    header.style.top = null;
    setTimeout(() => header.style.transition = null, 500); // Style cleanup
}

function launchAnimationDesktop() {
    header.style.top = '-100px';
    header_transition = setTimeout(animateHeader, 4500);
};

function desktopApp() {
    var flagsVisible = false;

    function showFlags() {
        flagsVisible = true;
        lang.classList.add('active');
        for (let i = 1; i < flags.length; i++) {
            let ms = i * 100;
            flags[i].style.left = '0px';
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    function hideFlags() {
        flagsVisible = false;
        lang.classList.remove('active');
        for (let i = 1; i < flags.length; i++) {
            let ms = (flags.length - 1 - i) * 100;
            flags[i].style.left = `${flag_rest_left}px`;
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    
    // Adds flag event listener
    if (can_hover) {
        lang.addEventListener('mouseenter', showFlags);
        lang.addEventListener('mouseleave', () => setTimeout(hideFlags, 100));
    }
    else {
        flags.forEach(flag => flag.addEventListener('click', () => {
            if (flagsVisible) hideFlags();
            else showFlags();
        }));
    }

    // Hides flags at launch
    hideFlags();
    
    // Plays header drop in immediately if scrolling
    window.addEventListener('scroll', () => {
        if (!header_transition_started) {
            clearTimeout(header_transition);
            animateHeader();
        }
    });
};