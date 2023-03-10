import { useRef, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    useAnimation,
} from "framer-motion";

const Item = (props: any) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);
    const titleVariants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, delay: 0.25 },
        },
        hidden: { opacity: 0, scale: 1 },
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, isInView]);

    return (
        <>
            <motion.h1
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={titleVariants}
                transition={{ type: "spring", stiffness: 100 }}
                className="square"
            >
                {props.first}
                <br />
                {props.second}
            </motion.h1>
        </>
    );
};

export default function Banner(props: any) {
    const Items: { first: string; second: string }[] = props.Data;

    return (
        <>
            <div className="Banner">
                {Items.map((item, index) => (
                    <Item key={index} first={item.first} second={item.second} />
                ))}
            </div>
        </>
    );
}
