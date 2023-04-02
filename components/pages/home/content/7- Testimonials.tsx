import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import Slider from "react-slick";
import { i18n } from "next-i18next";

function Comment(props: any) {
    const { t } = useTranslation("common");
    const Direction: any = i18n?.dir();

    const generateRandomGradient = () => {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 50) + 50;
        const lightness = Math.floor(Math.random() * 30) + 60;
        const gradient = `linear-gradient(to bottom, hsl(${hue}, ${saturation}%, ${lightness}%), hsl(${hue}, ${saturation}%, ${
            lightness - 10
        }%), hsl(${hue}, ${saturation}%, ${lightness - 20}%)`;
        return gradient;
    };

    return (
        <>
            <div className="Comment" dir={Direction}>
                <div className="Stars">
                    <Rating name="read-only" value={props.Stars} readOnly />
                </div>

                <div className="Text">{props.Comment}</div>

                <div className="Person">
                    <div
                        className="Picture"
                        style={{
                            background: generateRandomGradient(),
                        }}
                    >
                        <Image
                            alt=""
                            src={props.Picture}
                            layout="fill"
                            objectFit="cover"
                            className="InnerImage"
                            priority
                        />
                    </div>

                    <div className="Name">
                        <div className="FullName">{props.FullName}</div>
                        <div className="Profession">{props.Profession}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Testimonials() {
    const { t } = useTranslation("common");
    const Direction: any = i18n?.dir();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const settings = {
        dots: true,
        infinite: true,
        // slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
    };
    const [Settings, setSettings] = useState(settings);

    var GlobalPicture = "/logo/PNG/Bold Dark Logo.png";

    const Comments: any = [
        {
            FullName: t("home.content.Testimonials.comments.C1.name"),
            Profession: t("home.content.Testimonials.comments.C1.profession"),
            Picture: GlobalPicture,
            Stars: 5,
            Comment: t("home.content.Testimonials.comments.C1.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C2.name"),
            Profession: t("home.content.Testimonials.comments.C2.profession"),
            Picture: GlobalPicture,
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C2.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C3.name"),
            Profession: t("home.content.Testimonials.comments.C3.profession"),
            Picture: GlobalPicture,
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C3.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C4.name"),
            Profession: t("home.content.Testimonials.comments.C4.profession"),
            Picture: GlobalPicture,
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C4.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C5.name"),
            Profession: t("home.content.Testimonials.comments.C5.profession"),
            Picture: GlobalPicture,
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C5.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C6.name"),
            Profession: t("home.content.Testimonials.comments.C6.profession"),
            Picture: GlobalPicture,
            Stars: 5,
            Comment: t("home.content.Testimonials.comments.C6.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C7.name"),
            Profession: t("home.content.Testimonials.comments.C7.profession"),
            Picture: GlobalPicture,
            Stars: 5,
            Comment: t("home.content.Testimonials.comments.C7.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C8.name"),
            Profession: t("home.content.Testimonials.comments.C8.profession"),
            Picture: GlobalPicture,
            Stars: 5,
            Comment: t("home.content.Testimonials.comments.C8.comment"),
        },
    ];

    // useEffect(() => {
    //     setSettings(settings);
    // }, [settings]);

    return (
        <>
            <div className="Testimonials">
                <div className="Title TorchLightEffect">
                    <h1>
                        <Trans
                            i18nKey="home.content.Testimonials.title"
                            components={{
                                BlueSpan: (
                                    <span className="SpanHighlightBlue" />
                                ),
                                BlueDot: (
                                    <span className="colorDot" color="blue" />
                                ),
                                RedSpan: <span className="SpanHighlightRed" />,
                                RedDot: (
                                    <span className="colorDot" color="red" />
                                ),
                                br: <br />,
                            }}
                        />
                    </h1>
                    <p>
                        <Trans
                            i18nKey="home.content.Testimonials.description"
                            components={{
                                BlueSpan: (
                                    <span className="SpanHighlightBlue" />
                                ),
                                BlueDot: (
                                    <span className="colorDot" color="blue" />
                                ),
                                RedSpan: <span className="SpanHighlightRed" />,
                                RedDot: (
                                    <span className="colorDot" color="red" />
                                ),
                                br: <br />,
                            }}
                        />
                    </p>
                </div>

                <Slider className="CommentsDisplay" {...Settings}>
                    {Comments.map((element: any, index: number) => {
                        return (
                            <div className="Slide" key={index}>
                                <Comment {...element} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </>
    );
}
