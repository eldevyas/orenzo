import type { NextPage } from 'next'
import Head from 'next/head'
import ContactPage from '../components/pages/contact/contactPage'

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


export default Page