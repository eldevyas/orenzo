import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MarketingPage from "./../../components/pages/services/marketing/page";

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Services</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/images/icon/favicon.ico"
                />
            </Head>

            <MarketingPage />
        </>
    );
};

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Page;
