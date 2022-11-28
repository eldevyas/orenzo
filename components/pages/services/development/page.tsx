import Header from "../../../layout/header";
import Footer from "../../../layout/footer";
import Title from "./imports/title";
import TechnologyStack from "./imports/TechnologyStack";
import WhyUs from "../design/imports/8- Why us";
import SelectedProjects from "../global/Projects";
import Cases from "../design/imports/7 - Selected Projects";
import LetsTalk from "../../home/content/8- Let's Talk";
import FAQ from "../global/FAQ";
import { ParallaxProvider } from "react-scroll-parallax";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";

export default function DevelopmentPage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

    return (
        <div className="DevelopmentPage" id="DevelopmentPage" ref={scrollRef}>
            <Header data-theme="dark" />

            <div className="PageContent">
                <ParallaxProvider>
                    <Title />
                    <TechnologyStack />
                    <Cases />
                    <WhyUs />
                    <LetsTalk />
                    <FAQ />
                </ParallaxProvider>
            </div>

            <Footer data-theme="dark" />
        </div>
    );
}
