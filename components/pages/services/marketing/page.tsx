import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import Card from "./imports/1- Card";
import Slogan from "../global/Slogan";
import StandOut from "./imports/3 - Stand out";
import BestServices from "./imports/4 - Best Services";

export default function Page() {
    return (
        <div className="MarketingPage">
            <Header />

            <div className="PageContent">
                <Card />
                <Slogan text="Marketing has always been about relationships. About trust and personalised service. And about human connection. In a world that feels unpredictable and uncertain, and where you have more conversations with AI than with people, Orenzo is a shift towards human-driven marketing." />
                <StandOut />
                <BestServices />
            </div>

            <Footer />
        </div>
    );
}
