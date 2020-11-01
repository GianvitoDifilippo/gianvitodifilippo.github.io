import * as React from 'react';

import App from '../components/common/App/App';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Page from '../components/common/Page';
import { Hero, About, Skills, Experience, Education, Projects } from '../components/Home';


class HomePage extends Page
{
    render(): JSX.Element
    {
        return (
            <App>
                <Header home sectionSlugs={this.state.sectionSlugs} navThresholds={[240, 60]}/>
                <main id={this.pageId}>
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

    get pageId(): string
    {
        return 'home';
    }
}


export default HomePage;