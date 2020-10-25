import React from 'react';

import App from '../components/common/App';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import UnderConstruction from '../components/UnderConstruction';

const ElectronicsPage = () => (
    <App className="error-page">
        <Header navThresholds={[0]} sectionSlugs={[]}/>
        <UnderConstruction/>
        <Footer/>
    </App>
);

export default ElectronicsPage;