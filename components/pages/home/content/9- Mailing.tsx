import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Mailing() {
    const { t } = useTranslation("common");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubscribe = () => {
        const emailInput: any = document.querySelector('input[name="email"]');
        const email = emailInput.value;
        saveToGoogleSheets(email); // call a function to save the email to Google Sheets
        setShowAlert(true);
    };

    const saveToGoogleSheets = (email: any) => {
        // call a Google Sheets API to save the email
        // implementation depends on the API you are using
        console.log(`Saving email ${email} to Google Sheets`);
    };

    return (
        <>
            <div className="Mailing">
                <div className="Title">
                    <h1>{t("home.content.Mailing.title")}</h1>
                    <p>{t("home.content.Mailing.description")}</p>
                </div>

                <div className="InputField">
                    <input
                        type="email"
                        name="email"
                        placeholder={t(
                            "home.content.Mailing.input.placeholder"
                        )}
                    />
                    <Button
                        variant="contained"
                        className="Button"
                        onClick={() => {
                            setShowAlert(true);
                        }}
                    >
                        {t("home.content.Mailing.input.button")}
                    </Button>
                </div>

                <div className="PS">{t("home.content.Mailing.label")}</div>

                {showAlert && (
                    <div className="Alert">
                        <div className="Heading">
                            <p
                                className="CloseIcon"
                                onClick={() => {
                                    setShowAlert(false);
                                }}
                            >
                                X
                            </p>
                        </div>
                        <div className="Container">
                            <h2 className="Thanks">Merci!</h2>
                            <p className="Msg">
                                Nous allons vous envoyer un email
                            </p>
                        </div>
                        <p className="FollowUs">Suivez nous</p>
                        <div className="SocialMedia">
                            <InstagramIcon className="SocialMediaIcon" />
                            <FacebookIcon className="SocialMediaIcon" />
                            <LinkedInIcon className="SocialMediaIcon" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
