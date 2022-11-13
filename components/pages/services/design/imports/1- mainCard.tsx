import Image from "next/image";
import iPad from "/public/img/assets/3D-icons/iPad.png"
import Illustration from "/public/img/assets/illustrations/Landscape.png"
import { DefaultButton } from "./../../../../core/buttons"
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { width } from "@mui/system";
import React, { useRef} from 'react'

let ImageSources = {
    Main: iPad,
    Illustration: Illustration
}

export default function MainCard(props: any) {
    const cardRef = useRef<HTMLInputElement>(null);

    const x = useMotionValue(200)
    const y = useMotionValue(200)

    const circleX = useSpring(0);
    const circleY = useSpring(0);

    const Degree = 7.5;

    const rotateX = useTransform(y, [0, 400], [Degree, -Degree]);
    const rotateY = useTransform(x, [0, 400], [-Degree, Degree]);

    function handleMouse(event: any) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);

        circleX.set((event.clientX - rect.left));
        circleY.set((event.clientY - rect.top));
    }

    function handleMouseLeave() {
        x.set(200);
        y.set(200);
    }


    return (
        <motion.div className="Wrapper"
        style={{
            ...props.style,
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            perspective: 1000,
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <motion.div 
                ref={cardRef} 
                className="BigCard"
                transition={{ type: "spring", stiffness: 100 }}
                style= {{
                    rotateX: rotateX,
                    rotateY: rotateY,

                }}
                onMouseMove={handleMouse}
            >
                <Image src={ImageSources.Illustration} layout="fill" objectFit="cover" alt="" className="Background"/>


                <div className="Content">
                    <div className="Image">
                        <Image src={ImageSources.Main} layout="fill" objectFit="cover" alt=""/>  
                    </div>

                    <div className="Text">
                        <div className="Title">
                            <h1>Design for people</h1>
                            <p>Our creative design solutions are for people, not for machines. Yet made by people and machines.</p>
                        </div>

                        <DefaultButton bgColor="White">Read More</DefaultButton>
                    </div>
                    <motion.div 
                    className="Highlight"
                    style= {{top: circleX + "px", left: circleY + "px"}}
                    />
                </div>

            </motion.div>
        </motion.div>
    )
}