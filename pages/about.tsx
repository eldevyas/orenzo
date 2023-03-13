import React from 'react'
import AboutPage from '../components/pages/about/aboutPage';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const About = () => {
    return (
        <div className="AboutPage">
            <Header />
            <AboutPage />
            <Footer />
        </div>
    )
}

export default About