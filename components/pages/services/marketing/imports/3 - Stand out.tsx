import Image from "next/image";
import { SiSlideshare, SiTrustpilot } from "react-icons/si";
import { BiHappy } from "react-icons/bi";
import { Trans } from "next-i18next";

const Card = (props: any) => {
    return (
        <>
            <div className={"Card"}>
                <div className="Icon">{props.icon}</div>

                <div className="Text">
                    <div className="Title">{props.title}</div>

                    <div className="Description">{props.description}</div>
                </div>
            </div>
        </>
    );
};

export default function StandOut(props: any) {
    const Cards: {
        title: string;
        description: string;
        icon: any;
    }[] = [
        {
            title: props.Cards[0].Title,
            description: props.Cards[0].Title,
            icon: <SiSlideshare />,
        },
        {
            title: props.Cards[1].Title,
            description: props.Cards[1].Title,
            icon: <BiHappy />,
        },
        {
            title: props.Cards[2].Title,
            description: props.Cards[2].Title,
            icon: <SiTrustpilot />,
        },
    ];
    return (
        <>
            <div className="StandOut" id="StandOut">
                <div className="Title">
                    <h1>
                        <Trans
                            i18nKey="services.marketing.content.StandOut.title"
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
                    <p>{props.Description}</p>
                </div>

                <div className="Cards">
                    {Cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
