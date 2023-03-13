import { Html, Head, Main, NextScript } from "next/document";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps: (locale: any) => any = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/img/icon/favicon.ico"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/icon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/img/icon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/img/icon/favicon-16x16.png"
                />{" "}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
