import * as React from "react";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import { US, FR, MA, FlagComponent } from "country-flag-icons/react/3x2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function SelectLocal(props: any) {
    const [isOpen, setOpen] = React.useState(false);
    const [Direction, setDirection] = React.useState("ltr");

    const { i18n } = useTranslation();

    const Router = useRouter();
    const { pathname, asPath, query } = Router;

    const handleClick = () => {
        setOpen(!isOpen);
    };
    const setCookie = (LocaleString: string) => {
        document.cookie = `NEXT_LOCALE=${LocaleString}; max-age=31536000; path=/`;
    };

    const handleItemClick = (LocaleString: string) => {
        setOpen(!isOpen);
        setCookie(LocaleString);
        Router.push({ pathname, query }, asPath, { locale: LocaleString });
        console.log(
            "%c Locale has been changed to:",
            "background: #222; color: #bada55",
            LocaleString
        );
    };

    const checkDirection = () => {
        let documentDirection = i18n.dir;

        if (typeof documentDirection === "string") {
            switch (documentDirection) {
                case "ltr":
                    console.log("Direction is LTR!");
                    return true;
                case "rtl":
                    console.log("Direction is RTL!");
                    return false;
                case "default":
                    console.log("Direction is Default!");
                    return true;
            }
        } else {
            return true;
        }
    };

    let LeftDir = checkDirection();

    const Languages: {
        name: string;
        locale: string;
        flag: FlagComponent;
        dir: any;
    }[] = [
        {
            name: "English",
            locale: "en",
            flag: US,
            dir: "ltr",
        },
        {
            name: "العربية",
            locale: "ar",
            flag: MA,
            dir: "rtl",
        },
        {
            name: "Français",
            locale: "fr",
            flag: FR,
            dir: "ltr",
        },
    ];

    return (
        <div className="SelectSection">
            <Button
                className="NavButton"
                variant="text"
                startIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                onClick={handleClick}
            >
                {props["data-text"]}
            </Button>

            {isOpen ? (
                <div
                    className="ToggleGroup"
                    style={{
                        width: "auto",
                        left: `${Direction === "ltr" ? 0 : "auto"}`,
                        right: `${Direction === "rtl" ? 0 : "auto"}`,
                    }}
                >
                    {Languages.map((lang, index) => {
                        let activeState = "";

                        let CurrentURL = Router.pathname;
                        let CurrentLocale = i18n.language;
                        let ItemLocale = lang.locale;
                        if (CurrentLocale == ItemLocale) {
                            activeState = "Active";
                        }

                        return (
                            <Button
                                key={index}
                                className={"ToggleButton " + activeState}
                                variant="text"
                                onClick={() => {
                                    handleItemClick(lang.locale);
                                }}
                                dir={lang.dir}
                            >
                                <lang.flag />
                                {lang.name}
                            </Button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
