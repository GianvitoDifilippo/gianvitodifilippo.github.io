import React from 'react';

import Section from '../Section';
import Translate from '../../misc/Translate';

import polibaImg from '../../../assets/img/edu/poliba.png';
import upmImg from '../../../assets/img/edu/upm.png';
import piccinniImg from '../../../assets/img/edu/piccinni.png';

import './education_desktop.scss';
import './education_tablet.scss';
import './education_phone.scss';

const EducationItem = props => (
    <li className={`box ${props.id}`}>
        <a className="noselect" href={props.link} target="_blank"><img src={props.img} alt="" /></a>
        <span className="edu-descr">
            <h1 className="box-heading"><Translate selector={`education:${props.id}:h1`}>Education title</Translate></h1>
            <h2><a href={props.link} target="_blank">{props.uni}</a></h2>
            <h3>{props.year}</h3>
            <p><Translate selector={`education:${props.id}:descr`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet odio atque explicabo nisi tempore ducimus fugiat, et minus sit.
            </Translate></p>
            <p><Translate selector={`education:${props.id}:score`}>
            </Translate></p>
        </span>
    </li>
);

const Education = props => (
    <Section id="education" defaultTitle="Educazione">
        <ul>
            <EducationItem id="bsc" uni="Politecnico di Bari" link="http://www.poliba.it/" img={polibaImg} year="2014-2017"/>
            <EducationItem id="msc" uni="Politecnico di Bari" link="http://www.poliba.it/" img={polibaImg} year="2017-2019"/>
            <EducationItem id="erasmus" uni="Universidad Politécnica de Madrid" link="https://www.upm.es/" img={upmImg} year="2019"/>
            <EducationItem id="mmus" uni="Conservatorio di Musica N. Piccinni" link="http://www.consba.it/" img={piccinniImg} year="2011-2018"/>
        </ul>
    </Section>
);

export default Education;