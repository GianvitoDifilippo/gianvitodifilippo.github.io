class ProjectThumbnail
{
    constructor(name, title, options)
    {
        this.element = document.createElement('div');
        this.element.classList.add('project-thumbnail');

        let project_background = document.createElement('div');
        project_background.classList.add('project-background');
        let space = document.createElement('div');
        space.classList.add('space');
            let icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-search-plus');
            space.appendChild(icon);
        let project_title = document.createElement('h2');
        this.element.appendChild(project_background);
        this.element.appendChild(space);
        this.element.appendChild(project_title);

        project_title.textContent = title;
        if (options.data_lang !== undefined) {
            let name_lang = translateText(options.data_lang);
            if (name_lang !== null) project_title.textContent = name_lang;
            project_title.setAttribute('data-lang', options.data_lang);
        }
        
        project_background.style.backgroundImage = `url(./assets/img/projects/${name}_thumbnail.jpg)`;
        
        if (options !== undefined) {
            if (options.backgroundPositionX !== undefined) {
                project_background.style.backgroundPositionX = options.backgroundPositionX;
            }
            if (options.backgroundPositionY !== undefined) {
                project_background.style.backgroundPositionY = options.backgroundPositionY;
            }
            if (options.backgroundScale !== undefined && !isNaN(options.backgroundScale) && options.backgroundScale > 1) {
                project_background.style.width = `${options.backgroundScale * 100}%`;
                project_background.style.height = `${options.backgroundScale * 100}%`;
                project_background.style.left = `${-(options.backgroundScale - 1) * 50}%`;
                project_background.style.top = `${-(options.backgroundScale - 1) * 50}%`;
            }
        }
    }
}