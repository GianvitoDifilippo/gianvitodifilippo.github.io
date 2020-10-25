import React from 'react';

import BlogPage from '../common/Blog'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMusic } from '@fortawesome/free-solid-svg-icons'

import Translate from '../common/Translate';

import lalalandpdf from '../../assets/La La Land Medley.pdf';
import disneypdf from '../../assets/Disney Medley.pdf';
import { NeonConsumer, NeonProvider } from '../common/Neon';

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
                    <p>
                        <span className="bold"><Translate selector="guitar:descr:welcome"/></span>&nbsp;
                        <Translate selector="guitar:descr:text"/>
                    </p>
                </div>
                <div className="blog-section" id="faq">
                    <h1>FAQ</h1>
                    <div className="faq-img has-shadow"></div>
                    <Translate selector="guitar:faq:really"/>
                    <br/>
                    <br/>
                    <div>
                        <span className="bolder"><Translate selector="guitar:faq:q"/>: <Translate selector="guitar:faq:questions:0"/></span>
                        <br/>
                        <span className="bolder"><Translate selector="guitar:faq:a"/>:</span> <Translate selector="guitar:faq:answers:0"/>
                    </div>
                    <br/>
                    <div>
                        <span className="bolder"><Translate selector="guitar:faq:q"/>: <Translate selector="guitar:faq:questions:1"/></span>
                        <br/>
                        <span className="bolder"><Translate selector="guitar:faq:a"/>:</span> <Translate selector="guitar:faq:answers:1"/>
                    </div>
                    <br/>
                    <div>
                        <span className="bolder"><Translate selector="guitar:faq:q"/>: <Translate selector="guitar:faq:questions:2"/></span>
                        <br/>
                        <span className="bolder"><Translate selector="guitar:faq:a"/>:</span> <Translate selector="guitar:faq:answers:2"/>
                    </div>
                    <br/>
                    <div>
                        <span className="bolder"><Translate selector="guitar:faq:q"/>: <Translate selector="guitar:faq:questions:3"/></span>
                        <br/>
                        <span className="bolder"><Translate selector="guitar:faq:a"/>:</span> <Translate selector="guitar:faq:answers:3"/>
                    </div>
                </div>
                <section className="blog-section" id="la-la-land-medley">
                    <h1>La La Land Medley</h1>
                    <p>
                        <Translate selector="guitar:la-la-land-medley:text:0"/>&nbsp;
                        <span className="bold"><Translate selector="guitar:la-la-land-medley:hashtag"/></span>&nbsp;
                        <Translate selector="guitar:la-la-land-medley:text:1"/>
                    </p>
                    <iframe className="la-la-land-video"
                        title="la-la-land-medley"
                        src="https://www.youtube.com/embed/daScsJrS-mc"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <NeonProvider>
                        <a href={lalalandpdf} download="La La Land Medley" className="download-sheet">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon className="fa-icon-file" icon={faFile}/>
                                <FontAwesomeIcon className="fa-icon-music" icon={faMusic} inverse/>
                            </span>
                            <span className="download-sheet-text">
                                <NeonConsumer>
                                    <Translate selector="guitar:downloadpdf"/>
                                </NeonConsumer>
                            </span>
                        </a>
                    </NeonProvider>
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
                    <NeonProvider>
                        <a href={disneypdf} download="Disney Medley" className="download-sheet">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon className="fa-icon-file" icon={faFile}/>
                                <FontAwesomeIcon className="fa-icon-music" icon={faMusic} inverse/>
                            </span>
                            <span className="download-sheet-text">
                                <NeonConsumer>
                                    <Translate selector="guitar:downloadpdf"/>
                                </NeonConsumer>
                            </span>
                        </a>
                    </NeonProvider>
                </section>
            </BlogPage>
        );
    }
}

export default Guitar;