/* ------------------------------------------------     COMMON ELEMENTS     ------------------------------------------------ */
const body = document.body;
const neon_activator_items = document.querySelectorAll('.neon_activator');
const message = document.getElementById('message');

/* ------------------------------------------------     HEADER ELEMENTS     ------------------------------------------------ */
const header = document.querySelector('#header');
const navbar = document.querySelector('#navbar');
const navlist = document.querySelector('#navlist');
const hamburger = document.querySelector('#hamburger');
const menu_items = document.querySelectorAll('#navlist li');
const header_brand = document.querySelector('#navbar .brand');

/* ------------------------------------------------      HERO ELEMENTS      ------------------------------------------------ */
const hero = document.querySelector('#hero');
const hero_brand = document.querySelector('#hero-main');
const hero_h1 = document.querySelector('#hero-main h1');
const hero_h2 = document.querySelector('#hero-main h2');
const hero_a = document.querySelectorAll('#hero-main a');

/* ------------------------------------------------     SKILLS ELEMENTS     ------------------------------------------------ */
const skill_list = document.querySelector('#skill-list');
const skill_preview = document.querySelector('#skill-preview');
const skill_message = document.querySelector('#skill-preview .message');
const skill_details = document.querySelector('#skill-preview .details');
const skill_content = document.querySelector('#skill-preview-content');
const skill_icon = document.querySelector('#skill-brief .skill-item .skill-icon');
const skill_name = document.querySelectorAll('#skill-brief .skill-name');
const skill_exp_value = document.querySelector('#skill-brief .skill-details .skill-experience .value');
const skill_since_value = document.querySelector('#skill-brief .skill-details .skill-since .value');
const skill_descr = document.querySelector('#skill-brief p');
const skill_projects = document.querySelector('#skill-projects');
const skill_noprojects = document.querySelector('#skill-noprojects');

/* ------------------------------------------------      CSS VARIABLES      ------------------------------------------------ */
const navigation_position = parseInt(getComputedStyle(document.body).getPropertyValue('--navigation_position'));
const neon_animation_duration = parseInt(getComputedStyle(document.body).getPropertyValue('--neon_animation_duration'));
const fadein_animation_duration = parseInt(getComputedStyle(document.body).getPropertyValue('--fadein_animation_duration'));

/* ------------------------------------------------       VARS/CONSTS       ------------------------------------------------ */
const desktop_minWidth = 1366;
const mobile = window.innerWidth <= desktop_minWidth;
const can_hover = parseInt(getComputedStyle(document.body).getPropertyValue('--can_hover')) == 1;
var header_popin_handle = null;
var current_skill = null;

/* ------------------------------------------------        FUNCTIONS        ------------------------------------------------ */

function header_popin()
{
    header.style.transition = 'transform .5s';
    hamburger.style.transition = 'transform .5s';
    header.classList.remove('hidden');
    header.classList.add('translation');
    header_popin_handle = null;
    setTimeout(() => {
        header.style = null;
        hamburger.style = null;
    }, 500);
}

function launchAnimation()
{
    function fadeIn(element, timeout) {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('fadein');
            setTimeout(() => element.classList.remove('fadein'), fadein_animation_duration);
        }, timeout);
    }

    header.classList.add('hidden');

    hero_h1.classList.add('hidden');
    hero_h2.classList.add('hidden');
    hero_a.forEach(item => item.classList.add('hidden'));

    fadeIn(hero_h1, 1000);
    fadeIn(hero_h2, 2500);
    hero_a.forEach(item => fadeIn(item, 4000));

    header_popin_handle = setTimeout(header_popin, 4500);
}

function phonenumberOnClick(x, y)
{
    let selector = 'messages:copied';
    copyToClipboard('phonenumber');
    displayMessage(translateText(selector), x, y, document.getElementById('phonenumber')).setAttribute('data-lang', selector);
}

function emailOnClick(x, y)
{
    let selector = 'messages:copied';
    copyToClipboard('emailaddress');
    displayMessage(translateText(selector), x, y, document.getElementById('emailaddress')).setAttribute('data-lang', selector);
}

function scrollCallback(scrollY)
{
    // Navbar navigation color
    if (scrollY > navigation_position) {
        navbar.classList.add('navigating');
    }
    else {
        navbar.classList.remove('navigating');
    }

    // Hero background parallax effect
    hero.style.backgroundPositionY = `${scrollY * 0.7}px`;
}

