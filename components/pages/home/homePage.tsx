import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Image from "next/image";
import LandingSection from "./content/1- LandingSection";
import TrustedPartners from "./content/2- Partners";
import AboutUs from "./content/3- About us";
import BusinessPerformance from "./content/4- Business Perfomance";
import Services from "./content/5- Services";
import Testimonials from "./content/7- Testimonials";
import LetsTalk from "./content/8- Let's Talk";
import Mailing from "./content/9- Mailing";
import Footer from "../../layout/footer";
import Scroll_Indicator from "../../core/Scroll-Indicator";

export default function HomePage() {
    const Section_1 = React.useRef<HTMLDivElement>(null);
    const Section_2 = React.useRef<HTMLDivElement>(null);
    const Section_3 = React.useRef<HTMLDivElement>(null);
    const Section_4 = React.useRef<HTMLDivElement>(null);
    const Section_5 = React.useRef<HTMLDivElement>(null);
    const Section_6 = React.useRef<HTMLDivElement>(null);
    const Section_7 = React.useRef<HTMLDivElement>(null);
    const Section_8 = React.useRef<HTMLDivElement>(null);

    return (
        <div className="HomePage">
            <div className="Background"></div>
            <div className="Section Section__1" ref={Section_1}>
                <Header />
                <LandingSection />
            </div>
            <div className="Section Section__2" ref={Section_2}>
                <TrustedPartners />
            </div>
            <div className="Section Section__3" ref={Section_3}>
                <AboutUs />
            </div>
            <div className="Section Section__4" ref={Section_4}>
                <BusinessPerformance />
            </div>
            <div className="Section Section__5" ref={Section_5}>
                <Services />
            </div>
            <div className="Section Section__6" ref={Section_6}>
                <Testimonials />
            </div>
            <div className="Section Section__7" ref={Section_7}>
                <LetsTalk />
            </div>
            <div className="Section Section__8" ref={Section_8}>
                <Mailing />
            </div>

            <Footer />
            <Scroll_Indicator
                sections={[
                    Section_1,
                    Section_2,
                    Section_3,
                    Section_4,
                    Section_5,
                    Section_6,
                    Section_7,
                    Section_8,
                ]}
            />
        </div>
    );
}
