import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Image from "next/image";
import Footer from "../../layout/footer";
import Alternatives from "./import/1- Alternatives";
import Background from "./import/0- Background";
import Mailing from "../home/content/9- Mailing";
import FAQ from "../services/global/FAQ";
import { useTranslation } from "next-i18next";
import GetInTouch from "./import/2- Get in touch";

export default function ContactPage() {
    const { t } = useTranslation("common");
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
        GetInTouch: {
            Title: "We'd love to hear from you, Let's get in touch👇🏻",
            Description: "We're here to help you bring your ideas to life! 😊",
            Form: {
                Name: {
                    Label: "Full Name",
                    Placeholder: "Enter our name",
                },
                Email: {
                    Label: "Your Email",
                    Placeholder: "Enter your email",
                },
                Interest: {
                    Label: "Interest",
                    Placeholder: "Choose an option",
                    Options: {
                        Design: "Design",
                        Development: "Development",
                        Marketing: "Marketing",
                        Other: "Other",
                    },
                },
                Budget: {
                    Label: "Project Budget",
                    Placeholder: "Select your budget",
                    Options: {
                        "-1000": "Under $1000",
                        "1000-5000": "$1000 to $5000",
                        "5000-10000": "$5000 to $10000",
                        "+10000": "+$10000",
                    },
                },
                Message: {
                    Label: "Message",
                    Placeholder: "Let us know more about your project",
                },
            },
        },
        FAQ: {
            title: t("services.design.content.FAQ.title"),
            questions: [
                {
                    question: t(
                        "services.design.content.FAQ.questions.0.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.0.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.1.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.1.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.2.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.2.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.3.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.3.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.4.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.4.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.5.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.5.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.6.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.6.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.7.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.7.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.8.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.8.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.9.question"
                    ),
                    answer: t("services.design.content.FAQ.questions.9.answer"),
                },
                {
                    question: t(
                        "services.design.content.FAQ.questions.10.question"
                    ),
                    answer: t(
                        "services.design.content.FAQ.questions.10.answer"
                    ),
                },
            ],
        },
    };
    return (
        <div className="ContactPage">
            {/* <div className="Background"></div> */}
            <Background />
            <Header data-theme="dark" />
            <div className="PageContent">
                <Alternatives {...Properties.Alternatives} />
                <GetInTouch {...Properties.GetInTouch} />
                <FAQ {...Properties.FAQ} />
                <Mailing />
            </div>
            <Footer data-theme="dark" />
        </div>
    );
}
