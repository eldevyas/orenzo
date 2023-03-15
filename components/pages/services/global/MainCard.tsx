import Image from "next/image";

import { DefaultButton } from "./../../../core/buttons";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { width } from "@mui/system";
import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function MainCard(props: any) {
    let ImageSources = {
        Main: props.Main,
        Illustration: props.Illustration,
    };

    console.log(ImageSources);

    const router = useRouter();

    const cardRef = useRef<HTMLInputElement>(null);
    const circleRef = useRef<HTMLInputElement>(null);

    const DX = useMotionValue(200);
    const DY = useMotionValue(200);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const Degree = 5;

    const rotateX = useTransform(DY, [0, 400], [Degree, -Degree]);
    const rotateY = useTransform(DX, [0, 400], [-Degree, Degree]);

    function handleMouse(event: any) {
        if (cardRef.current != null) {
            const rect = cardRef.current.getBoundingClientRect();

            DX.set(
                event.clientX - rect.left - cardRef.current.clientWidth * 0.3
            );
            DY.set(event.clientY - rect.top - cardRef.current.clientWidth * 0);

            if (circleRef.current != null) {
                x.set(
                    event.clientX -
                        rect.left -
                        circleRef.current.clientWidth / 2
                );
                y.set(
                    event.clientY -
                        rect.top -
                        circleRef.current.clientHeight / 2
                );
            }
        }
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        DX.set(200);
        DY.set(200);
    }

    return (
        <motion.div
            className="Wrapper"
            transition={{ type: "spring", stiffness: 100 }}
            style={{
                ...props.style,
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                perspective: 1400,
            }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                ref={cardRef}
                className="BigCard"
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                // style={{
                //     rotateX: rotateX,
                //     rotateY: rotateY,
                // }}
                initial="false"
                animate={{
                    rotateX: rotateX.get(),
                    rotateY: rotateY.get(),
                }}
                onMouseMove={handleMouse}
            >
                {props.Illustration ? (
                    <Image
                        src={ImageSources.Illustration}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        className="Background"
                        style={{
                            transform: "translateZ(-50px)",
                        }}
                    />
                ) : null}

                <div className="Content">
                    {props.Main ? (
                        <div
                            className="Image"
                            style={{
                                transform:
                                    "perspective(500px) translateZ(20px)",
                            }}
                        >
                            <Image
                                src={ImageSources.Main}
                                layout="fill"
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                    ) : null}

                    <div
                        className="Text"
                        style={{
                            transform: "perspective(500px) translateZ(20px)",
                        }}
                    >
                        <div className="Title">
                            <h1>{props.title}</h1>
                            <p>{props.description}</p>
                        </div>

                        <DefaultButton
                            bgColor="White"
                            onClick={() => {
                                router.push(props.href);
                            }}
                        >
                            {props.button ? props.button : "Read More"}
                        </DefaultButton>
                    </div>
                    <motion.div
                        dir="ltr"
                        ref={circleRef}
                        className="Highlight"
                        transition={{ type: "spring", stiffness: 1000 }}
                        style={{ left: x, top: y }}
                    />

                    <Button variant="contained" className="ClickEffect" />
                </div>
            </motion.div>
        </motion.div>
    );
}
