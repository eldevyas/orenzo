import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";

const Companies = [
    "/img/assets/partners/SGSB.png",
    "/img/assets/partners/Microsoft.png",
    "/img/assets/partners/Netflix.png",
    "/img/assets/partners/Bonfire.png",
    "/img/assets/partners/Google.png",
];

export default function TrustedPartners() {
    const { t } = useTranslation("common");

    return (
        <>
            <div className="TrustedPartners" id="Partners">
                <div className="Title">
                    {t("home.content.TrustedPartners.title")}
                </div>

                <section className="Partners" dir="ltr">
                    <div className="Wrapper">
                        {Companies.map((Partner, index) => {
                            return (
                                <div key={index} className="Slide">
                                    <Image
                                        alt=""
                                        src={Partner}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            );
                        })}
                        {Companies.map((Partner, index) => {
                            return (
                                <div key={index} className="Slide">
                                    <Image
                                        alt=""
                                        src={Partner}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}
