import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Router, useRouter } from "next/router";
import SelectLocal from "./utils/SelectLocal";
import SelectPage from "./utils/SelectPage";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useInView, useSpring } from "framer-motion";
//
//
//
//
// Logo Sources
import Arabic_Wide_Logo_Dark from "/public/logo/PNG/Arabic Wide Logo - Dark.png";
import Wide_Logo_Dark from "/public/logo/PNG/Wide Logo - Dark.png";
import Arabic_Wide_Logo_Light from "/public/logo/PNG/Arabic Wide Logo - Light.png";
import Wide_Logo_Light from "/public/logo/PNG/Wide Logo - Light.png";

function ActiveButton({ children, href }: { children: string; href: string }) {
    const router = useRouter();

    const currentLink = router.asPath;
    const indexOfSlash = currentLink.indexOf("/", 2);

    const Link =
        indexOfSlash === -1
            ? currentLink
            : currentLink.substring(0, indexOfSlash);

    const currentClass = Link === href ? "Active" : "Inactive";
    const handleClick = (e: any) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <Button
            variant="text"
            className={"NavButton" + " " + currentClass}
            href={href}
            onClick={handleClick}
        >
            {children}
        </Button>
    );
}

function ScrollComponent() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div className="ScrollComponent">
            <motion.div
                className="ScrollComponent__Indicator"
                style={{ scaleX }}
            />
        </motion.div>
    );
}

export default function DesktopHeader(props: any) {
    const HeaderRef = useRef<HTMLDivElement>(null);
    const [isFixed, setIsFixed] = useState(false);
    const { t } = useTranslation("common");
    const { locale } = useRouter();
    const router = useRouter();

    useEffect(() => {
        HeaderRef.current!.focus();
        if (
            window != undefined &&
            HeaderRef != null &&
            HeaderRef.current != null
        ) {
            window.addEventListener("scroll", () => {
                const scrollY = window.pageYOffset;
                setIsFixed(scrollY > 50);
            });
        }
    }, []);

    let Links: {
        title: string;
        href: string;
        type: string;
        pages?: {
            title: string;
            href: string;
        }[];
    }[] = [
        {
            title: t("header.links.home"),
            href: "/",
            type: "default",
        },
        {
            title: t("header.links.services"),
            href: "/services",
            type: "selectPage",
            pages: [
                {
                    title: t("header.links.servicesPages.design"),
                    href: "/services/design",
                },
                {
                    title: t("header.links.servicesPages.development"),
                    href: "/services/development",
                },
                {
                    title: t("header.links.servicesPages.marketing"),
                    href: "/services/marketing",
                },
            ],
        },
        {
            title: t("header.links.portfolio"),
            href: "/portfolio",
            type: "default",
        },
        {
            title: t("header.links.about"),
            href: "/about",
            type: "default",
        },
        {
            title: "",
            href: "",
            type: "selectLocal",
        },
        {
            title: t("header.links.contact"),
            href: "/contact",
            type: "contact",
        },
    ];

    return (
        <>
            <ScrollComponent />
            <div
                ref={HeaderRef}
                className={`NavBar Desktop ${isFixed ? "Fixed" : ""}`}
                {...props}
            >
                <div
                    className="Logo"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <Image
                        src={
                            props["data-theme"] === "dark"
                                ? locale == "ar"
                                    ? Arabic_Wide_Logo_Dark
                                    : Wide_Logo_Dark
                                : locale == "ar"
                                ? Arabic_Wide_Logo_Light
                                : Wide_Logo_Light
                        }
                        alt="Logo"
                        layout="fill"
                        // style={{
                        //     objectFit: "cover",
                        // }}
                        priority
                    />
                </div>
                <div className="Navigation">
                    {Links.map((link: any, index: number) => {
                        switch (link.type) {
                            case "selectLocal":
                                return (
                                    <SelectLocal
                                        key={index}
                                        data-text={t("header.links.language")}
                                    />
                                );
                                break;
                            case "selectPage":
                                return (
                                    <SelectPage
                                        key={index}
                                        data-text={t("header.links.services")}
                                        pages={link.pages}
                                    />
                                );
                                break;
                            case "contact":
                                return (
                                    <Button
                                        key={index}
                                        variant="contained"
                                        className="ActionButton"
                                        onClick={() => {
                                            router.push(link.href);
                                        }}
                                    >
                                        {t("header.links.contact")}
                                    </Button>
                                );
                                break;
                            case "default":
                                return (
                                    <ActiveButton key={index} href={link.href}>
                                        {link.title}
                                    </ActiveButton>
                                );
                                break;
                        }
                    })}
                </div>
            </div>
        </>
    );
}
