import Footer from "../../layout/footer";
import Header from "../../layout/header";
import LetsTalk from "../home/content/8- Let's Talk";
import Mailing from "../home/content/9- Mailing";
import Card from "./import/1- Card";
import Notice from "./import/2- Notice";
import Gallery from "./import/3- Gallery";

export default function PortfolioPage() {
    const Properties = {
        Card: {
            Title: "Portfolio",
            Description:
                "Partner with us to elevate your business in the Digital World",
            Button: "Discover",
        },
        Notice: {
            Text: "Welcome to Orenzo, a digital agency that helps businesses thrive in the digital age. We are a team of skilled professionals with a passion for creativity and innovation. Our goal is to provide you with exceptional digital solutions that drive results and help your business grow. Let us help you take your online presence to the next level.",
        },
    };

    return (
        <>
            <div className="PortfolioPage">
                <Header data-theme="dark" />
                <div className="PageContent">
                    <Card {...Properties.Card} />
                    <Notice {...Properties.Notice} />
                    <Gallery />
                    <LetsTalk />
                    <Mailing />
                </div>
                <Footer data-theme="dark" />
            </div>
        </>
    );
}
