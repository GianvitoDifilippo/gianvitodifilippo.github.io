import * as React from 'react';

import Section from '../Section';
import Translate from '../../../common/Translate';

import polibaImg from '../../../../assets/img/edu/poliba.png';
import upmImg from '../../../../assets/img/edu/upm.png';
import piccinniImg from '../../../../assets/img/edu/piccinni.png';

import './education_desktop.scss';
import './education_tablet.scss';
import './education_phone.scss';


type EducationItemPropsType = {
    id: string,
    link: string,
    img: string,
    year: string,
    uni: string
};


const EducationItem = (props: Readonly<EducationItemPropsType>): JSX.Element => (
    <li className={`box ${props.id}`}>
        <a className="noselect" href={props.link} target="_blank"><img src={props.img} alt="" /></a>
        <span className="edu-descr">
            <h1 className="box-heading"><Translate selector={`education:${props.id}:h1`}/></h1>
            <h2><a href={props.link} target="_blank">{props.uni}</a></h2>
            <h3>{props.year}</h3>
            <p>
                <span className="bold"><Translate selector={`education:${props.id}:thesis:key`}/></span>
                <Translate selector={`education:${props.id}:thesis:value`}/>
            </p>
            <p>
                <span className="bold"><Translate selector={`education:${props.id}:descr:key`}/></span>
                <Translate selector={`education:${props.id}:descr:value`}/>
            </p>
            <p>
                <span className="bold"><Translate selector={`education:${props.id}:score:key`}/></span>
                <Translate selector={`education:${props.id}:score:value`}/>
            </p>
        </span>
    </li>
);

const Education = (props: Readonly<{}>): JSX.Element => (
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