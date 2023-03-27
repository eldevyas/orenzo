import React from "react";
import Image from "next/image";

// Icons for Cards
import FastTrack from "/public/img/assets/icons/Fast Track.png";
import Goal from "/public/img/assets/icons/Goal.png";
import MoneyBag from "/public/img/assets/icons/Money Bag.png";
import Users from "/public/img/assets/icons/Users.png";
import { Trans, useTranslation } from "react-i18next";

export {};
declare global {
    type StaticImageData = {
        src: string;
        height: number;
        width: number;
        blurDataURL?: string;
    };
}

const Card = (props: any) => {
    return (
        <>
            <div className={"Card " + props.class}>
                <div className="Icon">
                    <Image
                        alt=""
                        src={props.icon}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>

                <div className="Text">
                    <div className="Title">{props.title}</div>

                    <div className="Description">{props.description}</div>
                </div>
            </div>
        </>
    );
};

export default function BusinessPerformance() {
    const { t } = useTranslation("common");

    const Cards: {
        title: string;
        description: string;
        icon: StaticImageData;
        class: string;
    }[] = [
        {
            title: t("home.content.BusinessPerformance.cards.reach.title"),
            description: t(
                "home.content.BusinessPerformance.cards.reach.description"
            ),
            icon: Users,
            class: "Normal",
        },
        {
            title: t("home.content.BusinessPerformance.cards.cost.title"),
            description: t(
                "home.content.BusinessPerformance.cards.cost.description"
            ),
            icon: MoneyBag,
            class: "Special",
        },
        {
            title: t("home.content.BusinessPerformance.cards.services.title"),
            description: t(
                "home.content.BusinessPerformance.cards.services.description"
            ),
            icon: Goal,
            class: "Normal",
        },
        {
            title: t(
                "home.content.BusinessPerformance.cards.professionals.title"
            ),
            description: t(
                "home.content.BusinessPerformance.cards.professionals.description"
            ),
            icon: FastTrack,
            class: "Normal",
        },
    ];

    return (
        <div className="BusinessPerformance">
            <div className="Title">
                <h1>
                    <Trans
                        i18nKey="home.content.BusinessPerformance.title"
                        components={{
                            BlueSpan: <span className="SpanHighlightBlue" />,
                            BlueDot: <span className="colorDot" color="blue" />,
                            RedSpan: <span className="SpanHighlightRed" />,
                            RedDot: <span className="colorDot" color="red" />,
                        }}
                    />
                </h1>
                <p>{t("home.content.BusinessPerformance.description")}</p>
            </div>

            <div className="Cards">
                {Cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            class={card.class}
                        />
                    );
                })}
            </div>
        </div>
    );
}