function showSkillDetails(skill)
{
    function setDetails(skillName, sinceYear, imgExtension, projects) {
        skill_icon.style.backgroundImage = `url(./assets/img/skills/${skill}.${imgExtension})`;
        skill_name.forEach(item => item.textContent = skillName);
        skill_exp_value.setAttribute('data-lang', `skills:skill-preview:experience:values:${skill}`);
        skill_exp_value.textContent = translateText(`skills:skill-preview:experience:values:${skill}`);
        skill_since_value.textContent = String(sinceYear);
        skill_descr.setAttribute('data-lang', `skills:skill-preview:descr:${skill}`);
        skill_descr.textContent = translateText(`skills:skill-preview:descr:${skill}`);

        Array.from(skill_projects.getElementsByTagName('li')).forEach(child => skill_projects.removeChild(child));
        
        if (projects != undefined) {
            projects.filter(project => project.id != undefined).forEach(project => {
                let li = document.createElement('li');
                li.classList.add('project');
                    let background = document.createElement('div');
                    background.classList.add('project-background');
                    let space = document.createElement('div');
                    space.classList.add('space');
                        let search = document.createElement('i');
                        search.classList.add('fas');
                        search.classList.add('fa-search-plus');
                        space.appendChild(search);
                    let name = document.createElement('h2');
                    name.textContent = project.name != undefined ? project.name : project.id;
                li.appendChild(background);
                li.appendChild(space);
                li.appendChild(name);
                
                background.style.backgroundImage = `url(./assets/img/projects/${project.id}_thumbnail.jpg)`;
                if (project.backgroundPositionX != undefined) {
                    background.style.backgroundPositionX = project.backgroundPositionX;
                }
                if (project.backgroundPositionY != undefined) {
                    background.style.backgroundPositionY = project.backgroundPositionY;
                }
                if (project.backgroundScale != undefined && !isNaN(project.backgroundScale) && project.backgroundScale > 1) {
                    background.style.width = `${project.backgroundScale * 100}%`;
                    background.style.height = `${project.backgroundScale * 100}%`;
                    background.style.left = `${-(project.backgroundScale - 1) * 50}%`;
                    background.style.top = `${-(project.backgroundScale - 1) * 50}%`;
                }
                skill_projects.appendChild(li);
            });

            skill_projects.style.display = null;
            skill_noprojects.style.display = 'none';
        }
        else {
            skill_projects.style.display = 'none';
            skill_noprojects.style.display = null;
        }        
    }

    function setSkill() {
        let currentHeight = skill_content.scrollHeight;
        switch(skill) {
            case 'cplusplus':
                setDetails('C++', 2014, 'svg', [
                    { id: 'audioengineer', name: 'AudioEngineer' }
                ]);
                break;
            case 'csharp':
                setDetails('C#', 2020, 'svg');
                break;
            case 'python':
                setDetails('Python', 2017, 'svg');
                break;
            case 'java':
                setDetails('Java', 2014, 'svg', [
                    { id: 'magicbet',   name: 'MagicBet',          backgroundScale: 1.1 },
                    { id: 'voicenotes', name: 'Voice Notes',       backgroundPositionX: '-70px' },
                    { id: 'supermario', name: 'Super Mario Clone', backgroundPositionY: '-144px' }
                ]);
                break;
            case 'matlab':
                setDetails('Matlab', 2015, 'png');
                break;
            case 'labview':
                setDetails('LabVIEW', 2019, 'png');
                break;
            case 'docker':
                setDetails('Docker', 2020, 'svg');
                break;
            case 'dotnet':
                setDetails('.NET Core', 2020, 'svg');
                break;
            case 'postgresql':
                setDetails('PostgreSQL', 2020, 'svg');
                break;
            case 'html':
                setDetails('HTML', 2020, 'svg', [
                    { id: 'portfolio', name: 'Portfolio website', backgroundPositionX: 'center' }
                ]);
                break;
            case 'css':
                setDetails('CSS', 2020, 'svg', [
                    { id: 'portfolio', name: 'Portfolio website', backgroundPositionX: 'center' }
                ]);
                break;
            case 'javascript':
                setDetails('JavaScript', 2020, 'svg', [
                    { id: 'portfolio', name: 'Portfolio website', backgroundPositionX: 'center' }
                ]);
                break;
        }
        if (current_skill == null) {
            skill_message.style.display = 'none';
            skill_details.style.display = null;
            skill_content.animate([
                {
                    height: '0px'
                },
                {
                    height: `${skill_content.scrollHeight}px`
                }
            ], { duration: 400 }).onfinish = () => skill_content.style.height = null;
        }
        else {
            skill_content.animate([
                {
                    height: `${currentHeight}px`
                },
                {
                    height: `${skill_content.scrollHeight}px`
                }
            ], { duration: 400 }).onfinish = () => skill_content.style.height = null;
        }
        current_skill = skill;
    }

    if (current_skill === skill) {
        skill_content.animate([
            {
                height: `${skill_content.scrollHeight}px`
            },
            {
                height: '0px'
            }
        ],
        {
            duration: 400
        }).onfinish = () => skill_content.style.height = '0px';
        skill_content.style.height = '0px';
        skill_message.style.display = null;
        skill_details.style.display = 'none';
        current_skill = null;
        return;
    }

    if (current_skill != null) {
        Array.from(skill_projects.getElementsByTagName('li')).forEach(function(child) {
            child.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], { duration: 100 });
        });
        skill_noprojects.animate([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ], { duration: 100 });
        setTimeout(setSkill, 90);
    }
    else {
        setSkill();
    }
}

/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */

// Session cookie settings
if (!getCookie('session')) {
    launchAnimation();
    setCookie('session', 'session');
}

// Skill content collapse animation
skill_content.style.height = '0px';
skill_details.style.display = 'none';


// Adds neon animation on click
neon_activator_items.forEach(item => item.addEventListener('click', () => {
    let children = Array.from(item.getElementsByClassName('neon'))
        .concat(   Array.from(item.getElementsByClassName('neon_secondary')));

    if (item.classList.contains('neon') || item.classList.contains('neon_secondary')) {
        children.push(item);
    }
    children.forEach(child => {
        child.classList.add('neon_animation');
        setTimeout(() => child.classList.remove('neon_animation'), neon_animation_duration);
    });
}));

// Scroll effects
document.addEventListener('scroll', () => {
    scrollCallback(window.scrollY);

    // Shows header on scrolling if not popped in
    if (header_popin_handle != null) {
        clearTimeout(header_popin_handle);
        header_popin();
    }
});

// Device-specific scripts
if (mobile) {
    indexMobile();
}
else {
    indexDesktop();
}

// Ensures correct scrolling settings
scrollCallback(window.scrollY);

// Async code
(async () => {
    // Translates page in preferred browser language
    let code = getCookie('lang');
    if (!code) code = navigator.language.split('-')[0];
    setCookie('lang', code);
    await translatePage(code);
})().then(() => {
    // Shows the page when everything is done
    body.classList.add('visible');
});