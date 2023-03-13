import React from 'react'
import Card from '../services/design/imports/1- Card';
import WhyUs from '../services/design/imports/8- Why us';
import LetsTalk from '../home/content/8- Let\'s Talk';
import FAQ from '../services/global/FAQ';
import { useTranslation } from "next-i18next";
import Slogan from '../services/global/Slogan';
import Team from './imports/Team';
const AboutPage = () => {
    const { t } = useTranslation("common");

    const MainCardData: any = {
        Title: "Digital Marketing",
        Description: "Make your business grow and solve your problem.",
        Button: "Read more",
        Slogan: t("services.marketing.content.Card.title"),
    };
    return (
        <div className='PageContent'>
            <Card {...MainCardData} />
            <Slogan text="Marketing has always been about relationships. About trust and personalised service. And about human connection. In a world that feels unpredictable and uncertain, and where you have more conversations with AI than with people, Orenzo is a shift towards human-driven marketing." />
            {/* Video needs to be here*/}

            <Team />
            <LetsTalk />
        </div>
    )
}

export default AboutPage