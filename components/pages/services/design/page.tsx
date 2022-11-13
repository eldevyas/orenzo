import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import MainCard from "./imports/1- mainCard";
import Slogan from "../global/Slogan";
import Services from "./imports/3- Services";

export default function Page() {

    let SloganText = "No business has ever succeeded with poor design solutions. To us, design is the nucleus that holds business together. We’re always willing to help you build it."

    return (
        <div className ="DesignPage">
            <Header/>

            <div className="PageContent">
                <MainCard/>
                <Slogan text={SloganText} variant="Light"/>
                <Services/>
            </div>

            <Footer/>
        </div>
    )
}