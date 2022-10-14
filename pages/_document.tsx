import React, { useEffect } from 'react';
import { Html, Head, Main, NextScript } from 'next/document'
import Router from 'next/router';




export default function Document() {
    // const [loading, setLoading] = React.useState(false);


    // Router.onRouteChangeStart = (url) => {
    //     setLoading(true);
    // };

    // Router.onRouteChangeComplete = (url) => {
    //     setLoading(false);
    // };

    // Router.onRouteChangeError = (err, url) => {
    //     setLoading(false);
    // };

    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" type="image/x-icon" href="/img/icon/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/img/icon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/img/icon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/img/icon/favicon-16x16.png"/>
                {/* <link rel="manifest" href="/img/icon/site.webmanifest"/> */}
            </Head>
            <body>
                {/* <Loading loading={loading} /> */}
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}