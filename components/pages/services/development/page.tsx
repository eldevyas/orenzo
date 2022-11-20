import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import Title from "./imports/title";

export default function DevelopmentPage() {
    return (
        <div className ="DevelopmentPage">
            <Header data-theme="dark"/>

            <div className="PageContent">
                <Title/>
            </div>

            <Footer data-theme="dark"/>
        </div>
    )
}