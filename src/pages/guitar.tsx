import * as React from 'react';

import App from '../components/common/App/App';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Page from '../components/common/Page';
import Guitar from '../components/Guitar';


class HomePage extends Page
{
    render(): JSX.Element
    {
        return (
            <App>
                <Header sectionSlugs={this.state.sectionSlugs} navThresholds={[80]}/>
                <main id={this.pageId}>
                    <Guitar/>
                </main>
                <Footer/>
            </App>
        );
    }

    get pageId(): string
    {
        return 'guitar';
    }
}


export default HomePage;