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
        Title: t("services.design.content.first.title"),
        Description: t("services.design.content.first.des"),
        Button: t("services.design.content.first.button"),
        Slogan: t("services.design.content.first.title"),
    };

    const ServicesData: any = {
        Cards: {
            branding: {
                title: t("services.design.content.second.branding.title"),
                description: t(
                    "services.design.content.second.branding.description"
                ),
            },
            logoDesign: {
                title: t("services.design.content.second.logoDesign.title"),
                description: t(
                    "services.design.content.second.logoDesign.description"
                ),
            },
            uiUx: {
                title: t("services.design.content.second.uiUx.title"),
                description: t(
                    "services.design.content.second.uiUx.description"
                ),
            },
            socialMedia: {
                title: t("services.design.content.second.socialMedia.title"),
                description: t(
                    "services.design.content.second.socialMedia.description"
                ),
            },
            visualProduction: {
                title: t(
                    "services.design.content.second.visualProduction.title"
                ),
                description: t(
                    "services.design.content.second.visualProduction.description"
                ),
            },
            packaging: {
                title: t("services.design.content.second.packaging.title"),
                description: t(
                    "services.design.content.second.packaging.description"
                ),
            },
        },
        Slogan: t("services.design.content.fourth"),
    };

    let BannerData: any = [
        {
            first: t("services.design.content.third.0.first"),
            second: t("services.design.content.third.0.second"),
        },
        {
            first: t("services.design.content.third.1.first"),
            second: t("services.design.content.third.1.second"),
        },
        {
            first: t("services.design.content.third.2.first"),
            second: t("services.design.content.third.2.second"),
        },
        {
            first: t("services.design.content.third.3.first"),
            second: t("services.design.content.third.3.second"),
        },
    ];

    let SecretData: any = {
        Title: "What's our secret?",
        Cards: {
            TimeLessDesign: {
                title: t("services.design.content.fifth.TimeLessDesign.title"),
                description: t(
                    "services.design.content.fifth.TimeLessDesign.description"
                ),
            },
            BusinessOrientedSolutions: {
                title: t(
                    "services.design.content.fifth.BusinessOrientedSolutions.title"
                ),
                description: t(
                    "services.design.content.fifth.BusinessOrientedSolutions.description"
                ),
            },
            DeepResearch: {
                title: t("services.design.content.fifth.DeepResearch.title"),
                description: t(
                    "services.design.content.fifth.DeepResearch.description"
                ),
            },
            ReliablePartner: {
                title: t("services.design.content.fifth.ReliablePartner.title"),
                description: t(
                    "services.design.content.fifth.ReliablePartner.description"
                ),
            },
            OutOfTheBoxDesign: {
                title: t(
                    "services.design.content.fifth.OutOfTheBoxDesign.title"
                ),
                description: t(
                    "services.design.content.fifth.OutOfTheBoxDesign.description"
                ),
            },
            IncreasingValue: {
                title: t("services.design.content.fifth.IncreasingValue.title"),
                description: t(
                    "services.design.content.fifth.IncreasingValue.description"
                ),
            },
        },
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
                <Process />
                <Cases />
                <WhyUs />
                <LetsTalk />
                <FAQ />
            </div>

            <Footer />
        </div>
    );
}
