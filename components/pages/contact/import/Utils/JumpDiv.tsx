import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 600,
};

const duration = 1;

const jumpVariants = {
    start: {
        y: [0, 2.5, -5, 5, -10],
        transition: { duration: duration },
    },
    end: {
        y: [-10, 5, -5, 2.5, 0],
        transition: { duration: duration, ...spring },
    },
    center: {
        y: [-10, 5, -5, 2.5, 0],
        transition: { duration: duration, ...spring },
    },
};

const JumpingDiv = (props: any) => {
    return (
        <motion.div
            className="JumpingDiv"
            variants={jumpVariants}
            initial="start"
            animate="center"
            whileTap="end"
            whileHover="end"
            style={{ originY: 1 }}
        >
            {props.children}
        </motion.div>
    );
};

export default JumpingDiv;
