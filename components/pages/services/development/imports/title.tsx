import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from "framer-motion";

import { Trans, useTranslation } from "react-i18next";

function IMacImage(props: any) {
    let Height = props.Height;

    return (
        <>
            <Parallax speed={-5}>
                <div className="Image">
                    <div>
                        <svg
                            width="1920px"
                            height="1905px"
                            viewBox="0 0 1920 1905"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <defs>
                                <rect
                                    id="path-1"
                                    x="0"
                                    y="0"
                                    width="866"
                                    height="538"
                                    rx="27"
                                ></rect>

                                <motion.rect
                                    id="path-2"
                                    x="0"
                                    y="0"
                                    width="866"
                                    height="538"
                                    rx="27"
                                    style={{
                                        height: Height,
                                    }}
                                ></motion.rect>
                            </defs>
                            <g
                                id="Artboard"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <image
                                    id="iMac"
                                    x="0"
                                    y="0"
                                    width="1920"
                                    height="1905"
                                    xlinkHref="/img/assets/development/iMac.png"
                                ></image>
                                <g
                                    id="Screen"
                                    transform="translate(521.000000, 496.000000)"
                                >
                                    <mask id="mask-1" fill="white">
                                        <use xlinkHref="#path-1"></use>
                                    </mask>
                                    <use
                                        id="Mask"
                                        fill="#000000"
                                        xlinkHref="#path-2"
                                    ></use>
                                    <image
                                        id="Preview"
                                        mask="url(#mask-1)"
                                        x="-1.1937118e-12"
                                        y="0"
                                        width="866.666667"
                                        height="650"
                                        xlinkHref="/img/assets/development/output.png"
                                    ></image>
                                </g>

                                <g
                                    id="Screen"
                                    transform="translate(521.000000, 496.000000)"
                                >
                                    <mask id="mask-2" fill="white">
                                        <use xlinkHref="#path-2"></use>
                                    </mask>
                                    <use
                                        id="Mask"
                                        fill="#000000"
                                        xlinkHref="#path-2"
                                    ></use>
                                    <image
                                        id="Code"
                                        mask="url(#mask-2)"
                                        x="0"
                                        y="-15"
                                        width="866"
                                        height="650"
                                        xlinkHref="https://uploads-ssl.webflow.com/609124aa26f8d4863c88a6d9/611f7cb09740e27d145063e0_code_down.svg"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </Parallax>
        </>
    );
}

const Potential = (props: any) => {
    const words = props.title.split(" "); // split the sentence into an array of words
    const lastWord = words.pop(); // remove and store the last word
    const sentenceWithoutLastWord = words.join(" "); // join the remaining words into a new sentence

    return (
        <div className="Potential">
            <div className="Name">
                {sentenceWithoutLastWord} <span>{lastWord}</span>
            </div>

            <div className="Description">{props.description}</div>
        </div>
    );
};

const Develop = (props: any) => {
    return (
        <div className="Develop" {...props}>
            <div className="Name">
                <span className="brackets">{"<"}</span>
                <span className="text">{props.title}</span>
                <span className="slash">{"/"}</span>
                <span className="brackets">{">"}</span>
            </div>

            <div className="Description">{props.description}</div>
        </div>
    );
};

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handleMatchChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQuery.addEventListener("change", handleMatchChange);
        return () =>
            mediaQuery.removeEventListener("change", handleMatchChange);
    }, [query]);

    return matches;
}

export default function Title(props: any) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation("common");

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    useEffect(() => {
        // Set the Div with targetRef to a specific position
        if (targetRef.current != null) {
            targetRef.current.style.position = "absolute";

            // Give it the position of the Element with the ID of "Code"
            let CodeImage = document.querySelector("#Code");
            if (CodeImage != null) {
                let imgData = {
                    width: CodeImage.getBoundingClientRect().width,
                    height: CodeImage.getBoundingClientRect().height,
                    top: CodeImage.getBoundingClientRect().top,
                    left: CodeImage.getBoundingClientRect().left,
                };

                // Get window Aspect Ratio

                targetRef.current.style.top = imgData.top + "px";

                targetRef.current.style.left = imgData.left + "px";

                targetRef.current.style.width = imgData.width + "px";

                targetRef.current.style.height = imgData.height + "px";
            }
        }

        return scrollYProgress.onChange((latest: any) => {
            console.log("Image Element scroll: ", latest);
        });
    }, [scrollYProgress]);
    const initialHeight = useMediaQuery("(min-width: 1024px)") ? 538 : 300; // choose initial height based on screen size

    const Height = useTransform(scrollYProgress, [0, 1], [initialHeight, 0]); // map scrollYProgress to a range of heights from initialHeight to 0

    return (
        <>
            <div className="PageTitle">
                {/* Text of the title - Top Section */}
                <div className="Text">
                    <div className="Name">{props.Title.Text}</div>

                    <div className="Description">{props.Title.SubText}</div>
                </div>
                {/* Image of the iMac - Parallax Animation */}
                <div className="ImagePosition" ref={targetRef} />

                <IMacImage Height={Height} />
            </div>

            <Potential
                title={props.Potential.Title}
                description={props.Potential.Description}
            />

            <Develop
                title={props.Develop.Title}
                description={props.Develop.Description}
            />
        </>
    );
}
