import { useTranslation } from "next-i18next";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import LetsTalk from "../home/content/8- Let's Talk";
import Mailing from "../home/content/9- Mailing";
import Card from "./import/1- Card";
import Notice from "./import/2- Notice";
import Gallery from "./import/3- Gallery";

export default function PortfolioPage() {
    const { t } = useTranslation("common");
    const Properties = {
        Card: {
            Title: t("portfolio.content.MainCard.Title"),
            Description: t("portfolio.content.MainCard.Description"),
            Button: t("portfolio.content.MainCard.Button"),
        },
        Notice: {
            Text: t("portfolio.content.Notice"),
        },
        Gallery: {
            Design: t("portfolio.content.Gallery.Design"),
            Development: t("portfolio.content.Gallery.Development"),
            Marketing: t("portfolio.content.Gallery.Marketing"),
        },
    };

    return (
        <>
            <div className="PortfolioPage">
                <Header data-theme="dark" />
                <div className="PageContent">
                    <Card {...Properties.Card} />
                    <Notice {...Properties.Notice} />
                    <Gallery {...Properties.Gallery}/>
                    <LetsTalk />
                    <Mailing />
                </div>
                <Footer data-theme="dark" />
            </div>
        </>
    );
}
