import type { NextPage } from "next";
import Head from "next/head";
import PortfolioPage from "../components/pages/portfolio/portfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Portfolio</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/images/icon/favicon.ico"
                />
            </Head>

            <PortfolioPage />
        </>
    );
};

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Page;
