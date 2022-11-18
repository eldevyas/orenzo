import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import MainCard from "./imports/1- mainCard";
import Slogan from "../global/Slogan";
import Services from "./imports/3- Services";
import Banner from "./imports/4- Banner";
import Secret from "./imports/5- Secret";
import Cases from "./imports/7 - Selected Projects";
import Process from "./imports/6 - Process";
import WhyUs from "./imports/8- Why us";

export default function Page() {

    let SloganText = "No business has ever succeeded with poor design solutions. To us, design is the nucleus that holds business together. We’re always willing to help you build it."

    return (
        <div className ="DesignPage">
            <Header/>

            <div className="PageContent">
                <MainCard/>
                <Slogan text={SloganText} variant="Light"/>
                <Services/>
                <Banner/>
                <Slogan text={SloganText} variant="Light"/>
                <Secret/>
                <Process/>
                <Cases/>
                <WhyUs/>
            </div>

            <Footer/>
        </div>
    )
}