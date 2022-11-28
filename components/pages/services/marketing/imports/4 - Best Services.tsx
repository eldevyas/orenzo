import Image from "next/image";
import { SiSlideshare, SiTrustpilot } from "react-icons/si";
import { BiHappy } from "react-icons/bi";

import { TbBusinessplan } from "react-icons/tb";

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

export default function BestServices() {
    const Cards: {
        title: string;
        description: string;
        class: string;
    }[] = [
        {
            title: "Consultant Business Strategy",
            description:
                "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            class: "Normal",
        },
        {
            title: "Google Ads Management",
            description:
                "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            class: "Special",
        },
        {
            title: "Research & Discovery",
            description:
                "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            class: "Normal",
        },
        {
            title: "Social Media Marketing",
            description:
                "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            class: "Normal",
        },
    ];
    return (
        <>
            <div className="BestServices">
                <div className="Title">
                    <h1>
                        We just offer the{" "}
                        <span className="SpanHighlightBlue">Best Services</span>
                        .
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
