class ProjectListDivElement extends HTMLDivElement
{
    constructor()
    {
        super();
    }

    from(projects)
    {
        projects.forEach(project => {
            let li = document.createElement('li');

            li.appendChild(document.createElement('div', { is: 'project-thumbnail' }).from(project.id, project.name, project.options));
            this.appendChild(li);
        });

        return this;
    }
}

window.customElements.define('project-list', ProjectListDivElement, { extends: 'div' });