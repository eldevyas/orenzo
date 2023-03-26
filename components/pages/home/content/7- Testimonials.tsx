import React from "react";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import Slider from "react-slick";

function Comment(props: any) {
    const { t } = useTranslation("common");

    return (
        <>
            <div className="Comment">
                <div className="Stars">
                    <Rating name="read-only" value={props.Stars} readOnly />
                </div>

                <div className="Text">{props.Comment}</div>

                <div className="Person">
                    <div className="Picture">
                        <Image
                            alt=""
                            src={props.Picture}
                            layout="fill"
                            objectFit="cover"
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

    const Comments: any = [
        {
            FullName: t("home.content.Testimonials.comments.C1.name"),
            Profession: t("home.content.Testimonials.comments.C1.profession"),
            Picture: "/img/assets/BusinessManUsingLaptop.png",
            Stars: 5,
            Comment: t("home.content.Testimonials.comments.C1.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C2.name"),
            Profession: t("home.content.Testimonials.comments.C2.profession"),
            Picture: "/logo/JPG/Logo - Bold Dark.jpg",
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C2.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C3.name"),
            Profession: t("home.content.Testimonials.comments.C3.profession"),
            Picture: "/logo/JPG/Logo - Bold Dark.jpg",
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C3.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C4.name"),
            Profession: t("home.content.Testimonials.comments.C4.profession"),
            Picture: "/logo/JPG/Logo - Bold Dark.jpg",
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C4.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C5.name"),
            Profession: t("home.content.Testimonials.comments.C5.profession"),
            Picture: "/logo/JPG/Logo - Bold Dark.jpg",
            Stars: 4,
            Comment: t("home.content.Testimonials.comments.C5.comment"),
        },
        {
            FullName: t("home.content.Testimonials.comments.C6.name"),
            Profession: t("home.content.Testimonials.comments.C6.profession"),
            Picture: "/logo/JPG/Logo - Bold Dark.jpg",
            Stars: 5,
            Comment: t("home.content.Testimonials.comments.C6.comment"),
        },
    ];

    const settings = {
        className: "CommentsDisplay",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
        swipeToSlide: true,
        variableWidth: true,
        speed: 500,
    };

    return (
        <>
            <div className="Testimonials">
                <div className="Title">
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

                {/* <div className="CommentsDisplay"></div> */}
                <Slider {...settings}>
                    {/* For Each */}
                    {Comments.map((element: any, index: number) => {
                        return <Comment {...element} key={index} />;
                    })}
                </Slider>

                {/* <div className="Summary">
                    <div className="Index Active"></div>
                    <div className="Index"></div>
                    <div className="Index"></div>
                </div> */}
            </div>
        </>
    );
}
