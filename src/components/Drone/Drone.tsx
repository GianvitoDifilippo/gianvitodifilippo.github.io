import React from 'react';

import Gallery from 'react-image-gallery';
import GalleryPhone, { PhotoClickHandler } from 'react-photo-gallery';

import BlogPage from '../common/Blog'
import Modal from '../common/Modal';

import Translate from '../common/Translate';

import { DeviceContext } from '../../shared/context';

import { photos } from './data';
import piloting from '../../assets/img/drone/piloting.jpg';

import './drone_desktop.scss';
import './drone_tablet.scss';
import './drone_phone.scss';

class Drone extends React.PureComponent<{}, { currentPhoto: number }>
{
    static contextType = DeviceContext;

    constructor(props: Readonly<{}>)
    {
        super(props);

        this.setCurrentPhoto = this.setCurrentPhoto.bind(this);
        
        this.state = {
            currentPhoto: -1
        };
    }

    render(): JSX.Element
    {
        const reactImageGalleryItems = photos.map((photo) => photo.toReactImageGalleryItem());
        const photoProps = photos.map((photo) => photo.toPhotoProps());

        return (
            <BlogPage id="drone">
                <div className="blog-section" id="descr">
                    <p>
                        <span className="bold"><Translate selector="drone:descr:welcome" /></span>&nbsp;
                        <Translate selector="drone:descr:text"/>
                    </p>
                    <img className="descr-img has-shadow" src={piloting}/>
                </div>
                <section className="blog-section" id="snow">
                    <h1><Translate selector="sections:snow"/></h1>
                    <Translate selector="drone:snow:text"/>
                    <iframe className="snow-video"
                        src="https://www.youtube.com/embed/qZblCHQSP1M"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </section>
                <section className="blog-section" id="gallery">
                    <h1><Translate selector="sections:gallery"/></h1>
                    {this.context !== 'phone' ?
                        <Gallery items={reactImageGalleryItems}/>
                        :
                        <>
                            <GalleryPhone photos={photoProps} onClick={this.openPhoto}/>
                            <Modal isOpen={this.state.currentPhoto !== -1} id="drone-gallery-modal" onClose={() => this.setCurrentPhoto(-1)}>
                                <img src={photos[this.state.currentPhoto]?.src}/>
                                <h1>{photos[this.state.currentPhoto]?.title}</h1>
                            </Modal>
                        </>
                    }
                </section>
            </BlogPage>
        );
    }

    setCurrentPhoto(index: number)
    {
        this.setState({ currentPhoto: index });
    }

    openPhoto: PhotoClickHandler = (event, photos) => {
        this.setCurrentPhoto(photos.index);
    };
}

export default Drone;