import Image from "next/image";
import { SiSlideshare, SiTrustpilot } from "react-icons/si";
import { BiHappy } from "react-icons/bi";

import { TbBusinessplan } from "react-icons/tb";
import { Trans } from "next-i18next";

const Card = (props: any) => {
    return (
        <>
            <div className={"Card" + " " + props.class}>
                <div className="Icon">
                    <div className="Text">01</div>
                </div>

                <div className="Text">
                    <div className="Title">{props.title}</div>

                    <div className="Description">{props.description}</div>
                </div>
            </div>
        </>
    );
};

export default function BestServices(props: any) {
    const Cards: {
        title: string;
        description: string;
        class: string;
    }[] = [
        {
            title: props.Cards[0].Title,
            description: props.Cards[0].Description,
            class: "Normal",
        },
        {
            title: props.Cards[1].Title,
            description: props.Cards[1].Description,
            class: "Special",
        },
        {
            title: props.Cards[2].Title,
            description: props.Cards[2].Description,
            class: "Normal",
        },
        {
            title: props.Cards[3].Title,
            description: props.Cards[3].Description,
            class: "Normal",
        },
    ];
    return (
        <>
            <div className="BestServices">
                <div className="Title">
                    <h1>
                        <Trans
                            i18nKey="services.marketing.content.BestServices.title"
                            components={{
                                RedSpan: <span className="SpanHighlightRed" />,
                                BlueSpan: (
                                    <span className="SpanHighlightBlue" />
                                ),
                                RedDot: (
                                    <span className="colorDot" color="red" />
                                ),
                            }}
                        />
                    </h1>
                    <p>
                        Our services help you create digital products and solve
                        your problems objectively, strategy, technology and
                        analysis. Our service also has a high appeal because it
                        has a beautiful color combination and a minimalist
                        concept.
                    </p>
                </div>

                <div className="Cards">
                    {Cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                title={card.title}
                                description={card.description}
                                class={card.class}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
