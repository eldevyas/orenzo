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

const ContactPage = () => {
    const { t } = useTranslation("common");
    const Properties = {
        Alternatives: {
            Title: t("contact.Alternatives.Title"),
            Description: t("contact.Alternatives.Description"),
            Cards: {
                WhatsApp: {
                    Title: t("contact.Alternatives.Cards.WhatsApp.Title"),
                    Description: t(
                        "contact.Alternatives.Cards.WhatsApp.Description"
                    ),
                    Button: t("contact.Alternatives.Cards.WhatsApp.Button"),
                },
                Calendly: {
                    Title: t("contact.Alternatives.Cards.Calendly.Title"),
                    Description: t(
                        "contact.Alternatives.Cards.Calendly.Description"
                    ),
                    Button: t("contact.Alternatives.Cards.Calendly.Button"),
                },
            },
        },
        GetInTouch: {
            Title: t("contact.GetInTouch.Title"),
            Description: t("contact.GetInTouch.Description"),
            Form: {
                Name: {
                    Label: t("contact.GetInTouch.Form.Name.Label"),
                    Placeholder: t("contact.GetInTouch.Form.Name.Placeholder"),
                },
                Email: {
                    Label: t("contact.GetInTouch.Form.Email.Label"),
                    Placeholder: t("contact.GetInTouch.Form.Email.Placeholder"),
                },
                Interest: {
                    Label: t("contact.GetInTouch.Form.Interest.Label"),
                    Placeholder: t(
                        "contact.GetInTouch.Form.Interest.Placeholder"
                    ),
                    Options: {
                        Design: t(
                            "contact.GetInTouch.Form.Interest.Options.Design"
                        ),
                        Development: t(
                            "contact.GetInTouch.Form.Interest.Options.Development"
                        ),
                        Marketing: t(
                            "contact.GetInTouch.Form.Interest.Options.Marketing"
                        ),
                        Other: t(
                            "contact.GetInTouch.Form.Interest.Options.Other"
                        ),
                    },
                },
                Budget: {
                    Label: t("contact.GetInTouch.Form.Budget.Label"),
                    Placeholder: t(
                        "contact.GetInTouch.Form.Budget.Placeholder"
                    ),
                    Options: {
                        "-1000": t(
                            "contact.GetInTouch.Form.Budget.Options.-1000"
                        ),
                        "1000-5000": t(
                            "contact.GetInTouch.Form.Budget.Options.1000-5000"
                        ),
                        "5000-10000": t(
                            "contact.GetInTouch.Form.Budget.Options.5000-10000"
                        ),
                        "+10000": t(
                            "contact.GetInTouch.Form.Budget.Options.+10000"
                        ),
                    },
                },
                Message: {
                    Label: t("contact.GetInTouch.Form.Message.Label"),
                    Placeholder: t(
                        "contact.GetInTouch.Form.Message.Placeholder"
                    ),
                },
                Button: t("contact.GetInTouch.Form.Button"),
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
};

export default ContactPage;
