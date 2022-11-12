import type { NextPage } from 'next'
import Head from 'next/head'
import ServicesPage from '../../components/pages/services/servicesPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Services</title>
                <link rel='shortcut icon' type='image/x-icon' href='/images/icon/favicon.ico'/>
            </Head>

            <ServicesPage/>
        </>
    )
}


export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default Page
