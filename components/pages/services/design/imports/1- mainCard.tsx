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
    const circleRef = useRef<HTMLInputElement>(null);

    const DX = useMotionValue(200)
    const DY = useMotionValue(200)

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const Degree = 5;

    const rotateX = useTransform(DX, [0, 400], [Degree, -Degree]);
    const rotateY = useTransform(DY, [0, 400], [-Degree, Degree]);

    function handleMouse(event: any) {
        const rect = event.currentTarget.getBoundingClientRect();

        DX.set(event.clientX - rect.left);
        DY.set(event.clientY - rect.top);

        
        if (circleRef.current != null) {
            x.set(event.clientX - rect.left - (circleRef.current.clientWidth / 1.75));
            y.set(event.clientY - rect.top - (circleRef.current.clientHeight / 2.5));            
        }

    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        DX.set(200);
        DY.set(200);
    }


    return (
        <motion.div className="Wrapper"
        transition={{ type: "spring", stiffness: 100 }}
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
                transition={{ type: "spring", stiffness: 1000 }}
                style= {{
                    rotateX: rotateX,
                    rotateY: rotateY
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
                    ref={circleRef}
                    className="Highlight"
                    transition={{ type: "spring", stiffness: 1000 }}
                    style= {{x, y}}
                    />
                </div>

            </motion.div>
        </motion.div>
    )
}