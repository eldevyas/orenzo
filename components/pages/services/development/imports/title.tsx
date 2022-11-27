import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
    motion,
    useScroll,
    useViewportScroll,
    useTransform,
    useMotionValue,
} from "framer-motion";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function IMacImage(props: any) {
    const ScrollPercentage = useMotionValue(props.Height);
    const Height = useTransform(ScrollPercentage, [0, 1], [0, 538]);

    return (
        <>
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

                    <rect
                        id="path-2"
                        x="0"
                        y="0"
                        width="866"
                        height={Height.get()}
                        rx="27"
                    ></rect>
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
                        <use id="Mask" fill="#000000" xlinkHref="#path-2"></use>
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
                        <use id="Mask" fill="#000000" xlinkHref="#path-2"></use>
                        <motion.image
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
        </>
    );
}

export default function Title() {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            console.log(e);
        });
    }, []);

    return (
        <>
            <div className="PageTitle">
                <div className="Text">
                    <div className="Name">Development</div>

                    <div className="Description">
                        Making your product come alive
                    </div>
                </div>

                <div className="Image" ref={imageRef}>
                    <IMacImage Height={0.5} />
                </div>
            </div>

            <div className="Potential">
                <div className="Name">Unleashing your potential</div>

                <div className="Description">
                    Okay, so your digital product is designed. What’s next? Next
                    comes development. We know this is where things can go awry
                    if it’s not done the right way. Not that it ever happens to
                    us, mind you. We don’t compromise, bringing it all together
                    in a simple solution.
                </div>
            </div>

            <div className="Develop">
                <div className="Name">
                    <span className="brackets">{"<"}</span>
                    <span className="text">{"Develop"}</span>
                    <span className="slash">{"/"}</span>
                    <span className="brackets">{">"}</span>
                </div>

                <div className="Description">
                    We’ve had years of experience and developed dozens of
                    projects. So we know what to do to achieve results that will
                    make our clients proud.{" "}
                </div>
            </div>
        </>
    );
}
