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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '166175563027392');
              fbq('track', 'PageView');
            `,
                    }}
                />
                <noscript>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt=""
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=166175563027392&ev=PageView&noscript=1"
                    />
                </noscript>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
