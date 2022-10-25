import type { NextPage } from 'next'
import Head from 'next/head'
import AboutPage from '../components/pages/about/aboutPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - About us</title>
                <link rel='shortcut icon' type='image/x-icon' href='/images/icon/favicon.ico'/>
            </Head>

            <AboutPage/>
        </>
    )
}

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});



export default Page