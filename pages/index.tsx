import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/pages/home/homePage'


const Home: NextPage = () => {
  return (
        <div className="Container">
            <Head>
                <title>Orenzo - Digital Agency</title>
                <link rel='shortcut icon' type='image/x-icon' href='/images/icon/favicon.ico'/>
            </Head>

            <HomePage/>
        </div>
  )
}

export default Home
