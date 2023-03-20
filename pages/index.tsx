import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/pages/home/homePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DefaultButton } from "../components/core/buttons";
import { BsWhatsapp } from "react-icons/bs";

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Digital Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/images/icon/favicon.ico"
                />
            </Head>

            <HomePage />
        </>
    );
};

export default Home;
