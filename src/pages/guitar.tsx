import * as React from 'react';

import App from '../components/common/App/App';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Page, { PageData } from '../components/common/Page';
import Guitar from '../components/Guitar';


class HomePage extends Page
{
    render(): JSX.Element
    {
        return (
            <App>
                <Header {...this.state.pageData}/>
                <main id="guitar">
                    <Guitar/>
                </main>
                <Footer/>
            </App>
        );
    }

    get pageData(): PageData
    {
        let sections = document.getElementById('guitar').getElementsByTagName('section');

        return {
            sectionSlugs: ([].map.call(sections, function(section: HTMLElement, index: number) {
                return section.id
            }) as string[]),
            navThreshold: 80
        };
    }
}


export default HomePage;