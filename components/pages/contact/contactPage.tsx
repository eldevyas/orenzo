import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Image from "next/image";
import Footer from "../../layout/footer";
import Alternatives from "./import/1- Alternatives";
import Background from "./import/0- Background";

export default function ContactPage() {
    const Properties = {
        Alternatives: {
            Title: "Hey👋🏻, can't wait to chat about your project? ",
            Description:
                "No worries! You can hit us up on WhatsApp 📱 or schedule a meeting on Calendly 🗓️ with just a few clicks. It's that easy! But if you'd rather fill out the form, that's cool too. We're here to help you bring your ideas to life! 😊",
            Cards: {
                WhatsApp: {
                    Title: "Need quick assistance?",
                    Description:
                        "We're just a message away! Click the button below to get in touch with our team via WhatsApp.",
                    Button: "Message Us Now",
                },
                Calendly: {
                    Title: "Schedule a Meeting",
                    Description:
                        "Want to discuss your project in detail? Click the button below to schedule a meeting with our team on Calendly.",
                    Button: "Schedule Now",
                },
            },
        },
    };
    return (
        <div className="ContactPage">
            {/* <div className="Background"></div> */}
            <Background />
            <Header data-theme="dark" />
            <div className="PageContent">
                <Alternatives {...Properties.Alternatives} />
            </div>
            <Footer data-theme="dark" />
        </div>
    );
}
