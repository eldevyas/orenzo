import React from "react"
import { DefaultButton, IconTextButton } from "../../../core/buttons";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { motion } from "framer-motion";
import zIndex from "@material-ui/core/styles/zIndex";
import { Trans, useTranslation } from 'react-i18next'
import Link from "next/link"

export default function LandingSection() {
    const { t } = useTranslation('common');

    const Man = {
        initial: { opacity: 0, y: 100},
        animate: { opacity: 1, y: 0}
    }

    const Card = {
        initial: { opacity: 1, y: 10},
        animate: {  opacity: 1, y: [0, 10, -5, 5, 0]}
    }

    const duration = 1.2;

    const BackCard= {
        show: {
            x: [0, -50, -20],
            scale: 1,
            zIndex: 7,
            filter: "blur(0px)",
            duration,
            transition: {
                ease: "easeInOut",
                duration,
                zIndex: {
                    delay: 0.5,
                    duration
                }
            }
        },
        hidden: {
            x: [-20, -50, 0],
            scale: 1,
            zIndex: 1,
            filter: "blur(1.5px)",
            duration,
            transition: {
                ease: "easeInOut",
                duration,
                zIndex: {
                    delay: 0.5,
                    duration
                }
            }
        }
    }



    return(
        <div className="LandingSection">
            <div className="Text">
                <h1 className="Title">
                <Trans 
                i18nKey="home.content.LandingSection.title"
                components={{
                    Keyword1: <span className="SpanHighlightRed"/>,
                    Keyword2: <span className="SpanHighlightBlue"/>,
                    RedDot: <span className="colorDot" color="red"/>
                }} 
                />
                </h1>

                <p className="Description">
                    {t('home.content.LandingSection.description')}
                </p>

                <div className="Actions">
                    <DefaultButton bgColor="Red" elevation={0} style={{boxShadow: "none"}}>
                        {t('home.content.LandingSection.buttons.primary')}
                    </DefaultButton>

                    <IconTextButton bgColor="Red" icon={<ExpandCircleDownIcon/>}>
                        {t('home.content.LandingSection.buttons.secondary')}
                    </IconTextButton>
                </div>
            </div>

            <div className="Image">
                <motion.div className="Wrapper">
                    <motion.img 
                    initial={Man.initial} 
                    animate={Man.animate}
                    transition={{ delay: 2, type: "Tween" }}
                    src="/img/assets/BusinessMan.png" 
                    className="BusinessMan" 
                    alt="BusinessMan"/>

                    <motion.img 
                    drag
                    dragConstraints={{ left: 5, right: 5, top: 20, bottom: 20}}
                    dragSnapToOrigin={true}
                    initial={Card.initial} 
                    animate={Card.animate}
                    transition={{ delay: 2, type: "spring", repeat: Infinity, duration: 6}}
                    src="/img/assets/Team.png" 
                    className="Team"/>

                    <motion.img 
                    drag
                    dragConstraints={{ left: 5, right: 5, top: 20, bottom: 20}}
                    dragSnapToOrigin={true}
                    initial={Card.initial} 
                    animate={Card.animate}
                    transition={{ delay: 2, type: "spring", repeat: Infinity, duration: 6}}
                    src="/img/assets/Clients.png" 
                    className="Clients"/>

                    <motion.img 
                    variants={BackCard}
                    initial="false"
                    animate="hidden"
                    whileHover="show"
                    whileTap="show"
                    whileFocus="show"
                    drag
                    dragConstraints={{ left: 5, right: 5, top: 20, bottom: 20}}
                    dragSnapToOrigin={true}
                    src="/img/assets/Projects.png" 
                    className="Projects"/>

                    <motion.img 
                    drag
                    dragConstraints={{ left: 5, right: 5, top: 20, bottom: 20}}
                    dragSnapToOrigin={true}
                    initial={Card.initial} 
                    animate={Card.animate}
                    transition={{ delay: 2, type: "spring", repeat: Infinity, duration: 6}}
                    src="/img/assets/Experience.png" 
                    className="Experience"/>
                </motion.div>
            </div>
        </div>
    )
}