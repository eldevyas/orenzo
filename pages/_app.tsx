import "/styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import Loader from "../components/layout/loader";
import { Analytics } from "@vercel/analytics/react";
import CustomizedProgressBar from "../components/core/progress";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// next-i18next Configuration
import { appWithTranslation, i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

if (process.env.NODE_ENV !== "production") {
    if (typeof window !== "undefined") {
        const { applyClientHMR } = require("i18next-hmr/client");
        applyClientHMR(() => i18n);
    } else {
        const { applyServerHMR } = require("i18next-hmr/server");
        applyServerHMR(() => i18n);
    }
}

export const getServerSideProps = async ({ locale }: { locale: any }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"], null, [
            "en",
            "fr",
            "ar",
        ])),
    },
});

let Names: string[] = [
    "Sila",
    "Sarea",
    "AdsOut",
    "InAds",
    "Pekak",
    "Bikak",
    "Denads",
    "Minden",
    "JibTraffic",
    "Dalia",
];

function MyApp({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();
    const { i18n } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();

    useEffect(() => {
        document.dir = i18n.dir();
        document.body.dir = i18n.dir();
        router.events.on("routeChangeStart", (url) => {
            setLoading(true);
        });

        router.events.on("routeChangeComplete", (url) => {
            setTimeout(() => {
                setLoading(false);
            }, 0);
        });

        return () => {
            router.events.off("routeChangeStart", (url) => {
                setLoading(true);
            });

            router.events.off("routeChangeComplete", (url) => {
                setLoading(false);
            });
        };
    }, [i18n, router.events]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
            </Head>

            <NextNProgress
                color="#EF233C"
                startPosition={0.3}
                stopDelayMs={500}
                height={5}
                showOnShallow={true}
                options={{ showSpinner: false, easing: "ease", speed: 500 }}
                transformCSS={(css) => {
                    // css is the default css string. You can modify it and return it or return your own css.
                    return <style>{css}</style>;
                }}
            />

            <Component {...pageProps} />

            <Loader loading={loading} />

            <Analytics />
        </>
    );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
