import React from 'react';

import BlogPage from '../Blog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMusic } from '@fortawesome/free-solid-svg-icons'

import Translate from '../Translate';

import guitar_img1 from '../../assets/img/guitar/guitar1.jpg';

import './guitar_desktop.scss';

class Guitar extends React.PureComponent
{
    render()
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
                <section className="blog-section" id="la-la-medley">
                    <h1>La La Medley</h1>
                    <p>
                        <Translate selector="guitar:la-la-medley:text:0"/>&nbsp;
                        <span><Translate selector="guitar:la-la-medley:hashtag"/></span>&nbsp;
                        <Translate selector="guitar:la-la-medley:text:1"/>
                    </p>
                    <iframe
                        width="960"
                        height="540"
                        title="la-la-medley"
                        src="https://www.youtube.com/embed/daScsJrS-mc"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <div className="download-sheet neon_activator">
                        <span className="fa-layers fa-fw">
                          <FontAwesomeIcon className="fa-icon-file" icon={faFile}/>
                          <FontAwesomeIcon className="fa-icon-music" icon={faMusic} inverse/>
                        </span>
                        <span className="neon2">Scarica lo spartito in formato PDF!</span>
                    </div>
                </section>
                <section className="blog-section" id="disney-medley">
                    <h1>Disney Medley</h1>
                    <p>
                        <Translate selector="guitar:disney-medley:text"/>
                    </p>
                    <iframe
                        width="960"
                        height="600"
                        title="disney-medley"
                        src="https://www.youtube.com/embed/kGz_20yrYrg"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <div className="download-sheet neon_activator">
                        <span className="fa-layers fa-fw">
                          <FontAwesomeIcon className="fa-icon-file" icon={faFile}/>
                          <FontAwesomeIcon className="fa-icon-music" icon={faMusic} inverse/>
                        </span>
                        <span className="neon2">Scarica lo spartito in formato PDF!</span>
                    </div>
                </section>
            </BlogPage>
        );
    }
}

export default Guitar;