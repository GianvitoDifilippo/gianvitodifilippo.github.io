interface Skill {
    name: string,
    experience: number[],
    since: number,
    projects: string[]
};

const skills: { [id: string]: Skill } = {
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
    'labview': {
        name: 'LabVIEW',
        experience: [ 1 ],
        since: 2019,
        projects: [ ]
    },
    'docker': {
        name: 'Docker',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    },
    'dotnet': {
        name: '.NET Core',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    },
    'postgresql': {
        name: 'PostgreSQL',
        experience: [ 2 ],
        since: 2020,
        projects: [ ]
    },
    'html': {
        name: 'HTML',
        experience: [ 0 ],
        since: 2020,
        projects: [
            'portfolio'
        ]
    },
    'css': {
        name: 'CSS',
        experience: [ 0 ],
        since: 2020,
        projects: [
            'portfolio'
        ]
    },
    'javascript': {
        name: 'JavaScript',
        experience: [ 0 ],
        since: 2020,
        projects: [ ]
    },
    'react': {
        name: 'React',
        experience: [ 0 ],
        since: 2020,
        projects: [
            'portfolio'
        ]
    }
}

export default skills;