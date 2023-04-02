import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import Slider from "react-slick";

export default function TrustedPartners() {
    var Companies: any[] = [];
    //
    //
    Companies[0] = "/img/assets/partners/logos/First.png";
    Companies[1] = "/img/assets/partners/logos/Second.png";
    Companies[2] = "/img/assets/partners/logos/Third.png";
    Companies[3] = "/img/assets/partners/logos/Fourth.png";
    Companies[4] = "/img/assets/partners/logos/Fifth.png";
    Companies[5] = "/img/assets/partners/logos/Sixth.png";
    Companies[6] = "/img/assets/partners/logos/Seventh.png";
    Companies[7] = "/img/assets/partners/logos/Eighth.png";
    Companies[8] = "/img/assets/partners/logos/Ninth.png";
    Companies[9] = "/img/assets/partners/logos/Tenth.png";
    //
    //
    const { t } = useTranslation("common");
    const responsiveSettings = [
        {
            breakpoint: 1024, // For large desktops and laptops
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 768, // For tablets and medium-sized desktops
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 480, // For small devices such as mobiles
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
            },
        },
    ];

    const Options = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        centerMode: true,
        responsive: responsiveSettings,
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
