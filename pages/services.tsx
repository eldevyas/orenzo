import type { NextPage } from 'next'
import Head from 'next/head'
import ServicesPage from '../components/pages/services/servicesPage'

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


export default Page