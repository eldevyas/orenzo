import React, { useEffect, useState } from "react";
import WhyUs from "../services/design/imports/8- Why us";
import LetsTalk from "../home/content/8- Let's Talk";
import FAQ from "../services/global/FAQ";
import { useTranslation } from "next-i18next";
import Slogan from "../services/global/Slogan";
import Card from "./imports/1. Card";
import Team from "./imports/3. Team";
import Mailing from "../home/content/9- Mailing";
import Video from "./imports/2. Video";
import Head from "next/head";
//
//
//
const AboutPage = () => {
    const { t } = useTranslation("common");
    const [Properties, setProperties] = useState<any>({
        MainCard: {
            Title: t("about.content.MainCard.Title"),
            Description: t("about.content.MainCard.Description"),
            Button: t("about.content.MainCard.Button"),
        },
        Notice: t("about.content.Notice"),
        Team: {
            Title: t("about.content.Team.Title"),
            FirstSubTitle: t("about.content.Team.FirstSubtitle"),
            FirstDescription: t("about.content.Team.FirstDescription"),
            SecondSubTitle: t("about.content.Team.SecondSubtitle"),
            SecondDescription: t("about.content.Team.SecondDescription"),
        },
        Video: {
            Source: "/vid/Explainer.mp4",
        },
    });

    const MainCardData: any = {};
    return (
        <div className="PageContent">
            <Head>
                <title>{t("about.head.title")}</title>
                <meta
                    name="description"
                    content={t("about.head.meta.description")}
                />
            </Head>
            <Card {...Properties!.MainCard} />
            <Slogan text={Properties!.Notice} />
            {/* Video needs to be here*/}
            <Video {...Properties!.Video} />
            {/*  */}
            <Team {...Properties!.Team} />
            <LetsTalk />
            <Mailing />
        </div>
    );
};

export default AboutPage;
