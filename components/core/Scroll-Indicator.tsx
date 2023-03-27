import React, { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
//
//
export default function Scroll_Indicator({ sections }: any) {
    const [activeSection, setActiveSection] = useState(0);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            const sectionTops = sections.map(
                (section: { current: { offsetTop: any } }) =>
                    section.current.offsetTop
            );
            const currentScroll = window.scrollY;
            const currentSection = sectionTops.findIndex(
                (top: number) => top > currentScroll
            );
            setActiveSection(
                currentSection === -1 ? sections.length - 1 : currentSection - 1
            );
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const handleScrollToSection = (index: string | number) => {
        sections[index].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="ScrollIndicator__Container">
            <div className="ScrollIndicator__Container__Element">
                {sections.map((section: any, index: number) => (
                    <motion.div
                        key={index}
                        className={`ScrollIndicator__Container__Element__Item ${
                            activeSection === index ? "Active" : "Inactive"
                        }`}
                        onClick={() => handleScrollToSection(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <motion.div
                            className="ScrollIndicator__Container__Element__Item__Dot"
                            initial={{ scale: 0.8 }}
                            animate={{
                                scale: activeSection === index ? 1.2 : 0.8,
                                transition: { duration: 0.3 },
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
