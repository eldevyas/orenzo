import React from "react";
import Button from "@mui/material/Button";
import More from "@mui/icons-material/Add";
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
            className={isOpen ? "QandA open" : "QandA"}
            onClick={() => setIsOpen((prev) => !prev)}
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
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
                    background:
                        "linear-gradient(90deg, #E6E9F0 0%, #EEF1F5 100%)",
                    borderRadius: "1rem",
                }}
            >
                <div className="QuestionText">{props.title}</div>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={isOpen ? "minus" : "plus"}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
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
                            <More
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                                }}
                            />
                        }
                    </motion.div>
                </AnimatePresence>
            </Button>
            <motion.div
                className="Answer"
                id={props.title}
                initial={false}
                style={{ margin: "0rem 0rem", maxWidth: "600px" }}
                animate={
                    isOpen
                        ? {
                              height: "auto",
                              opacity: 1,
                              display: "block",
                              padding: "1rem 0rem",
                              transition: {
                                  height: {
                                      duration: 0.4,
                                      //   delay: 0.15,
                                  },
                                  opacity: {
                                      duration: 0.25,
                                  },
                                  padding: {
                                      duration: 0.4,
                                  },
                              },
                          }
                        : {
                              height: 0,
                              opacity: 0,
                              padding: "1rem 0rem",
                              transition: {
                                  height: {
                                      duration: 0.4,
                                  },
                                  opacity: {
                                      duration: 0.25,
                                  },
                                  padding: {
                                      duration: 0.4,
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
            answer: "Our turnaround is lightning-fast. Just one week from signing off and we’re there with the kick-off meeting to get it rolling.",
        },
        {
            question: "What is your typical working process?",
            answer: "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it’s off to signing off, kicking off, and getting your business to the next level with a pinch of our design magic.",
        },
        {
            question:
                "Do you work on a fixed-price basis or time and material?",
            answer: "Flexibility is the key of success in this crazy world, so we try to suggest an appropriate solution for each specific case we deal with. The more clear and detailed the requirements are, the more accurate will our estimates be. This is the closest we get to the fixed-price model.",
        },
        {
            question: "How do you usually start new collaborations?",
            answer: "Each new engagement starts with an introduction call and filling out the design/branding brief. If you have a cool project in mind, feel free to get in touch at hello@orenzo.ma",
        },
        {
            question:
                "Do you guys work with big companies only? We’re an early-stage startup.",
            answer: "We’re all for building a borderless world, so we are open to working with any project we come across. By the way, we do believe in startups, and one of those we helped develop from scratch has been sold to https://entercom.com/",
        },
        {
            question: "How long it will take to get an estimate from you?",
            answer: "We hate to keep you waiting. Setting up a team, making preliminary research and analysis, and getting back to you with the contract will take up to 24 hours from the moment we learn what’s needed. Efficiency is one of Orenzo’s key values.",
        },
        {
            question: "Do you have a minimum engagement?",
            answer: "We set no entry thresholds for people who want to work with us. But we still believe that a product that needs to be designed can’t be made within a couple of days. After all, we need some time to research, analyze and come up with a strategy. So we’ve set a minimum project duration as 30 hours and we’re waiting for you!",
        },
        {
            question: "What’s the average project duration?",
            answer: "Our team works full-time on every project, so the overall duration will highly depend on the initial estimate. On average, our projects last from 2 weeks to 5 months.",
        },
        {
            question: "Can we start the design without wireframes?",
            answer: "Wireframes help to build UX without distractions. The wireframe is an essential part of the design process and we would not recommend eliminating it. Having everything polished at the wireframing stage, we can avoid many amendments and revisions at the design stage, which saves both time and money.",
        },
        {
            question: "What templates does Orenzo use to create design?",
            answer: "We don’t use pre-built templates or kits because there’s just no soul in them. We’re committed to building fully customized and product-based solutions that will meet the expectations of the target users. Each pixel and line is designed with love and passion by our creative minds.",
        },
        {
            question:
                "Where should I start with my business if I have an idea?",
            answer: "Hey, you’ve come to the right place! Please get in touch and we’ll help you with the ideation, design, and development. Full cycle on us, no hassle for you. Easy, right?",
        },
    ];

    return (
        <>
            <div className="FAQ">
                <div className="Title">FAQ</div>

                <div className="List">
                    {defaultFAQs.map((faq, i) => (
                        <Disclosure
                            key={i}
                            title={faq.question}
                            body={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
