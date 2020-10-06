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
                    <h1>The La La Medley</h1>
                    <p>
                        Il lockdown della primavera 2020 dovuto alla pandemia di COVID-19 è stato un momento di immensa incertezza. Ma,
                        vuoi per la voglia di battere la paura, vuoi per la gran quantità di tempo libero a disposizione, è stata anche
                        una stagione di estrema creatività. Avevo in mente l'idea di realizzare una cover split-screen e decisi che era
                        il momento giusto di farlo: sotto l'hashtag <span>#iorestoacasa</span> nasce il La La Medley.
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
                    <h1>The Disney Medley</h1>
                    <p>
                        Il medley di La La Land è stato un punto di partenza da cui decisi di sviluppare altre idee. Sono cresciuto con
                        le videocassette della Disney, innamorandomi, come molti, delle colonne sonore dei loro film di animazione.
                        
                    </p>
                </section>
            </BlogPage>
        );
    }
}

export default Guitar;