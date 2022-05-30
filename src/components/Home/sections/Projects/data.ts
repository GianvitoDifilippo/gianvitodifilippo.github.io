import audioengineer_thumbnail from '../../../../assets/img/projects/audioengineer_thumbnail.jpg';
import magicbet_thumbnail from '../../../../assets/img/projects/magicbet_thumbnail.jpg';
import voicenotes_thumbnail from '../../../../assets/img/projects/voicenotes_thumbnail.jpg';
import supermario_thumbnail from '../../../../assets/img/projects/supermario_thumbnail.jpg';
import portfolio_thumbnail from '../../../../assets/img/projects/portfolio_thumbnail.jpg';
import generatorkit_thumbnail from '../../../../assets/img/projects/generatorkit_thumbnail.png';

import audioengineer_img1 from '../../../../assets/img/projects/audioengineer_1.jpg';
import voicenotes_img1 from '../../../../assets/img/projects/voicenotes_1.png';
import generatorkit_img1 from '../../../../assets/img/projects/generatorkit_1.png';

export interface Project {
    name: string,
    thumbnail: {
        backgroundImage: string,
        backgroundPosition?: string
    },
    images: string[],
    href: string
};


const projects: { [id: string]: Project } = {
    'audioengineer': {
        name: 'AudioEngineer',
        thumbnail: {
            backgroundImage: audioengineer_thumbnail,
            backgroundPosition: 'center'
        },
        images: [
            audioengineer_img1
        ],
        href: 'https://github.com/GianvitoDifilippo/audioengineer'
    },
    'voicenotes': {
        name: 'Voice Notes',
        thumbnail: {
            backgroundImage: voicenotes_thumbnail,
            backgroundPosition: 'center'
        },
        images: [
            voicenotes_img1
        ],
        href: 'https://github.com/GianvitoDifilippo'
    },
    'magicbet': {
        name: 'MagicBet',
        thumbnail: {
            backgroundImage: magicbet_thumbnail,
            backgroundPosition: 'center top'
        },
        images: [],
        href: 'https://github.com/GianvitoDifilippo'
    },
    'supermario': {
        name: 'Super Mario Clone',
        thumbnail: {
            backgroundImage: supermario_thumbnail,
            backgroundPosition: 'center 90%'
        },
        images: [],
        href: 'https://github.com/GianvitoDifilippo'
    },
    'portfolio': {
        name: 'Portfolio website',
        thumbnail: {
            backgroundImage: portfolio_thumbnail,
            backgroundPosition: 'center'
        },
        images: [],
        href: 'https://github.com/GianvitoDifilippo/gianvitodifilippo.github.io'
    },
    'generatorkit': {
        name: 'GeneratorKit',
        thumbnail: {
            backgroundImage: generatorkit_thumbnail,
            backgroundPosition: 'center 50%'
        },
        images: [
            generatorkit_img1
        ],
        href: 'https://github.com/GianvitoDifilippo/GeneratorKit'
    }
}

export default projects;