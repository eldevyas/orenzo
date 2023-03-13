import React, { useEffect } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import Head from "next/head";

export {};
declare global {
    interface Window {
        [key: string]: any;
    }
}

export default function DealPage(props: any) {
    // useEffect(() => {
    //     window?.Calendly?.initInlineWidget({
    //         url: "https://calendly.com/orenzo/30min?primary_color=ef233c",
    //         parentElement: document.getElementById("calendly-inline-widget"),
    //     });
    // }, []);

    return (
        <div className="DealPage">
            <Head>
                {/* <link rel="manifest" href="/img/icon/site.webmanifest"/> */}
                {/* <!-- Calendly link widget begin --> */}
                <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                    rel="stylesheet"
                />
                <script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    type="text/javascript"
                    async
                ></script>
                {/* <!-- Calendly link widget end --> */}
            </Head>

            <div className="Title">
                <span>NO WORRIES</span>! WE STILL CAN MAKE A <span>DEAL</span>?
            </div>
            <div className="Actions">
                <CardActionArea
                    className="WhiteRipple"
                    onClick={() => {
                        if (
                            window?.Calendly != undefined &&
                            window?.Calendly != null
                        ) {
                            window?.Calendly?.initPopupWidget({
                                url: "https://calendly.com/orenzo/30min?primary_color=ef233c",
                                parentElement: document.getElementById(
                                    "calendly-inline-widget"
                                ),
                            });
                            return false;
                        }
                    }}
                >
                    <div className="Actions__Button __Calendly">
                        <div className="ButtonTitle">CALENDLY.COM/ORENZO</div>
                        <div className="ButtonDescription">
                            for people who think we are robots.
                        </div>
                    </div>
                </CardActionArea>
                <CardActionArea className="RedRipple">
                    <div className="Actions__Button __Email">
                        <div className="ButtonTitle">HELLO@ORENZO.CO</div>
                        <div className="ButtonDescription">
                            for people with small projects.
                        </div>
                    </div>
                </CardActionArea>
            </div>
        </div>
    );
}
