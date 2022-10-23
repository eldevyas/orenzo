import type { NextPage } from 'next'
import Head from 'next/head'
import PortfolioPage from '../components/pages/portfolio/portfolioPage'

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Orenzo - Portfolio</title>
                <link rel='shortcut icon' type='image/x-icon' href='/images/icon/favicon.ico'/>
            </Head>

            <PortfolioPage/>
        </>
    )
}


export default Page