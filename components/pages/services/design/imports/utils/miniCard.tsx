import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MiniCard(props: any) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [80, -80]);
    const rotateY = useTransform(x, [-100, 100], [-80, 80]);

    return (
        <div className="Card">
            <motion.div className={"Circle"} />

            <motion.div
                style={{
                    x: x,
                    y: y,
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                className="MiniCard"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, zIndex: 100, cursor: "grabbing" }}
                drag
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                dragElastic={0.1}
            >
                <Image
                    alt=""
                    src={props.image}
                    layout="fill"
                    objectFit="cover"
                    className="Image"
                />
                <div className="Overlay" />
                <div
                    className="Text"
                    style={{
                        // Transform Z
                        transform: "transformZ(25px)",
                    }}
                >
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </motion.div>
        </div>
    );
}
