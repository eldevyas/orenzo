import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import Card from "./imports/1- Card";
import Slogan from "../global/Slogan";
import StandOut from "./imports/3 - Stand out";
import BestServices from "./imports/4 - Best Services";
import WhyUs from "./imports/5- Why Us";
import LetsTalk from "../../home/content/8- Let's Talk";
import FAQ from "./../global/FAQ";
import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Page() {
    const { t } = useTranslation("common");

    const MainCardData: any = {
        Title: t("services.marketing.content.Card.title"),
        Description: t("services.marketing.content.Card.description"),
        Button: t("services.marketing.content.Card.button"),
        Slogan: t("services.marketing.content.Card.notice"),
    };

    let StandOutData: any = {
        Title: t("services.marketing.content.StandOut.title"),
        Description: t("services.marketing.content.StandOut.description"),
        Cards: [
            {
                Title: t("services.marketing.content.StandOut.cards.0.title"),
                Description: t(
                    "services.marketing.content.StandOut.cards.0.description"
                ),
            },
            {
                Title: t("services.marketing.content.StandOut.cards.1.title"),
                Description: t(
                    "services.marketing.content.StandOut.cards.1.description"
                ),
            },
            {
                Title: t("services.marketing.content.StandOut.cards.2.title"),
                Description: t(
                    "services.marketing.content.StandOut.cards.2.description"
                ),
            },
        ],
    };

    let BestServicesData: any = {
        Title: t("services.marketing.content.BestServices.title"),
        Description: t("services.marketing.content.BestServices.description"),
        Cards: [
            {
                Title: t(
                    "services.marketing.content.BestServices.cards.0.title"
                ),
                Description: t(
                    "services.marketing.content.BestServices.cards.0.description"
                ),
            },
            {
                Title: t(
                    "services.marketing.content.BestServices.cards.1.title"
                ),
                Description: t(
                    "services.marketing.content.BestServices.cards.1.description"
                ),
            },
            {
                Title: t(
                    "services.marketing.content.BestServices.cards.2.title"
                ),
                Description: t(
                    "services.marketing.content.BestServices.cards.2.description"
                ),
            },
            {
                Title: t(
                    "services.marketing.content.BestServices.cards.3.title"
                ),
                Description: t(
                    "services.marketing.content.BestServices.cards.3.description"
                ),
            },
        ],
    };

    let WhyUsData: any = {
        Title: t("services.marketing.content.WhyUs.title"),
        Cards: {
            TimeLessDesign: {
                title: t(
                    "services.marketing.content.WhyUs.cards.BusinessCenteredApproach.title"
                ),
                description: t(
                    "services.marketing.content.WhyUs.cards.BusinessCenteredApproach.description"
                ),
            },
            BusinessOrientedSolutions: {
                title: t(
                    "services.marketing.content.WhyUs.cards.StrongMarketingTools.title"
                ),
                description: t(
                    "services.marketing.content.WhyUs.cards.StrongMarketingTools.description"
                ),
            },
            DeepResearch: {
                title: t(
                    "services.marketing.content.WhyUs.cards.CloseCommunication.title"
                ),
                description: t(
                    "services.marketing.content.WhyUs.cards.CloseCommunication.description"
                ),
            },
            ReliablePartner: {
                title: t(
                    "services.marketing.content.WhyUs.cards.MeetingTheDeadlines.title"
                ),
                description: t(
                    "services.marketing.content.WhyUs.cards.MeetingTheDeadlines.description"
                ),
            },
            OutOfTheBoxDesign: {
                title: t(
                    "services.marketing.content.WhyUs.cards.FutureProofResults.title"
                ),
                description: t(
                    "services.marketing.content.WhyUs.cards.FutureProofResults.description"
                ),
            },
            IncreasingValue: {
                title: t(
                    "services.marketing.content.WhyUs.cards.IncreasingValue.title"
                ),
                description: t(
                    "services.marketing.content.WhyUs.cards.IncreasingValue.description"
                ),
            },
        },
    };
    let FAQData: any = {
        title: t("services.marketing.content.FAQ.title"),
        questions: [
            {
                question: t(
                    "services.marketing.content.FAQ.questions.0.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.0.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.1.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.1.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.2.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.2.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.3.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.3.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.4.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.4.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.5.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.5.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.6.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.6.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.7.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.7.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.8.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.8.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.9.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.9.answer"),
            },
            {
                question: t(
                    "services.marketing.content.FAQ.questions.10.question"
                ),
                answer: t("services.marketing.content.FAQ.questions.10.answer"),
            },
        ],
    };
    return (
        <div className="MarketingPage">
            <Header />
            <Head>
                <title>{t("services.marketing.head.title")}</title>
                <meta
                    name="description"
                    content={t("services.marketing.head.meta.description")}
                />
            </Head>

            <div className="PageContent">
                <Card {...MainCardData} />
                <Slogan text={MainCardData.Slogan} />
                <StandOut {...StandOutData} />
                <BestServices {...BestServicesData} />
                <WhyUs {...WhyUsData} />
                <LetsTalk />
                <FAQ {...FAQData} />
            </div>
            <Footer />
        </div>
    );
}
