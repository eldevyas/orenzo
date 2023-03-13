import Footer from "../../layout/footer";
import Header from "../../layout/header";

export default function PortfolioPage() {
    const CardProperties: any = {
        title: "Portfolio",
        description: "",
        button: "",
    };

    return (
        <>
            <div className="PortfolioPage">
                <Header data-theme="dark" />
                <Footer data-theme="dark" />
            </div>
        </>
    );
}
