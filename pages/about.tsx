import React from "react";
import AboutPage from "../components/pages/about/aboutPage";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = () => {
    return (
        <div className="AboutPage">
            <Header />
            <AboutPage />
            <Footer />
        </div>
    );
};

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Page;
