import React from 'react';

import BlogPage from '../common/Blog'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMusic } from '@fortawesome/free-solid-svg-icons'

import Translate from '../common/Translate';

import lalalandpdf from '../../assets/La La Land Medley.pdf';
import disneypdf from '../../assets/Disney Medley.pdf';

import './guitar_desktop.scss';
import './guitar_tablet.scss';
import './guitar_phone.scss';

class Guitar extends React.PureComponent
{
    render(): JSX.Element
    {
        return (
            <BlogPage id="guitar">
                <div className="blog-section" id="descr">
                    <div className="profileimg"></div>
                    <p>
                        <span>Benvenuto nel mio spazio musicale!</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dolorem cupiditate magni eos ea soluta. Nobis eligendi pariatur alias est atque officiis quisquam consequuntur,
                        incidunt optio quod! Reprehenderit qui ea voluptate, temporibus culpa debitis, error accusamus possimus doloremque
                        sint recusandae est perferendis modi magnam quasi? Rerum est quas repellendus inventore unde.
                    </p>
                </div>
                <section className="blog-section" id="la-la-land-medley">
                    <h1>La La Land Medley</h1>
                    <p>
                        <Translate selector="guitar:la-la-land-medley:text:0"/>&nbsp;
                        <span><Translate selector="guitar:la-la-land-medley:hashtag"/></span>&nbsp;
                        <Translate selector="guitar:la-la-land-medley:text:1"/>
                    </p>
                    <iframe className="la-la-land-video"
                        title="la-la-land-medley"
                        src="https://www.youtube.com/embed/daScsJrS-mc"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <a href={lalalandpdf} download="La La Land Medley" className="download-sheet">
                        <span className="fa-layers fa-fw">
                          <FontAwesomeIcon className="fa-icon-file" icon={faFile}/>
                          <FontAwesomeIcon className="fa-icon-music" icon={faMusic} inverse/>
                        </span>
                        <span className="download-sheet-text">Scarica lo spartito!</span>
                    </a>
                </section>
                <section className="blog-section" id="disney-medley">
                    <h1>Disney Medley</h1>
                    <p>
                        <Translate selector="guitar:disney-medley:text"/>
                    </p>
                    <iframe className="disney-video"
                        title="disney-medley"
                        src="https://www.youtube.com/embed/kGz_20yrYrg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <a href={disneypdf} download="Disney Medley" className="download-sheet">
                        <span className="fa-layers fa-fw">
                          <FontAwesomeIcon className="fa-icon-file" icon={faFile}/>
                          <FontAwesomeIcon className="fa-icon-music" icon={faMusic} inverse/>
                        </span>
                        <span className="download-sheet-text">Scarica lo spartito!</span>
                    </a>
                </section>
            </BlogPage>
        );
    }
}

export default Guitar;