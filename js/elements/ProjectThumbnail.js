class ProjectThumbnailDivElement extends HTMLDivElement
{
    constructor()
    {
        super();
        this.className = 'project-thumbnail';

        this.project_background = document.createElement('div');
        this.project_background.className = 'project-background';
        let space = document.createElement('div');
        space.className = 'space';
            let icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-search-plus');
            space.appendChild(icon);
        this.project_title = document.createElement('h2');
        this.appendChild(this.project_background);
        this.appendChild(space);
        this.appendChild(this.project_title);
    }

    from(name, title, options)
    {
        this.project_title.textContent = title;
        if (options.data_lang !== undefined) {
            let name_lang = translateText(options.data_lang);
            if (name_lang !== null) this.project_title.textContent = name_lang;
            this.project_title.setAttribute('data-lang', options.data_lang);
        }
        
        this.project_background.style.backgroundImage = `url(./assets/img/projects/${name}_thumbnail.jpg)`;
        
        if (options !== undefined) {
            if (options.backgroundPositionX !== undefined) {
                this.project_background.style.backgroundPositionX = options.backgroundPositionX;
            }
            if (options.backgroundPositionY !== undefined) {
                this.project_background.style.backgroundPositionY = options.backgroundPositionY;
            }
            if (options.backgroundScale !== undefined && !isNaN(options.backgroundScale) && options.backgroundScale > 1) {
                this.project_background.style.width = `${options.backgroundScale * 100}%`;
                this.project_background.style.height = `${options.backgroundScale * 100}%`;
                this.project_background.style.left = `${-(options.backgroundScale - 1) * 50}%`;
                this.project_background.style.top = `${-(options.backgroundScale - 1) * 50}%`;
            }
        }
        return this;
    }
}

window.customElements.define('project-thumbnail', ProjectThumbnailDivElement, { extends: 'div' });