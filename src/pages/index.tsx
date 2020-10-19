import * as React from 'react';

import App from '../components/common/App/App';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Page, { PageData } from '../components/common/Page';
import { Hero, About, Skills, Experience, Education, Projects } from '../components/Home';

import { DeviceContext } from '../shared/context';


class HomePage extends Page
{
    static contextType = DeviceContext;

    render(): JSX.Element
    {
        return (
            <App>
                <Header home {...this.state.pageData}/>
                <main id="home">
                    <Hero/>
                    <About/>
                    <Skills/>
                    <Experience/>
                    <Education/>
                    <Projects/>
                </main>
                <Footer home/>
            </App>
        );
    }

    get pageData(): PageData
    {
        let sections = document.getElementById('home').getElementsByTagName('section');
        

        return {
            sectionSlugs: ([].map.call(sections, function(section: HTMLElement, index: number) {
                return section.id
            }) as string[]),
            navThreshold: this.context === 'desktop' ? 240 : 60
        };
    }
}


export default HomePage;