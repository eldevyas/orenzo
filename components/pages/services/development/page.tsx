import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import Title from "./imports/title";
import TechnologyStack from "./imports/TechnologyStack";
import WhyUs from "../design/imports/8- Why us";
import SelectedProjects from "../global/Projects";
import Cases from "../design/imports/7 - Selected Projects";
import LetsTalk from "../../home/content/8- Let's Talk";
import FAQ from "../global/FAQ";
import { ParallaxProvider } from "react-scroll-parallax";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import { useTranslation } from "next-i18next";

export default function DevelopmentPage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

    const { t } = useTranslation();

    let TitleProperties = {
        Title: {
            Text: t("services.development.content.Title.title"),
            SubText: t("services.development.content.Title.description"),
        },
        Potential: {
            Title: t("services.development.content.Potential.title"),
            Description: t(
                "services.development.content.Potential.description"
            ),
        },
        Develop: {
            Title: t("services.development.content.Develop.title"),
            Description: t("services.development.content.Develop.description"),
        },
    };

    let TechnologyStackProperties = {
        Title: t("services.development.content.TechnologyStack.title"),
        Description: t(
            "services.development.content.TechnologyStack.description"
        ),
        Button: t("services.development.content.TechnologyStack.button"),
    };

    let CasesProperties: any = {
        title: t("services.design.content.Cases.title"),
        description: t("services.design.content.Cases.description"),
        projects: {
            netgain: t("services.design.content.Cases.projects.netgain"),
            nexus: t("services.design.content.Cases.projects.nexus"),
            slit: t("services.design.content.Cases.projects.slit"),
            bonsai: t("services.design.content.Cases.projects.bonsai"),
        },
    };

    let WhyUsData: any = {
        Title: t("services.development.content.WhyUs.title"),
        Cards: {
            BusinessCenteredApproach: {
                title: t(
                    "services.development.content.WhyUs.cards.BusinessCenteredApproach.title"
                ),
                description: t(
                    "services.development.content.WhyUs.cards.BusinessCenteredApproach.description"
                ),
            },
            StrongMarketingTools: {
                title: t(
                    "services.development.content.WhyUs.cards.StrongMarketingTools.title"
                ),
                description: t(
                    "services.development.content.WhyUs.cards.StrongMarketingTools.description"
                ),
            },
            CloseCommunication: {
                title: t(
                    "services.development.content.WhyUs.cards.CloseCommunication.title"
                ),
                description: t(
                    "services.development.content.WhyUs.cards.CloseCommunication.description"
                ),
            },
            MeetingTheDeadlines: {
                title: t(
                    "services.development.content.WhyUs.cards.MeetingTheDeadlines.title"
                ),
                description: t(
                    "services.development.content.WhyUs.cards.MeetingTheDeadlines.description"
                ),
            },
            FutureProofResults: {
                title: t(
                    "services.development.content.WhyUs.cards.FutureProofResults.title"
                ),
                description: t(
                    "services.development.content.WhyUs.cards.FutureProofResults.description"
                ),
            },
            IncreasingValue: {
                title: t(
                    "services.development.content.WhyUs.cards.IncreasingValue.title"
                ),
                description: t(
                    "services.development.content.WhyUs.cards.IncreasingValue.description"
                ),
            },
        },
    };

    let FAQData: any = {
        title: t("services.development.content.FAQ.title"),
        questions: [
            {
                question: t(
                    "services.development.content.FAQ.questions.0.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.0.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.1.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.1.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.2.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.2.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.3.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.3.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.4.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.4.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.5.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.5.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.6.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.6.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.7.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.7.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.8.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.8.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.9.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.9.answer"
                ),
            },
            {
                question: t(
                    "services.development.content.FAQ.questions.10.question"
                ),
                answer: t(
                    "services.development.content.FAQ.questions.10.answer"
                ),
            },
        ],
    };

    return (
        <div className="DevelopmentPage" id="DevelopmentPage" ref={scrollRef}>
            <Header data-theme="dark" />

            <div className="PageContent">
                <ParallaxProvider>
                    <Title {...TitleProperties} />
                    <TechnologyStack {...TechnologyStackProperties} />
                    <Cases {...CasesProperties} />
                    <WhyUs {...WhyUsData} />
                    <LetsTalk />
                    <FAQ {...FAQData} />
                    {/*
                     */}
                </ParallaxProvider>
            </div>

            <Footer data-theme="dark" />
        </div>
    );
}
