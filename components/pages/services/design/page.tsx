import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import MainCard from "./imports/1- Card";
import Slogan from "../global/Slogan";
import Services from "./imports/3- Services";
import Banner from "./imports/4- Banner";
import Secret from "./imports/5- Secret";
import Cases from "./imports/7 - Selected Projects";
import Process from "./imports/6 - Process";
import WhyUs from "./imports/8- Why us";
import LetsTalk from "../../home/content/8- Let's Talk";
import FAQ from "../global/FAQ";
import { Trans, useTranslation } from "react-i18next";

export default function Page() {
    const { t } = useTranslation("common");

    const MainCardData: any = {
        Title: t("services.design.content.Card.title"),
        Description: t("services.design.content.Card.des"),
        Button: t("services.design.content.Card.button"),
        Slogan: t("services.design.content.Card.title"),
    };

    const ServicesData: any = {
        Cards: {
            branding: {
                title: t("services.design.content.Services.branding.title"),
                description: t(
                    "services.design.content.Services.branding.description"
                ),
            },
            logoDesign: {
                title: t("services.design.content.Services.logoDesign.title"),
                description: t(
                    "services.design.content.Services.logoDesign.description"
                ),
            },
            uiUx: {
                title: t("services.design.content.Services.uiUx.title"),
                description: t(
                    "services.design.content.Services.uiUx.description"
                ),
            },
            socialMedia: {
                title: t("services.design.content.Services.socialMedia.title"),
                description: t(
                    "services.design.content.Services.socialMedia.description"
                ),
            },
            visualProduction: {
                title: t(
                    "services.design.content.Services.visualProduction.title"
                ),
                description: t(
                    "services.design.content.Services.visualProduction.description"
                ),
            },
            packaging: {
                title: t("services.design.content.Services.packaging.title"),
                description: t(
                    "services.design.content.Services.packaging.description"
                ),
            },
        },
        Slogan: t("services.design.content.Notice"),
    };

    let BannerData: any = [
        {
            first: t("services.design.content.Banner.0.first"),
            second: t("services.design.content.Banner.0.second"),
        },
        {
            first: t("services.design.content.Banner.1.first"),
            second: t("services.design.content.Banner.1.second"),
        },
        {
            first: t("services.design.content.Banner.2.first"),
            second: t("services.design.content.Banner.2.second"),
        },
        {
            first: t("services.design.content.Banner.3.first"),
            second: t("services.design.content.Banner.3.second"),
        },
    ];

    let SecretData: any = {
        Title: t("services.design.content.Secret.title"),
        Cards: {
            TimeLessDesign: {
                title: t(
                    "services.design.content.Secret.cards.TimeLessDesign.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.TimeLessDesign.description"
                ),
            },
            BusinessOrientedSolutions: {
                title: t(
                    "services.design.content.Secret.cards.BusinessOrientedSolutions.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.BusinessOrientedSolutions.description"
                ),
            },
            DeepResearch: {
                title: t(
                    "services.design.content.Secret.cards.DeepResearch.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.DeepResearch.description"
                ),
            },
            ReliablePartner: {
                title: t(
                    "services.design.content.Secret.cards.ReliablePartner.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.ReliablePartner.description"
                ),
            },
            OutOfTheBoxDesign: {
                title: t(
                    "services.design.content.Secret.cards.OutOfTheBoxDesign.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.OutOfTheBoxDesign.description"
                ),
            },
            IncreasingValue: {
                title: t(
                    "services.design.content.Secret.cards.IncreasingValue.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.IncreasingValue.description"
                ),
            },
        },
    };

    const ProcessData: any = {
        Title: t("services.design.content.WorkingProcess.title"),
        Steps: [
            {
                title: t(
                    "services.design.content.WorkingProcess.process.0.title"
                ),
                description: t(
                    "services.design.content.WorkingProcess.process.0.description"
                ),
            },
            {
                title: t(
                    "services.design.content.WorkingProcess.process.1.title"
                ),
                description: t(
                    "services.design.content.WorkingProcess.process.1.description"
                ),
            },
            {
                title: t(
                    "services.design.content.WorkingProcess.process.2.title"
                ),
                description: t(
                    "services.design.content.WorkingProcess.process.2.description"
                ),
            },
            {
                title: t(
                    "services.design.content.WorkingProcess.process.3.title"
                ),
                description: t(
                    "services.design.content.WorkingProcess.process.3.description"
                ),
            },
            {
                title: t(
                    "services.design.content.WorkingProcess.process.4.title"
                ),
                description: t(
                    "services.design.content.WorkingProcess.process.4.description"
                ),
            },
        ],
    };
    let CasesData: any = {
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
        Title: t("services.design.content.Secret.title"),
        Cards: {
            TimeLessDesign: {
                title: t(
                    "services.design.content.Secret.cards.TimeLessDesign.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.TimeLessDesign.description"
                ),
            },
            BusinessOrientedSolutions: {
                title: t(
                    "services.design.content.Secret.cards.BusinessOrientedSolutions.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.BusinessOrientedSolutions.description"
                ),
            },
            DeepResearch: {
                title: t(
                    "services.design.content.Secret.cards.DeepResearch.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.DeepResearch.description"
                ),
            },
            ReliablePartner: {
                title: t(
                    "services.design.content.Secret.cards.ReliablePartner.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.ReliablePartner.description"
                ),
            },
            OutOfTheBoxDesign: {
                title: t(
                    "services.design.content.Secret.cards.OutOfTheBoxDesign.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.OutOfTheBoxDesign.description"
                ),
            },
            IncreasingValue: {
                title: t(
                    "services.design.content.Secret.cards.IncreasingValue.title"
                ),
                description: t(
                    "services.design.content.Secret.cards.IncreasingValue.description"
                ),
            },
        },
    };
    let FAQData: any = {
        title: t("services.design.content.FAQ.title"),
        questions: [
            {
                question: t("services.design.content.FAQ.questions.0.question"),
                answer: t("services.design.content.FAQ.questions.0.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.1.question"),
                answer: t("services.design.content.FAQ.questions.1.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.2.question"),
                answer: t("services.design.content.FAQ.questions.2.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.3.question"),
                answer: t("services.design.content.FAQ.questions.3.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.4.question"),
                answer: t("services.design.content.FAQ.questions.4.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.5.question"),
                answer: t("services.design.content.FAQ.questions.5.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.6.question"),
                answer: t("services.design.content.FAQ.questions.6.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.7.question"),
                answer: t("services.design.content.FAQ.questions.7.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.8.question"),
                answer: t("services.design.content.FAQ.questions.8.answer"),
            },
            {
                question: t("services.design.content.FAQ.questions.9.question"),
                answer: t("services.design.content.FAQ.questions.9.answer"),
            },
            {
                question: t(
                    "services.design.content.FAQ.questions.10.question"
                ),
                answer: t("services.design.content.FAQ.questions.10.answer"),
            },
        ],
    };

    return (
        <div className="DesignPage">
            <Header />

            <div className="PageContent">
                <MainCard {...MainCardData} />
                <Slogan text={MainCardData.Slogan} variant="Light" />
                <Services {...ServicesData} />
                <Banner Data={BannerData} />
                <Slogan text={ServicesData.Slogan} variant="Light" />
                <Secret {...SecretData} />
                <Process {...ProcessData} />
                <Cases {...CasesData} />
                <WhyUs {...WhyUsData} />
                <LetsTalk />
                <FAQ {...FAQData} />
            </div>

            <Footer />
        </div>
    );
}
