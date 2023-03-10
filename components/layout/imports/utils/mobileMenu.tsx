import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PublicIcon from "@mui/icons-material/Public";
import Image from "next/image";
// Items Icons
import HomeIcon from "@mui/icons-material/Home";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { US, FR, MA, FlagComponent } from "country-flag-icons/react/3x2";
import BrushIcon from "@mui/icons-material/Brush";
import TerminalIcon from "@mui/icons-material/Terminal";
import InsightsIcon from "@mui/icons-material/Insights";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export default function MobileMenu(props: any) {
    const { t, i18n } = useTranslation("common");
    const { locale } = useRouter();
    const Items: {
        href: String;
        icon: any;
        title: String;
        positionLeft: String;
        positionTop: String;
        pages?: {
            title: string;
            href: string;
        }[];
    }[] = [
        {
            href: "/",
            icon: <HomeIcon />,
            title: t("header.links.home"),
            positionLeft: "0%",
            positionTop: "0%",
        },
        {
            href: "/services",
            icon: <DesignServicesIcon />,
            title: t("header.links.services"),
            positionLeft: "50%",
            positionTop: "0%",
            pages: [
                {
                    title: "Design",
                    href: "/services/design",
                },
                {
                    title: "Development",
                    href: "/services/development",
                },
                {
                    title: "Marketing",
                    href: "/services/marketing",
                },
            ],
        },
        {
            href: "/about",
            icon: <AutoStoriesIcon />,
            title: t("header.links.about"),
            positionLeft: "0%",
            positionTop: "calc(100%/3 * 1)",
        },
        {
            href: "/portfolio",
            icon: <FolderOpenIcon />,
            title: t("header.links.portfolio"),
            positionLeft: "50%",
            positionTop: "calc(100%/3 * 1)",
        },
        {
            href: "/contact",
            icon: <LocalPostOfficeIcon />,
            title: t("header.links.contact"),
            positionLeft: "0%",
            positionTop: "calc(100%/3 * 2)",
        },
        {
            href: "/languages",
            icon: <PublicIcon />,
            title: t("header.links.language"),
            positionLeft: "50%",
            positionTop: "calc(100%/3 * 2)",
        },
    ];

    const Router = useRouter();
    const { pathname, asPath, query } = Router;
    const handleClicked = props.handleClicked;
    const [positionX, setPositionX] = useState("");
    const [positionY, setPositionY] = useState("");
    const [ItemOptions, setOptions] = useState<{
        isInView: boolean;
        Type: string;
        Pages?: { title: String; href: String; icon: any }[];
        Languages?: {}[];
    }>({
        isInView: false,
        Type: "",
    });

    const Container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let CurrentURL = "/" + Router.pathname.split("/")[1];
        console.log("Current URL: ", CurrentURL);

        Items.forEach((item) => {
            if (item.href == CurrentURL) {
                ChangePosition(item.positionLeft, item.positionTop);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ChangeRoute = (Link: any) => {
        Router.push(Link);
        props.handleClicked();
    };

    const ChangePosition = (X: String, Y: String) => {
        if (Container.current != null) {
            // 👉️ TypeScript knows that ref is not null here
            let Width = Container.current.offsetWidth;
            let Height = Container.current.offsetHeight;

            switch (X) {
                case "0%":
                    setPositionX("0px");
                    break;
                case "50%":
                    setPositionX(String(Width / 2) + "px");
                    break;
            }

            switch (Y) {
                case "0%":
                    setPositionY("0px");
                    break;
                case "calc(100%/3 * 1)":
                    setPositionY(String((Height / 3) * 1) + "px");
                    break;
                case "calc(100%/3 * 2)":
                    setPositionY(String((Height / 3) * 2) + "px");
                    break;
            }
        }
    };

    const handleClickItem = (e: any) => {
        const TargetData: {
            id: String;
            href: String;
            positionLeft: String;
            positionTop: String;
            pages?: {
                title: string;
                href: string;
                icon: any;
            }[];
        } = {
            id: e.target.id,
            href: e.target.getAttribute("data-href"),
            positionLeft: e.target.getAttribute("data-positionleft"),
            positionTop: e.target.getAttribute("data-positiontop"),
            pages: [
                {
                    title: t("header.links.servicesPages.design"),
                    href: "/services/design",
                    icon: BrushIcon,
                },
                {
                    title: t("header.links.servicesPages.development"),
                    href: "/services/development",
                    icon: TerminalIcon,
                },
                {
                    title: t("header.links.servicesPages.marketing"),
                    href: "/services/marketing",
                    icon: InsightsIcon,
                },
            ],
        };

        // Get all the Items and remove their red color
        const itemDivs = document.querySelectorAll(".Items .Item");

        for (let i = 0; i < itemDivs.length; i++) {
            const item: any = itemDivs[i];
            item.style.color = "#fff";
        }

        // Add the red color to the current item
        setTimeout(() => {
            e.target.style.color = "#fff";
        }, 100);

        let X = TargetData.positionLeft;
        let Y = TargetData.positionTop;
        ChangePosition(X, Y);

        if (TargetData.href == "/services") {
            setTimeout(() => {
                setOptions({
                    isInView: true,
                    Type: "Pages",
                    Pages: TargetData.pages,
                });
            }, 300);

            return;
        } else if (TargetData.href == "/languages") {
            setTimeout(() => {
                setOptions({
                    isInView: true,
                    Type: "Pages",
                    Languages: [],
                });
            }, 300);
            return;
        }
        ChangeRoute(TargetData.href);
    };

    const handleListClosure = () => {
        setOptions({
            isInView: false,
            Type: "",
        });
    };

    const handleLocaleClick = (LocaleString: any) => {
        Router.push({ pathname, query }, asPath, { locale: LocaleString });
        console.log(
            "%c Locale has been changed to:",
            "background: #222; color: #bada55",
            LocaleString
        );
        handleListClosure();
    };

    const Languages: { name: String; locale: String; flag: FlagComponent }[] = [
        {
            name: "english",
            locale: "en",
            flag: US,
        },
        {
            name: "العربية",
            locale: "ar",
            flag: MA,
        },
        {
            name: "Français",
            locale: "fr",
            flag: FR,
        },
    ];

    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const exit = { opacity: 0 };

    return (
        <>
            <div key="modal" className="MobileMenu">
                <div className="Main">
                    <div className="Logo">
                        <Image
                            src={
                                locale == "ar"
                                    ? "/logo/PNG/Arabic Wide Logo - Dark.png"
                                    : "/logo/PNG/Wide Logo - Dark.png"
                            }
                            alt="Logo"
                            fill
                            style={{
                                objectFit: "cover",
                                // transform: "scale(1.25)"
                            }}
                            priority
                        />
                    </div>

                    {ItemOptions.isInView ? (
                        <Button
                            variant="outlined"
                            className="IconButton White"
                            onClick={handleListClosure}
                        >
                            <KeyboardReturnIcon className="MenuIcon" />
                        </Button>
                    ) : (
                        <Button
                            variant="outlined"
                            className="IconButton White"
                            onClick={handleClicked}
                        >
                            <CloseIcon className="MenuIcon" />
                        </Button>
                    )}
                </div>

                <AnimatePresence>
                    {ItemOptions.isInView ? (
                        <motion.div
                            className="ListView"
                            onClick={() => {
                                handleListClosure;
                            }}
                            initial={initial}
                            animate={animate}
                            exit={exit}
                            transition={{
                                delay: 0,
                                bordeRadius: { duration: 0 },
                                default: { type: "Tween", stiffness: 100 },
                            }}
                        >
                            {ItemOptions.Type == "Pages" &&
                            ItemOptions.Pages != null
                                ? ItemOptions.Pages.map((page, index) => {
                                      let activeState = "";
                                      let CurrentURL = Router.pathname;
                                      let PageHref = page.href;
                                      if (CurrentURL === PageHref) {
                                          activeState = "Active";
                                      }

                                      return (
                                          <>
                                              <Button
                                                  key={index}
                                                  className={
                                                      "PageButton " +
                                                      activeState
                                                  }
                                                  variant="text"
                                                  onClick={() => {
                                                      ChangeRoute(page.href);
                                                  }}
                                              >
                                                  <page.icon />
                                                  {page.title}
                                              </Button>
                                          </>
                                      );
                                  })
                                : Languages.map((lang, index) => {
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
                                              className={
                                                  "LocaleButton " + activeState
                                              }
                                              variant="text"
                                              onClick={() => {
                                                  handleLocaleClick(
                                                      lang.locale
                                                  );
                                              }}
                                          >
                                              <lang.flag />
                                              {lang.name}
                                          </Button>
                                      );
                                  })}
                        </motion.div>
                    ) : (
                        <div
                            className="Items"
                            ref={Container}
                            dir="ltr"
                            // initial={initial}
                            // animate={animate}
                            // exit={exit}
                            // transition={{
                            //     delay: 0,
                            //     bordeRadius: { duration: 0 },
                            //     default: { type: "Tween", stiffness: 100 }
                            // }}
                        >
                            {Items.map((Item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="Item"
                                        id={`${index}`}
                                        data-href={Item.href}
                                        onClick={(e: any) => {
                                            handleClickItem(e);
                                        }}
                                        data-positionleft={Item.positionLeft}
                                        data-positiontop={Item.positionTop}
                                        data-pages={
                                            Item.pages ? Item.pages : null
                                        }
                                    >
                                        {Item.icon}
                                        {Item.title}
                                    </div>
                                );
                            })}

                            <motion.div
                                className="Current"
                                id="Current"
                                initial="false"
                                animate={{ x: positionX, y: positionY }}
                            ></motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
