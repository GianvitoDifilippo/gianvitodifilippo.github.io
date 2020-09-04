class ProjectThumbnail
{
    constructor(name, background)
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
        let project_name = document.createElement('h2');
        project_name.classList.add('project-name');
        this.element.appendChild(project_background);
        this.element.appendChild(space);
        this.element.appendChild(project_name);

        project_name.textContent = name;
        
        project_background.style.backgroundImage = `url(./assets/img/projects/${background.imgSrc})`;
        if (background.positionX !== undefined) {
            
        }
        if (background.positionY !== undefined) {

        }
        if (background.scale !== undefined && !isNaN(background.scale) && background.scale > 1) {

        }
    }
}