import React from 'react';

import Hero from './Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

class Home extends React.PureComponent
{
    render()
    {
        return (
            <div id="home">
                <Hero scrollY={this.props.scrollY} />
                <About/>
                <Skills/>
                <Experience/>
                <Education/>
                <Projects/>
            </div>
        );
    }
}

export default Home;