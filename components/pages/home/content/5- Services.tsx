import React from "react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Card = (props: any) => {
    const { t } = useTranslation("common");
    const Router = useRouter();

    return (
        <>
            <div
                className="Card"
                onClick={() => {
                    Router.push(props.href);
                }}
            >
                <div className="Content">
                    <div className="Title">
                        <div className="Icon">
                            <Image
                                alt=""
                                src={props.icon}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3>{props.title}</h3>
                    </div>

                    <p>{props.description}</p>
                </div>

                <div className="Button">{t("home.content.Services.more")}</div>
            </div>
        </>
    );
};

export default function Services() {
    const { t } = useTranslation("common");

    const Cards: {
        title: string;
        description: string;
        icon: string;
        href: string;
    }[] = [
        {
            title: t("home.content.Services.cards.programming.title"),
            description: t(
                "home.content.Services.cards.programming.description"
            ),
            icon: "/img/assets/3D-icons/Google Code.png",
            href: "/services/development",
        },
        {
            title: t("home.content.Services.cards.design.title"),
            description: t("home.content.Services.cards.design.description"),
            icon: "/img/assets/3D-icons/Design.png",
            href: "/services/design",
        },
        {
            title: t("home.content.Services.cards.advertising.title"),
            description: t(
                "home.content.Services.cards.advertising.description"
            ),
            icon: "/img/assets/3D-icons/Commercial.png",
            href: "/services/marketing",
        },
        {
            title: t("home.content.Services.cards.marketing.title"),
            description: t("home.content.Services.cards.marketing.description"),
            icon: "/img/assets/3D-icons/Goal.png",
            href: "/services/marketing",
        },
        {
            title: t("home.content.Services.cards.business.title"),
            description: t("home.content.Services.cards.business.description"),
            icon: "/img/assets/3D-icons/Business.png",
            href: "/services/design",
        },
        {
            title: t("home.content.Services.cards.visual.title"),
            description: t("home.content.Services.cards.visual.description"),
            icon: "/img/assets/3D-icons/Xlarge Icons.png",
            href: "/services/design",
        },
    ];

    return (
        <>
            <div className="Services">
                <div className="Title">
                    <h1>
                        <Trans
                            i18nKey="home.content.Services.title"
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
                            }}
                        />
                    </h1>

                    <p>{t("home.content.Services.description")}</p>
                </div>

                <div className="Cards">
                    {Cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                                href={card.href}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
