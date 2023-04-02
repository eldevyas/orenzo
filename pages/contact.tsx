import type { NextPage } from "next";
import Head from "next/head";
import ContactPage from "../components/pages/contact/contactPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page: NextPage = ({ showWhatsApp, showCalendly, showForm }: any) => {
    return (
        <>
            <Head>
                <title>Orenzo - Contact</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/images/icon/favicon.ico"
                />
            </Head>

            <ContactPage {...{ showWhatsApp, showCalendly, showForm }} />
        </>
    );
};

export const getServerSideProps = async ({ query, locale }: any) => {
    const showWhatsApp = query.WhatsApp ? query.WhatsApp == "1" : false;
    const showCalendly = query.Calendly ? query.Calendly == "1" : true;
    const showForm = query.Form ? query.Form == "1" : true;
    console.log({ showWhatsApp, showCalendly, showForm });

    const commonTranslations = await serverSideTranslations(locale, ["common"]);

    return {
        props: {
            showWhatsApp,
            showCalendly,
            showForm,
            ...commonTranslations,
        },
    };
};

export default Page;
