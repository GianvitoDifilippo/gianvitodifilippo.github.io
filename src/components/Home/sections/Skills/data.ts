interface Skill {
    name: string,
    experience: number[],
    since: number,
    projects: string[]
};

const skills: { [id: string]: Skill } = {
    'angular': {
        name: 'Angular',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    },
    'cplusplus': {
        name: 'C++',
        experience: [ 0 ],
        since: 2015,
        projects: [
            'audioengineer'
        ]
    },
    'csharp': {
        name: 'C#',
        experience: [ 0, 2 ],
        since: 2020,
        projects: [ ]
    },
    'css': {
        name: 'CSS',
        experience: [ 0, 2 ],
        since: 2020,
        projects: [
            'portfolio'
        ]
    },
    'dapr': {
        name: 'Dapr',
        experience: [ 2 ],
        since: 2021,
        projects: [ ]
    },
    'docker': {
        name: 'Docker',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    },
    'dotnet': {
        name: '.NET',
        experience: [ 0, 2 ],
        since: 2020,
        projects: [ ]
    },
    'envoy': {
        name: 'Envoy',
        experience: [ 2 ],
        since: 2021,
        projects: [ ]
    },
    'git': {
        name: 'Git',
        experience: [ 0, 2 ],
        since: 2020,
        projects: [ ]
    },
    'html': {
        name: 'HTML',
        experience: [ 0, 2 ],
        since: 2020,
        projects: [
            'portfolio'
        ]
    },
    'java': {
        name: 'Java',
        experience: [ 0 ],
        since: 2014,
        projects: [
            'magicbet',
            'voicenotes',
            'supermario'
        ]
    },
    'matlab': {
        name: 'Matlab',
        experience: [ 1 ],
        since: 2017,
        projects: [ ]
    },
    'postgresql': {
        name: 'PostgreSQL',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    },
    'python': {
        name: 'Python',
        experience: [ 1, 2 ],
        since: 2018,
        projects: [ ]
    },
    'react': {
        name: 'React',
        experience: [ 0, 2 ],
        since: 2020,
        projects: [
            'portfolio'
        ]
    },
    'sass': {
        name: 'Sass',
        experience: [ 0 ],
        since: 2020,
        projects: [
            'portfolio'
        ]
    },
    'sqlserver': {
        name: 'Sql Server',
        experience: [ 2 ],
        since: 2021,
        projects: [ ]
    },
    'typescript': {
        name: 'TypeScript',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    },
    'visualstudio': {
        name: 'Visual Studio',
        experience: [ 0, 2 ],
        since: 2015,
        projects: [ ]
    },
    'vscode': {
        name: 'VS Code',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    }
}

export default skills;