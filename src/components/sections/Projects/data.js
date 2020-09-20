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
        "descr": "Semplice applicazione nata come progetto universitario. Tra le sue funzioni ci sono la generazione dello spettrogramma di campioni di audio acquisiti da microfono o la visualizzazione in tempo reale dello spettro del segnale in arrivo al microfono. Comprende un algoritmo di riconoscimento vocale, basato su reti neurali e algoritmi genetici, in grado di riconoscere le vocali registrate.",
        "thumbnail": {
            "backgroundImage": audioengineer_thumbnail,
            "backgroundPosition": "center"
        },
        "images": [
            audioengineer_img1
        ]
    },
    "magicbet": {
        "name": "MagicBet",
        "descr": "Il mio primo progetto in assoluto. Gestisce le puntate di scommesse sportive secondo un preciso algoritmo, da me progettato, chiamato MagicBet.",
        "thumbnail": {
            "backgroundImage": magicbet_thumbnail,
            "backgroundPosition": "center top"
        }
    },
    "voicenotes": {
        "name": "Voice Notes",
        "descr": "Applicazione commissionatami da un laureando in logopedia come proof-of-concept della sua tesi di laurea, incentrata sulla diagnostica di patologie vocali. Gestisce le cartelle cliniche dei pazienti, permettendo di inserire anamnesi, diagnosi con foto e/o video, e altri parametri di valutazione della postura e della voce.",
        "thumbnail": {
            "backgroundImage": voicenotes_thumbnail,
            "backgroundPosition": "center"
        },
        "images": [
            voicenotes_img1
        ]
    },
    "supermario": {
        "name": "Super Mario Clone",
        "descr": "Un semplice clone di Super Mario scritto in Java puro, come esercizio di programmazione a basso livello di videogiochi.",
        "thumbnail": {
            "backgroundImage": supermario_thumbnail,
            "backgroundPosition": "center 90%"
        }
    },
    "portfolio": {
        "name": "Portfolio website",
        "descr": "È il sito che stai visitando in questo momento! Non credo serva descriverlo :)",
        "thumbnail": {
            "backgroundImage": portfolio_thumbnail,
            "backgroundPosition": "center"
        }
    }
}

export default projects;