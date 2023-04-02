import { Button } from "@mui/material";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";

export default function Alternatives(props: any) {
    const now = new Date();
    const hour = now.getHours();
    console.log(props);

    let Title = props.Title;
    let Description = props.Description;

    if (hour >= 6 && hour < 12) {
        // Leave "Bonjour" as is in the morning
    } else if (hour >= 18 || hour < 6) {
        // Replace "Bonjour" with "Bonsoir" in the evening
        Title = Title.replace("Bonjour", "Bonsoir");
    }

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

    const OpenWhatsApp = () => {
        // Replace the phone number with your own
        const whatsappNumbers = ["212610206030", "212688509556"];
        const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
        const randomNumber = whatsappNumbers[randomIndex];
        // Set the message based on the user's language
        let message;

        const userLang =
            (navigator as any).language || (navigator as any).userLanguage; // Get the user's language
        if (userLang.includes("fr")) {
            // If the user's language is French
            message = "Bonjour! Je voudrais prendre contact.";
        } else if (userLang.includes("en")) {
            // If the user's language is English
            message = "Hi! I'd like to get in touch.";
        } else {
            // If the user's language is anything else (including Arabic)
            message = "مرحبًا! أود الاتصال بكم.";
        }

        // Create the WhatsApp URL
        const url = `https://wa.me/${randomNumber}?text=${encodeURIComponent(
            message
        )}`;

        // Open the URL in a new window
        window.open(url, "_blank");
    };
    const OpenCalendly = () => {
        // Create the WhatsApp URL
        const url = "https://calendly.com/orenzo/30min";

        // Open the URL in a new window
        window.open(url, "_blank");
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
                {props.showCalendly ? (
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
                                dir="ltr"
                                onClick={OpenCalendly}
                            >
                                {Cards.Calendly.Button}
                            </Button>
                        </div>
                    </div>
                ) : null}
                {props.showWhatsApp ? (
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
                                dir="ltr"
                                onClick={OpenWhatsApp}
                            >
                                {Cards.WhatsApp.Button}
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
