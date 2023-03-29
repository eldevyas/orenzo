import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import Slider from "react-slick";

export default function TrustedPartners() {
    var Companies: any[] = [];
    //
    //
    Companies[0] = "/img/assets/partners/First.png";
    Companies[1] = "/img/assets/partners/Second.png";
    Companies[2] = "/img/assets/partners/Third.png";
    Companies[3] = "/img/assets/partners/Fourth.png";
    Companies[4] = "/img/assets/partners/Fifth.png";
    Companies[5] = "/img/assets/partners/Sixth.png";
    Companies[6] = "/img/assets/partners/Seventh.png";
    Companies[7] = "/img/assets/partners/Eighth.png";
    Companies[8] = "/img/assets/partners/Ninth.png";
    Companies[9] = "/img/assets/partners/Tenth.png";
    //
    //
    const { t } = useTranslation("common");
    const Options = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        ease: "linear",
        centerMode: true,
    };
    return (
        <>
            <div className="TrustedPartners" id="Partners">
                <div className="Title">
                    {t("home.content.TrustedPartners.title")}
                </div>

                <section className="TrustedPartners__Partners" dir="ltr">
                    <div className="TrustedPartners__Partners__Wrapper">
                        <Slider
                            {...Options}
                            className="TrustedPartners__Partners__Wrapper__Slider"
                        >
                            {Companies.map((Company, Index) => {
                                return (
                                    <>
                                        <div
                                            key={Index}
                                            className="TrustedPartners__Partners__Wrapper__Slider__Slide"
                                        >
                                            <div className="TrustedPartners__Partners__Wrapper__Slider__Slide__Logo">
                                                <Image
                                                    src={Company}
                                                    alt=""
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </Slider>
                    </div>
                </section>
            </div>
        </>
    );
}
