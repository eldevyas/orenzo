import Image from "next/image";
import { DefaultButton } from "./../../../core/buttons";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { width } from "@mui/system";
import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Tilt from "react-tilt";

export default function MainCard(props: any) {
    let CardRef = useRef<any>(null);
    let GlowRef = useRef<HTMLDivElement>(null);

    let ImageSources = {
        Main: props.Main,
        Illustration: props.Illustration,
    };
    const router = useRouter();

    let Style =
        "--glow-bg: radial-gradient( circle at 501.193px 934.806px, #0141FF55, #0000000f ) ; --glow-opacity:0";

    const handleMouseMove = (e: MouseEvent) => {
        if (GlowRef.current && GlowRef != null) {
            const Glow: any = GlowRef.current;

            const rect = Glow.getBoundingClientRect();
            const x = e.clientX - rect.x;
            const y = e.clientY - rect.y;

            Glow.style.setProperty(
                "--glow-bg",
                `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.35), #0000000f)`
            );
            Glow.style.setProperty("--glow-opacity", `1`);
        }
    };

    const handleMouseLeave = (e: MouseEvent) => {
        if (GlowRef.current && GlowRef != null) {
            const Glow: any = GlowRef.current;
            Glow.style.setProperty("--glow-opacity", `0`);
        }
    };

    return (
        <div className="Wrapper">
            <Tilt
                options={{
                    reverse: false, // reverse the tilt direction
                    max: 10, // max tilt rotation (degrees)
                    startX: 0, // the starting tilt on the X axis, in degrees.
                    startY: 0, // the starting tilt on the Y axis, in degrees.
                    perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
                    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
                    speed: 1000, // Speed of the enter/exit transition
                    transition: true, // Set a transition on enter/exit.
                    axis: null, // What axis should be enabled. Can be "x" or "y"
                    reset: true, // If the tilt effect has to be reset on exit.
                    "reset-to-start": true, // Whether the exit reset will go to [0,0] (default) or [startX, startY]
                    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
                    glare: false, // if it should have a "glare" effect
                    "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
                    "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
                    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
                    "mouse-event-element": null, // css-selector or link to HTML-element what will be listen mouse events
                    gyroscope: true, // Boolean to enable/disable device orientation detection,
                    gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
                    gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
                    gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
                    gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
                }}
                className="BigCard"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={CardRef}
                data-tilt
                data-tilt-full-page-listening
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

                    <div className="Glow" ref={GlowRef}></div>

                    <Button variant="contained" className="ClickEffect" />
                </div>
            </Tilt>
        </div>
    );
}
