import type { NextPage } from 'next'
import Head from 'next/head'
import ContactPage from '../components/pages/contact/contactPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Contact</title>
                <link rel='shortcut icon' type='image/x-icon' href='/images/icon/favicon.ico'/>
            </Head>

            <ContactPage/>
        </>
    )
}

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});



export default Page