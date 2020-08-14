function launchAnimationMobile() {
    hamburger.style.left = '100px';

    // Entering hamburger
    setTimeout(() => {
        hamburger.style.transition = 'left .5s';
        hamburger.style.left = '0px';
    }, 4500);

    // Style cleanup
    setTimeout(() => {
        hamburger.style.transition = null;
    }, 5000);
}

function mobileApp() {
    var flagsVisible = false;
    var langVisible = false;
    
    function showFlags() {
        flagsVisible = true;
        lang.classList.add('active');
        for (let i = 1; i < flags.length; i++) {
            let ms = i * 100;
            flags[i].style.top = '0px';
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    function hideFlags() {
        flagsVisible = false;
        lang.classList.remove('active');
        for (let i = 1; i < flags.length; i++) {
            let ms = (flags.length - 1 - i) * 100;
            flags[i].style.top = `${flag_rest_top}px`;
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    function showLang() {
        langVisible = true;
        lang.style.left = '3%';
        lang.style.transitionDelay = '.2s';
    }
    function hideLang() {
        langVisible = false;
        lang.style.left = `${-flag_width * 1.5}px`;
        lang.style.transitionDelay = flagsVisible ? '.1s' : '0s';
        if (flagsVisible) {
            hideFlags();
        }
    }

    // Shows/hides nav-list, disables scrolling, disables header brand button
    function toggleNavlistActive() {
        header_brand.classList.toggle('inactive');
        navlist.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('stop_scroll');
        if (langVisible) {
            hideLang();
        }
        else {
            showLang();
        }
    }

    // Toggles navlist when clicking on hamburger
    hamburger.addEventListener('click', toggleNavlistActive);
    
    // Toggles navlist when clicking on list items
    menu_items.forEach(item => item.addEventListener('click', () => setTimeout(toggleNavlistActive, 100)));

    // Adds click event listener
    flags.forEach(flag => flag.addEventListener('click', () => {
        if (flagsVisible) hideFlags();
        else showFlags();
    }));

    // Hides flags and lang at launch
    hideFlags();
    hideLang();
};