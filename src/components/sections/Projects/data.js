import audioengineer_thumbnail from '../../../assets/img/projects/audioengineer_thumbnail.jpg';
import magicbet_thumbnail from '../../../assets/img/projects/magicbet_thumbnail.jpg';
import voicenotes_thumbnail from '../../../assets/img/projects/voicenotes_thumbnail.jpg';
import supermario_thumbnail from '../../../assets/img/projects/supermario_thumbnail.jpg';
import portfolio_thumbnail from '../../../assets/img/projects/portfolio_thumbnail.jpg';

import audioengineer_img1 from '../../../assets/img/projects/audioengineer_1.jpg';
import voicenotes_img1 from '../../../assets/img/projects/voicenotes_1.png';

const projects = {
    "audioengineer": {
        "name": "AudioEngineer",
        "thumbnail": {
            "backgroundImage": audioengineer_thumbnail,
            "backgroundPosition": "center"
        },
        "images": [
            audioengineer_img1
        ]
    },
    "voicenotes": {
        "name": "Voice Notes",
        "thumbnail": {
            "backgroundImage": voicenotes_thumbnail,
            "backgroundPosition": "center"
        },
        "images": [
            voicenotes_img1
        ]
    },
    "magicbet": {
        "name": "MagicBet",
        "thumbnail": {
            "backgroundImage": magicbet_thumbnail,
            "backgroundPosition": "center top"
        }
    },
    "supermario": {
        "name": "Super Mario Clone",
        "thumbnail": {
            "backgroundImage": supermario_thumbnail,
            "backgroundPosition": "center 90%"
        }
    },
    "portfolio": {
        "name": "Portfolio website",
        "thumbnail": {
            "backgroundImage": portfolio_thumbnail,
            "backgroundPosition": "center"
        }
    }
}

export default projects;