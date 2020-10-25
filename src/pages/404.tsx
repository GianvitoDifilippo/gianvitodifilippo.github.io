import * as React from 'react';

import Error from '../components/Error';
import App from '../components/common/App';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Error404Page = () => (
    <App className="error-page">
        <Header navThresholds={[0]} sectionSlugs={[]}/>
        <Error activeIndex={9}/>
        <Footer/>
    </App>
);

export default Error404Page;