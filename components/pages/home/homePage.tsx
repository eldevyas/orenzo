import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Image from "next/image";
import dynamic from "next/dynamic";
//
//
// Code Splitting Technique
const LandingSection = dynamic(() => import("./content/1- LandingSection"));
const TrustedPartners = dynamic(() => import("./content/2- Partners"));
const AboutUs = dynamic(() => import("./content/3- About us"));
const BusinessPerformance = dynamic(
    () => import("./content/4- Business Perfomance")
);
const Services = dynamic(() => import("./content/5- Services"));
const Testimonials = dynamic(() => import("./content/7- Testimonials"));
const LetsTalk = dynamic(() => import("./content/8- Let's Talk"));
const Mailing = dynamic(() => import("./content/9- Mailing"));
//
//
import Footer from "../../layout/footer";
import Scroll_Indicator from "../../core/Scroll-Indicator";
import Background from "../../core/Background";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export default function HomePage() {
    const { t } = useTranslation("common");
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
            <Head>
                <title>{t("home.head.title")}</title>
                <meta
                    name="description"
                    content={t("home.head.meta.description")}
                />
            </Head>
            <Background data-theme="light" no-interaction />
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
