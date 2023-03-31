import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/pages/home/homePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DefaultButton } from "../components/core/buttons";
import { BsWhatsapp } from "react-icons/bs";
import Background from "../components/core/Background";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

const Experimental: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Experimental Page (Developers Only Area)</title>
            </Head>

            <div className="ExperimentalPage">
                <Header />
                <Background data-theme="light" />
                <Footer />
            </div>
        </>
    );
};

export default Experimental;
