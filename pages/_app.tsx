import '/styles/dist/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from "nextjs-progressbar";

import { useRouter } from "next/router";
import { appWithTranslation } from 'next-i18next';






function MyApp({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
            </Head>
            {
                //
                // Can be placed anywhere in the return statement
                //
            }
            <NextNProgress
              color="#EF233C"
              startPosition={0.3}
              stopDelayMs={500}
              height={5}
              showOnShallow={true}
              options={{ showSpinner: false, easing: 'ease', speed: 500 }}
            />
            {
                //
                //
                //
            }
            <Component {...pageProps} />
        </>
    )
}

export default appWithTranslation(MyApp)
