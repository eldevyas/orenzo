import React from "react";
import Image from "next/image";
import { DefaultButton } from "./../../../core/buttons";
import { Trans, useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation("common");

    return (
        <>
            <div className="AboutUs">
                <div className="Image">
                    <div className="ImageContainer TorchLightEffect">
                        <Image
                            src="/img/assets/BusinessManUsingLaptop.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div className="Text TorchLightEffect">
                    <div className="FadedText">About us</div>
                    <h1 className="Title">
                        <Trans
                            i18nKey="home.content.AboutUs.title"
                            components={{
                                BlueSpan: (
                                    <span className="SpanHighlightBlue" />
                                ),
                                BlueDot: (
                                    <span className="colorDot" color="blue" />
                                ),
                            }}
                        />
                    </h1>

                    <p className="Description">
                        {t("home.content.AboutUs.description")}
                    </p>
                    <div className="Actions">
                        <DefaultButton
                            bgColor="Blue"
                            elevation={0}
                            style={{ boxShadow: "none" }}
                        >
                            {t("home.content.AboutUs.button")}
                        </DefaultButton>
                    </div>
                </div>
            </div>
        </>
    );
}
