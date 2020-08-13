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
        for (let i = 1; i < flags.length; i++) {
            let ms = i * 100;
            flags[i].style.top = '0px';
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    function hideFlags() {
        flagsVisible = false;
        for (let i = 1; i < flags.length; i++) {
            let ms = (flags.length - 1 - i) * 100;
            flags[i].style.top = `${flag_rest_top}px`;
            flags[i].style.transitionDelay = `${ms}ms`;
        }
    }
    function showLang() {
        langVisible = true;
        lang.style.left = '3%';
    }
    function hideLang() {
        langVisible = false;
        lang.style.left = `${-flag_width * 1.5}px`;
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

    // Toggles nav-list when click on hamburger
    hamburger.addEventListener('click', toggleNavlistActive);
    
    
    // Neon animation for mobile
    header_brand.addEventListener('click', () => {
        header_brand.classList.add('neon_animation');
    });
    neon_items.forEach(item => {
        item.addEventListener('animationend', () => {
            header_brand.classList.remove('neon_animation');
            menu_items.forEach(item => {
                item.classList.remove('neon_animation');
            });
        });
    });
    menu_items.forEach(item =>
        item.addEventListener('click', () => {
            item.classList.add('neon_animation');
            setTimeout(toggleNavlistActive, 100);
        })
    );

    // Adds click event listener
    flags.forEach(flag => flag.addEventListener('click', () => {
        if (flagsVisible) hideFlags();
        else showFlags();
    }));

    // Hides flags and lang at launch
    hideFlags();
    hideLang();
};