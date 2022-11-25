import React from 'react';
import Button from '@mui/material/Button';
import More from '@mui/icons-material/Add';
import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";

type Props = {
  title: string;
  body: ReactNode;
};

const Disclosure = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
    // className="QandA"
    onClick={() => setIsOpen((prev) => !prev)}
    style={{width: "100%", display: "flex", flexDirection: "column", gap: "1rem"}}
    >
        <Button
            variant="text"
            aria-controls={props.title}
            aria-expanded={isOpen}
            className="Question"
            sx={{
                width: "100%", 
                justifyContent: "space-between", 
                padding: "1rem 2rem", 
                color: "#505050", 
                fontSize: "1.25rem", 
                fontWeight: "bold", 
                background: "linear-gradient(90deg, #E6E9F0 0%, #EEF1F5 100%)",
                borderRadius: "1rem"
            }}
        >
            <div className="QuestionText">{props.title}</div>
            <AnimatePresence initial={false} mode="wait">
            <motion.div
                key={isOpen ? "minus" : "plus"}
                style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                initial={{
                rotate: isOpen ? -90 : 90,
                }}
                animate={{
                rotate: 0,
                transition: {
                    type: "tween",
                    duration: 0.15,
                    ease: "circOut",
                },
                }}
                exit={{
                rotate: isOpen ? -90 : 90,
                transition: {
                    type: "tween",
                    duration: 0.15,
                    ease: "circIn",
                },
                }}
            >
                {/* {isOpen ? <More /> : <More />} */}

                {
                    <More sx={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                    }}/>
                }

            </motion.div>
            </AnimatePresence>
        </Button>
        <motion.div
        className="Answer"
        id={props.title}
        initial={false}
        style={{margin: "0rem 2rem", maxWidth: "600px"}}
        animate={
        isOpen
            ? {
                height: "auto",
                opacity: 1,
                display: "block",
                transition: {
                height: {
                    duration: 0.4,
                },
                opacity: {
                    duration: 0.25,
                    delay: 0.15,
                },
                },
            }
            : {
                height: 0,
                opacity: 0,
                transition: {
                height: {
                    duration: 0.4,
                },
                opacity: {
                    duration: 0.25,
                },
                },
                transitionEnd: {
                    display: "none",
                },
            }
        }
        >
        {props.body}
        </motion.div>
    </div>
  );
};

export default function FAQ() {
    let defaultFAQs = [
        {
            question: "How long does it take to get started?",
            answer: "Our turnaround is lightning-fast. Just one week from signing off and we’re there with the kick-off meeting to get it rolling."
        },
        {
            question: "How long does it take to get started?",
            answer: "Our turnaround is lightning-fast. Just one week from signing off and we’re there with the kick-off meeting to get it rolling."
        },
        {
            question: "How long does it take to get started?",
            answer: "Our turnaround is lightning-fast. Just one week from signing off and we’re there with the kick-off meeting to get it rolling."
        },
        {
            question: "How long does it take to get started?",
            answer: "Our turnaround is lightning-fast. Just one week from signing off and we’re there with the kick-off meeting to get it rolling."
        },
        {
            question: "How long does it take to get started?",
            answer: "Our turnaround is lightning-fast. Just one week from signing off and we’re there with the kick-off meeting to get it rolling."
        }
    ];

    return (

        <>
            <div className="FAQ">
                <div className="Title">
                    FAQ
                </div>

                <div className="List">
                    {
                        defaultFAQs.map(
                            (faq, i) => (<Disclosure key={i} title={faq.question} body={faq.answer} />)
                        )
                    }
                </div>
            </div>
        </>
    );
}
