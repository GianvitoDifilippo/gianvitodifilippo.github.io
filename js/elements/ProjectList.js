class ProjectList
{
    constructor(projects)
    {
        this.element = document.createElement('ul');

        projects.forEach(project => {
            let li = document.createElement('li');
            li.appendChild(new ProjectThumbnail(project.id, project.name, project.options).element);
            this.element.appendChild(li);
        });
    }
}