import bank_original from '../../assets/img/drone/gallery/bank.jpg';
import bank_thumbnail from '../../assets/img/drone/gallery/thumbnails/bank.jpg';
import belltower_original from '../../assets/img/drone/gallery/belltower.jpg';
import belltower_thumbnail from '../../assets/img/drone/gallery/thumbnails/belltower.jpg';
import campusx_original from '../../assets/img/drone/gallery/campusx.jpg';
import campusx_thumbnail from '../../assets/img/drone/gallery/thumbnails/campusx.jpg';
import garagnone_original from '../../assets/img/drone/gallery/garagnone.jpg';
import garagnone_thumbnail from '../../assets/img/drone/gallery/thumbnails/garagnone.jpg';
import mainsquare1_original from '../../assets/img/drone/gallery/mainsquare1.jpg';
import mainsquare1_thumbnail from '../../assets/img/drone/gallery/thumbnails/mainsquare1.jpg';
import mainsquare2_original from '../../assets/img/drone/gallery/mainsquare2.jpg';
import mainsquare2_thumbnail from '../../assets/img/drone/gallery/thumbnails/mainsquare2.jpg';
import villa_original from '../../assets/img/drone/gallery/villa.jpg';
import villa_thumbnail from '../../assets/img/drone/gallery/thumbnails/villa.jpg';

import { ReactImageGalleryItem } from 'react-image-gallery';
import { PhotoProps } from 'react-photo-gallery';


class Photo {
    constructor(
        public src: string,
        public thumbnailSrc: string,
        public width: number,
        public height: number,
        public title?: string) { }

    toReactImageGalleryItem(): ReactImageGalleryItem
    {
        return {
            original: this.src,
            thumbnail: this.thumbnailSrc,
            description: this.title
        };
    }

    toPhotoProps(): PhotoProps
    {
        return {
            src: this.src,
            width: this.width,
            height: this.height
        };
    }
};

export const photos: Photo[] = [
    new Photo(
        belltower_original,
        belltower_thumbnail,
        899,
        1200,
        'Campanile della Chiesa di Sant\'Erasmo'
    ),
    new Photo(
        bank_original,
        bank_thumbnail,
        916,
        1200,
        'Palazzo Di Santo'
    ),
    new Photo(
        mainsquare1_original,
        mainsquare1_thumbnail,
        1600,
        1200,
        'Piazza Giuseppe Simone'
    ),
    new Photo(
        mainsquare2_original,
        mainsquare2_thumbnail,
        1598,
        1200,
        'Piazza Giuseppe Simone'
    ),
    new Photo(
        villa_original,
        villa_thumbnail,
        1623,
        1200,
        'Villa comunale'
    ),
    new Photo(
        garagnone_original,
        garagnone_thumbnail,
        1597,
        1200,
        'Rocca del Garagnone'
    ),
    new Photo(
        campusx_original,
        campusx_thumbnail,
        1605,
        1200,
        'CampusX Bari'
    )
];