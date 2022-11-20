import type { NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DevelopmentPage from '../../components/pages/services/development/page';

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Services</title>
                <link rel='shortcut icon' type='image/x-icon' href='/images/icon/favicon.ico'/>
            </Head>

            <DevelopmentPage/>
        </>
    )
}


export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default Page
