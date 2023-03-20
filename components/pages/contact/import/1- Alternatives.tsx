import { Button } from "@mui/material";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";

export default function Alternatives(props: any) {
    let Title = props.Title;
    let Description = props.Description;

    let Cards = {
        WhatsApp: {
            Title: props.Cards.WhatsApp.Title,
            Description: props.Cards.WhatsApp.Description,
            Button: props.Cards.WhatsApp.Button,
        },
        Calendly: {
            Title: props.Cards.Calendly.Title,
            Description: props.Cards.Calendly.Description,
            Button: props.Cards.Calendly.Button,
        },
    };

    const CardsRef = useRef<HTMLDivElement>(null);
    const CardOne = useRef<HTMLDivElement>(null);
    const CardTwo = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: any) => {
        if (CardsRef != null) {
            const Cards: any = CardsRef.current!.getElementsByClassName(
                "PageContent__Alternatives__Cards__Card"
            );

            const CardsRect = CardsRef.current!.getBoundingClientRect();

            for (const Card of Cards) {
                const rect = Card.getBoundingClientRect();
                const x = e.clientX - rect.x;
                const y = e.clientY - rect.y;

                Card.style.setProperty("--mouse-x", `${x}px`);
                Card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    };

    return (
        <div className="PageContent__Alternatives">
            <div className="PageContent__Alternatives__Heading TorchLightEffect">
                <div className="PageContent__Alternatives__Heading__Title">
                    {Title}
                </div>
                <div className="PageContent__Alternatives__Heading__Description">
                    {Description}
                </div>
            </div>
            <div
                className="PageContent__Alternatives__Cards"
                ref={CardsRef}
                onMouseMove={handleMouseMove}
            >
                <div
                    className="PageContent__Alternatives__Cards__Card"
                    ref={CardOne}
                >
                    <div className="PageContent__Alternatives__Cards__Card__Content">
                        <div className="PageContent__Alternatives__Cards__Card__Content__Text">
                            <div className="PageContent__Alternatives__Cards__Card__Content__Text__Title">
                                {Cards.WhatsApp.Title}
                            </div>
                            <div className="PageContent__Alternatives__Cards__Card__Content__Text__Description">
                                {Cards.WhatsApp.Description}
                            </div>
                        </div>
                        <Button
                            variant="text"
                            className="PageContent__Alternatives__Cards__Card__Content__ActionButton"
                            startIcon={<BsWhatsapp />}
                        >
                            {Cards.WhatsApp.Button}
                        </Button>
                    </div>
                </div>
                <div
                    className="PageContent__Alternatives__Cards__Card"
                    ref={CardTwo}
                >
                    <div className="PageContent__Alternatives__Cards__Card__Content">
                        <div className="PageContent__Alternatives__Cards__Card__Content__Text">
                            <div className="PageContent__Alternatives__Cards__Card__Content__Text__Title">
                                {Cards.Calendly.Title}
                            </div>
                            <div className="PageContent__Alternatives__Cards__Card__Content__Text__Description">
                                {Cards.Calendly.Description}
                            </div>
                        </div>
                        <Button
                            variant="text"
                            className="PageContent__Alternatives__Cards__Card__Content__ActionButton"
                            startIcon={<IoCalendarSharp />}
                        >
                            {Cards.Calendly.Button}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
