import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./utils/mobileMenu";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export interface IOpenMenu {
    isOpen: boolean;
}

export default function DesktopHeader(props: any) {
    const router = useRouter();
    var { links, ...other } = props;
    const { locale } = useRouter();

    const [OpenMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setOpenMenu(!OpenMenu);
        }, 200);
    };

    const initial = {
        opacity: 1,
        x: "100%",
        y: 0,
        borderRadius: "500px 0px 0px 500px",
    };
    const animate = { opacity: 1, x: 0, y: 0, borderRadius: "0px 0px 0px 0px" };
    const exit = {
        opacity: 1,
        x: "100%",
        y: 0,
        borderRadius: "500px 0px 0px 500px",
    };

    return (
        <>
            <div className="NavBar Mobile" {...other}>
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
                                    ? "/logo/PNG/Arabic Wide Logo - Dark.png"
                                    : "/logo/PNG/Wide Logo - Dark.png"
                                : locale == "ar"
                                ? "/logo/PNG/Arabic Wide Logo - Light.png"
                                : "/logo/PNG/Wide Logo - Light.png"
                        }
                        alt="Logo"
                        layout="fill"
                        style={{
                            objectFit: "cover",
                            // transform: "scale(1.25)"
                        }}
                        priority
                    />
                </div>

                <div className="MenuButton">
                    <Button
                        variant="text"
                        className="IconButton"
                        onClick={handleClick}
                    >
                        <MenuIcon className="MenuIcon" />
                    </Button>
                </div>
            </div>
            <AnimatePresence>
                {OpenMenu ? (
                    <motion.div
                        className="MenuWrapper"
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={{
                            delay: 0,
                            bordeRadius: { duration: 0 },
                            default: {
                                type: "spring",
                                stiffness: 25,
                                damping: 10,
                                mass: 1,
                                duration: 0,
                                ease: "easeInOutQuad",
                                delay: 0,
                            },
                        }}
                    >
                        <MobileMenu handleClicked={handleClick} />
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
