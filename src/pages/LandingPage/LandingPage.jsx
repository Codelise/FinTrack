import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import CTASection from '../../components/CTASection/CTASection';
import Footer from '../../components/Footer/Footer';

import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div className="layout-container">
                <Header />
                <main className="main-content">
                    <HeroSection />
                    <FeaturesSection />
                    <CTASection />
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default LandingPage;