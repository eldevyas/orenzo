import Image from "next/image";
import { SiSlideshare, SiTrustpilot } from "react-icons/si";
import { BiHappy } from "react-icons/bi";

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

export default function StandOut() {
    const Cards: {
        title: string;
        description: string;
        icon: any;
    }[] = [
        {
            title: "+20k",
            description: "Active Engagement",
            icon: <SiSlideshare />,
        },
        {
            title: "+10k",
            description: "Happy Clients",
            icon: <BiHappy />,
        },
        {
            title: "+5k",
            description: "Trusted Companies",
            icon: <SiTrustpilot />,
        },
    ];
    return (
        <>
            <div className="StandOut" id="StandOut">
                <div className="Title">
                    <h1>
                        What makes us{" "}
                        <span className="SpanHighlightRed">Stand Out</span>?
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
                                icon={card.icon}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
