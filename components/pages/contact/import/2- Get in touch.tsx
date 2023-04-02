import React, { useState, useEffect, useRef } from "react";
import { DefaultButton } from "../../../core/buttons";
import { Properties } from "./Utils/FormProps";
import * as Yup from "yup";
import { styled } from "@mui/material/styles";
import axios from "axios";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
    useFormik,
} from "formik";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
//
import { motion, AnimatePresence } from "framer-motion";
//
//
//
export default function GetInTouch(props: Properties) {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const messageRef = useRef<HTMLDivElement>(null);
    let Title = props.Title;
    let Description = props.Description;

    const InterestOptions = [
        {
            value: "Design",
            label: props.Form.Interest.Options.Design,
        },
        {
            value: "Development",
            label: props.Form.Interest.Options.Development,
        },
        {
            value: "Marketing",
            label: props.Form.Interest.Options.Marketing,
        },
        {
            value: "Other",
            label: props.Form.Interest.Options.Other,
        },
    ];

    const BudgetOptions = [
        {
            value: "-10,000 Dh",
            label: props.Form.Budget.Options["-1000"],
        },
        {
            value: "10,000 Dh - 50,000 Dh",
            label: props.Form.Budget.Options["1000-5000"],
        },
        {
            value: "50,000 Dh - 100,000 Dh",
            label: props.Form.Budget.Options["5000-10000"],
        },
        {
            value: "+100,000 Dh",
            label: props.Form.Budget.Options["+10000"],
        },
    ];

    const ElementsRef = React.useRef<HTMLFormElement>(null);
    const handleMouseMove = (e: any) => {
        if (ElementsRef != null) {
            const Elements: any = ElementsRef.current!.getElementsByClassName(
                "PageContent__GetInTouch__Form__Field__Container"
            );

            const ElementsRect = ElementsRef.current!.getBoundingClientRect();

            for (const Element of Elements) {
                const rect = Element.getBoundingClientRect();
                const x = e.clientX - rect.x;
                const y = e.clientY - rect.y;

                Element.style.setProperty("--mouse-x", `${x}px`);
                Element.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    };

    const formik = useFormik({
        initialValues: {
            fullName: "",
            Number: "",
            email: "",
            interest: [],
            budget: [],
            message: "",
        },
        validationSchema: Yup.object().shape({
            fullName: Yup.string()
                .min(2, "Too Short!")
                .max(80, "Too Long!")
                .required("Required"),
            Number: Yup.string().required("Required"),
            email: Yup.string().email("Invalid Email").required("Required"),
            interest: Yup.string().required("Required"),
            budget: Yup.string().required("Required"),
            message: Yup.string().optional(),
        }),
        onSubmit: (values: {
            fullName: any;
            Number: any;
            email: any;
            interest: any;
            budget: any;
            message: any;
        }) => {
            setLoading(true);
            axios
                .post(
                    "https://sheet.best/api/sheets/059df18e-304a-4cce-a8c2-f0dcf45e5b56",
                    {
                        "Full Name": values.fullName,
                        Number: values.Number,
                        Email: values.email,
                        Interest: values.interest,
                        Budget: values.budget,
                        Message: values.message,
                    }
                )
                .then(function (response) {
                    console.log(response);
                    formik.resetForm();
                    handleOpenModal();
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false);
                });
        },
    });

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleClickOutside = (event: any) => {
        if (messageRef.current && !messageRef.current.contains(event.target)) {
            // Clicked outside of message container, hide modal
            handleCloseModal();
        }
    };

    return (
        <>
            {props.showForm ? (
                <>
                    <div className="PageContent__GetInTouch">
                        <div className="PageContent__GetInTouch__Heading TorchLightEffect">
                            <div className="PageContent__GetInTouch__Heading__Title">
                                {Title}
                            </div>
                            <div className="PageContent__GetInTouch__Heading__Description">
                                {Description}
                            </div>
                        </div>

                        <form
                            className="PageContent__GetInTouch__Form"
                            ref={ElementsRef}
                            onMouseMove={handleMouseMove}
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="PageContent__GetInTouch__Form__Field">
                                <div className="PageContent__GetInTouch__Form__Field__Label">
                                    {props.Form.Name.Label}
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Container">
                                    <input
                                        name="fullName"
                                        type="text"
                                        value={formik.values.fullName}
                                        placeholder={
                                            props.Form.Name.Placeholder
                                        }
                                        className="PageContent__GetInTouch__Form__Field__Container__Input"
                                        onChange={formik.handleChange}
                                        onFocus={(e: {
                                            target: {
                                                classList: {
                                                    add: (arg0: string) => void;
                                                };
                                            };
                                        }) => {
                                            e.target.classList.add("Focused");
                                        }}
                                        onBlur={(e: {
                                            target: {
                                                classList: {
                                                    remove: (
                                                        arg0: string
                                                    ) => void;
                                                };
                                            };
                                        }) => {
                                            e.target.classList.remove(
                                                "Focused"
                                            );
                                            formik.handleBlur;
                                        }}
                                    />
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Error">
                                    {formik.touched.fullName &&
                                    formik.errors.fullName ? (
                                        <div>{formik.errors.fullName}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="PageContent__GetInTouch__Form__Field">
                                <div className="PageContent__GetInTouch__Form__Field__Label">
                                    {props.Form.PhoneNumber.Label}
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Container">
                                    <input
                                        name="Number"
                                        type="tel"
                                        value={formik.values.Number}
                                        placeholder={
                                            props.Form.PhoneNumber.Placeholder
                                        }
                                        className="PageContent__GetInTouch__Form__Field__Container__Input"
                                        onChange={formik.handleChange}
                                        onFocus={(e: {
                                            target: {
                                                classList: {
                                                    add: (arg0: string) => void;
                                                };
                                            };
                                        }) => {
                                            e.target.classList.add("Focused");
                                        }}
                                        onBlur={(e: {
                                            target: {
                                                classList: {
                                                    remove: (
                                                        arg0: string
                                                    ) => void;
                                                };
                                            };
                                        }) => {
                                            e.target.classList.remove(
                                                "Focused"
                                            );
                                            formik.handleBlur;
                                        }}
                                    />
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Error">
                                    {formik.touched.Number &&
                                    formik.errors.Number ? (
                                        <div>{formik.errors.Number}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="PageContent__GetInTouch__Form__Field">
                                <div className="PageContent__GetInTouch__Form__Field__Label">
                                    {props.Form.Email.Label}
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Container">
                                    <input
                                        name="email"
                                        type="email"
                                        value={formik.values.email}
                                        placeholder={
                                            props.Form.Email.Placeholder
                                        }
                                        className="PageContent__GetInTouch__Form__Field__Container__Input"
                                        onChange={formik.handleChange}
                                        onFocus={(e: {
                                            target: {
                                                classList: {
                                                    add: (arg0: string) => void;
                                                };
                                            };
                                        }) => {
                                            e.target.classList.add("Focused");
                                        }}
                                        onBlur={(e: {
                                            target: {
                                                classList: {
                                                    remove: (
                                                        arg0: string
                                                    ) => void;
                                                };
                                            };
                                        }) => {
                                            e.target.classList.remove(
                                                "Focused"
                                            );
                                            formik.handleBlur;
                                        }}
                                    />
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Error">
                                    {formik.touched.email &&
                                    formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="PageContent__GetInTouch__Form__Field">
                                <div className="PageContent__GetInTouch__Form__Field__Label">
                                    {props.Form.Interest.Label}
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Container">
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formik.values.interest}
                                        placeholder={
                                            props.Form.Interest.Placeholder
                                        }
                                        className="PageContent__GetInTouch__Form__Field__Container__Input"
                                        onChange={formik.handleChange}
                                        onFocus={(e: any) => {
                                            e.target.classList.add("Focused");
                                        }}
                                        onBlur={(e: any) => {
                                            e.target.classList.remove(
                                                "Focused"
                                            );
                                            formik.handleBlur;
                                        }}
                                    >
                                        <option value={""} disabled>
                                            {props.Form.Interest.Placeholder}
                                        </option>
                                        {InterestOptions.map(
                                            (Option, Index) => (
                                                <option
                                                    value={Option.label}
                                                    key={Index}
                                                >
                                                    {Option.label}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Error">
                                    {formik.touched.interest &&
                                    formik.errors.interest ? (
                                        <div>{formik.errors.interest}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="PageContent__GetInTouch__Form__Field">
                                <div className="PageContent__GetInTouch__Form__Field__Label">
                                    {props.Form.Budget.Label}
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Container">
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formik.values.budget}
                                        placeholder={
                                            props.Form.Budget.Placeholder
                                        }
                                        className="PageContent__GetInTouch__Form__Field__Container__Input"
                                        onChange={formik.handleChange}
                                        onFocus={(e: any) => {
                                            e.target.classList.add("Focused");
                                        }}
                                        onBlur={(e: any) => {
                                            e.target.classList.remove(
                                                "Focused"
                                            );
                                            formik.handleBlur;
                                        }}
                                    >
                                        <option value={""} disabled>
                                            {props.Form.Interest.Placeholder}
                                        </option>
                                        {BudgetOptions.map((Option, Index) => (
                                            <option
                                                value={Option.label}
                                                key={Index}
                                            >
                                                {Option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Error">
                                    {formik.touched.budget &&
                                    formik.errors.budget ? (
                                        <div>{formik.errors.budget}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="PageContent__GetInTouch__Form__Field">
                                <div className="PageContent__GetInTouch__Form__Field__Label">
                                    {props.Form.Message.Label}
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Container">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formik.values.message}
                                        rows={6}
                                        placeholder={
                                            props.Form.Message.Placeholder
                                        }
                                        className="PageContent__GetInTouch__Form__Field__Container__Input"
                                        onChange={formik.handleChange}
                                        onFocus={(e: any) => {
                                            e.target.classList.add("Focused");
                                        }}
                                        onBlur={(e: any) => {
                                            e.target.classList.remove(
                                                "Focused"
                                            );
                                            formik.handleBlur;
                                        }}
                                    />
                                </div>
                                <div className="PageContent__GetInTouch__Form__Field__Error">
                                    {formik.touched.message &&
                                    formik.errors.message ? (
                                        <div>{formik.errors.message}</div>
                                    ) : null}
                                </div>
                            </div>
                        </form>
                        <div className="PageContent__GetInTouch__FormAction">
                            <LoadingButton
                                size="small"
                                onClick={(e: any) => {
                                    formik.handleSubmit(e);
                                }}
                                startIcon={isLoading ? null : <SendIcon />}
                                loading={isLoading}
                                loadingPosition="center"
                                variant="contained"
                                className={`DefaultButton Blue ${
                                    isLoading ? "Loading" : ""
                                }`}
                            >
                                <span>
                                    {!isLoading ? props.Form.Button : " "}
                                </span>
                            </LoadingButton>
                        </div>
                        <AnimatePresence>
                            {showModal ? (
                                <motion.div
                                    className="PageContent__GetInTouch__Modal"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onMouseDown={handleClickOutside}
                                >
                                    <motion.div
                                        ref={messageRef}
                                        className="PageContent__GetInTouch__Modal__Message"
                                        initial={{ y: -100 }}
                                        animate={{ y: 0 }}
                                        exit={{ y: -100 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="PageContent__GetInTouch__Modal__Message__Title">
                                            {props.Modal.Title}
                                        </div>
                                        <div className="PageContent__GetInTouch__Modal__Message__Subtitle">
                                            {props.Modal.Subtitle}
                                        </div>
                                        <div className="PageContent__GetInTouch__Modal__Message__Icons"></div>
                                    </motion.div>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </div>
                </>
            ) : null}
        </>
    );
}
