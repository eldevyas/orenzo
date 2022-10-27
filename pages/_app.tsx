import '/styles/dist/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from "nextjs-progressbar";
import { Analytics } from '@vercel/analytics/react';


import { useRouter } from "next/router";

import { useEffect } from 'react'

// next-i18next Configuration
import { appWithTranslation, i18n, useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from '../next-i18next.config';

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined') {
    const { applyClientHMR } = require('i18next-hmr/client');
    applyClientHMR(() => i18n);
  } else {
    const { applyServerHMR } = require('i18next-hmr/server');
    applyServerHMR(() => i18n);
  }
}

let Names: string[] = [
    "Sila", "Sarea", "AdsOut", "InAds", "Pekak", "Bikak", "Denads", "Minden", "JibTraffic", "Dalia"
]

function MyApp({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();
    const { i18n } = useTranslation();
    
    useEffect(() => {
        document.dir = i18n.dir(); 
        document.body.dir = i18n.dir();
    }, [i18n])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
            </Head>
            
            <NextNProgress
              color="#EF233C"
              startPosition={0.3}
              stopDelayMs={500}
              height={5}
              showOnShallow={true}
              options={{ showSpinner: false, easing: 'ease', speed: 500 }}
            />

            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig);
